import { DefaultButton } from '../DefaultButton';
import { DefaultInput } from '../DefaultInput';
import { Cycles } from '../Cycles';
import { PlayCircleIcon, StopCircleIcon } from 'lucide-react';
import { useRef } from 'react';
import { toast } from 'react-toastify';
import { TaskModel } from '../../models/TaskModel';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import getNextCycle from '../../utils/getNextCycle';
import getNextCycleType from '../../utils/getNextCycleType';
import { TaskActionsTypes } from '../../contexts/TaskContext/taskActions';
import { Tips } from '../Tips';

export function MainForm() {
    const { state, dispatch } = useTaskContext();
    const taskNameRef = useRef<HTMLInputElement>(null);

    const nextCycle = getNextCycle(state.currentCycle);
    const nextCycleType = getNextCycleType(nextCycle);
    const nextCycleDuration = state.config[nextCycleType];

    function handleSubmitForm(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (!taskNameRef.current) return;

        const taskName = taskNameRef.current.value.trim();

        if (taskName.length === 0) {
            toast.warning('Campo tarefa não pode estar vazio.');
            return;
        }

        const newTask: TaskModel = {
            id: Date.now().toString(),
            name: taskName,
            startDate: Date.now(),
            completeDate: null,
            interruptDate: null,
            duration: nextCycleDuration,
            type: nextCycleType,
        };

        dispatch({ type: TaskActionsTypes.START_TASK, payload: newTask });

        toast.info(`Task "${taskName}" iniciada!`);
    }

    function handleStopTask() {
        dispatch({ type: TaskActionsTypes.INTERRUPT_TAKS });
    }

    return (
        <form onSubmit={handleSubmitForm} action='' className='form'>
            <div className='formRow'>
                <DefaultInput
                    labelText='tarefa'
                    type='text'
                    id='input'
                    placeholder='ex.: estudar matemática'
                    disabled={!!state.activetTask}
                    autoComplete='false'
                    // value={taskNameState}
                    // onChange={e => setTaskNameState(e.target.value)}
                    ref={taskNameRef}
                />
            </div>
            <div className='formRow'>
                <Tips />
            </div>
            <div className='formRow'>
                <Cycles />
            </div>
            <div className='formRow'>
                {!state.activetTask ? (
                    <DefaultButton
                        key='send_task'
                        aria-label='iniciar nova tarefa'
                        type='submit'
                        title='iniciar nova tarefa'
                        icon={<PlayCircleIcon />}
                    />
                ) : (
                    <DefaultButton
                        key='stop_task'
                        aria-label='parar tarefa'
                        type='button'
                        title='parar tarefa'
                        icon={<StopCircleIcon />}
                        color='red'
                        onClick={handleStopTask}
                    />
                )}
            </div>
        </form>
    );
}
