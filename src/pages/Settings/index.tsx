import { SaveIcon } from 'lucide-react';
import { Container } from '../../components/Container';
import { DefaultButton } from '../../components/DefaultButton';
import { DefaultInput } from '../../components/DefaultInput';
import { Heading } from '../../components/Heading';
import { MainTemplate } from '../../templates/MainTemplate';
import { useRef } from 'react';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { showMessage } from '../../adapters/showMessage';
import { TaskActionsTypes } from '../../contexts/TaskContext/taskActions';

export function Settings() {
    const { state, dispatch } = useTaskContext();

    const workTimeInput = useRef<HTMLInputElement>(null);
    const shortBreakTimeInput = useRef<HTMLInputElement>(null);
    const longBreakTimeInput = useRef<HTMLInputElement>(null);

    function handleSubmitSettings(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        showMessage.dismiss();

        const formErrors = [];

        const workTime = Number(workTimeInput.current?.value);
        const shortBreakTime = Number(shortBreakTimeInput.current?.value);
        const longBreakTime = Number(longBreakTimeInput.current?.value);

        if (isNaN(workTime) || isNaN(shortBreakTime) || isNaN(longBreakTime)) {
            formErrors.push('Digite apenas números');
        }

        if (workTime < 1 || workTime > 99) {
            formErrors.push('Apenas digite valores entre 1 e 99 para foco.');
        }

        if (shortBreakTime < 1 || shortBreakTime > 30) {
            formErrors.push(
                'Apenas digite valores entre 1 e 30 para descanso curto.',
            );
        }

        if (longBreakTime < 1 || longBreakTime > 60) {
            formErrors.push(
                'Apenas digite valores entre 1 e 60 para descanso longo.',
            );
        }

        if (formErrors.length !== 0) {
            formErrors.forEach(error => {
                showMessage.error(error);
            });
            return;
        }

        dispatch({
            type: TaskActionsTypes.CHANGE_SETTINGS,
            payload: { workTime, shortBreakTime, longBreakTime },
        });
        showMessage.success('Configurações salvas!');
    }

    return (
        <MainTemplate>
            <Container>
                <Heading>Configurações</Heading>
            </Container>

            <Container>
                <p style={{ textAlign: 'center' }}>
                    Modifique as configurações para tempo de foco, descanso
                    curto e descanso longo.
                </p>
            </Container>

            <Container>
                <form
                    onSubmit={handleSubmitSettings}
                    action=''
                    className='form'
                >
                    <div className='formRow'>
                        <DefaultInput
                            labelText='foco'
                            id='workTime'
                            type='number'
                            ref={workTimeInput}
                            defaultValue={state.config.workTime}
                        />
                    </div>
                    <div className='formRow'>
                        <DefaultInput
                            labelText='Descanso curto'
                            id='shortBreakTime'
                            type='number'
                            ref={shortBreakTimeInput}
                            defaultValue={state.config.shortBreakTime}
                        />
                    </div>
                    <div className='formRow'>
                        <DefaultInput
                            labelText='Descanso longo'
                            id='longBreakTime'
                            type='number'
                            ref={longBreakTimeInput}
                            defaultValue={state.config.longBreakTime}
                        />
                    </div>
                    <div className='formRow'>
                        <DefaultButton
                            icon={<SaveIcon />}
                            aria-label='Salvar configurações'
                            title='Salvar configurações'
                        />
                    </div>
                </form>
            </Container>
        </MainTemplate>
    );
}
