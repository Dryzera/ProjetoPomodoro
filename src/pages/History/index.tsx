import { Container } from '../../components/Container';
import { MainTemplate } from '../../templates/MainTemplate';
import styles from './styles.module.css';
import { TrashIcon } from 'lucide-react';
import { DefaultButton } from '../../components/DefaultButton';
import { Heading } from '../../components/Heading';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { showMessage } from '../../adapters/showMessage';
import { formatDate } from '../../utils/formatDate';
import { getTaskStatus } from '../../utils/getTaskStatus';
import { sortTasks, SortTasksOptions } from '../../utils/sortTasks';
import { useEffect, useState } from 'react';
import { TaskActionsTypes } from '../../contexts/TaskContext/taskActions';

export function History() {
    const { state, dispatch } = useTaskContext();
    const [confirmClearHistory, setConfirmClearHistory] = useState(false);
    const hasTasks = state.tasks.length !== 0;

    const taskTypeMap = {
        workTime: 'Foco',
        shortBreakTime: 'Descanso curto',
        longBreakTime: 'Descanso longo',
    };

    const [sortTasksOptions, setSortTaskOptions] = useState<SortTasksOptions>(
        () => {
            return {
                tasks: sortTasks({ tasks: state.tasks }),
                field: 'startDate',
                direction: 'desc',
            };
        },
    );

    function handleSortTasks({ field }: Pick<SortTasksOptions, 'field'>) {
        const newDirection =
            sortTasksOptions.direction === 'desc' ? 'asc' : 'desc';

        setSortTaskOptions({
            tasks: sortTasks({
                direction: newDirection,
                tasks: sortTasksOptions.tasks,
                field,
            }),
            direction: newDirection,
            field,
        });
    }

    function handleClearLocalStorage() {
        showMessage.confirm(
            'Tem certeza que deseja apagar o histórico?',
            confirmation => {
                setConfirmClearHistory(confirmation);
            },
        );
    }

    useEffect(() => {
        if (!confirmClearHistory) return;

        localStorage.removeItem('state');
        dispatch({ type: TaskActionsTypes.RESET_STATE });
        showMessage.info('Histórico deletado');
        setConfirmClearHistory(false);
    }, [confirmClearHistory, dispatch]);

    useEffect(() => {
        showMessage.dismiss();
    }, []);

    useEffect(() => {
        setSortTaskOptions(prevState => ({
            ...prevState,
            tasks: sortTasks({
                tasks: state.tasks,
                direction: prevState.direction,
                field: prevState.field,
            }),
        }));
    }, [state.tasks]);

    return (
        <MainTemplate>
            <Container>
                <Heading>
                    <span>Histórico</span>
                    {hasTasks && (
                        <span className={styles.buttonContainer}>
                            <DefaultButton
                                color='red'
                                aria-label='Apagar todo o histórico'
                                title='Apagar Histórico'
                                icon={<TrashIcon />}
                                onClick={handleClearLocalStorage}
                            />
                        </span>
                    )}
                </Heading>
            </Container>
            <Container>
                {hasTasks && (
                    <div className={styles.responsiveTable}>
                        <table>
                            <thead>
                                <tr>
                                    <th
                                        onClick={() =>
                                            handleSortTasks({ field: 'name' })
                                        }
                                        className={styles.thSort}
                                    >
                                        Tarefa ⇅
                                    </th>
                                    <th
                                        onClick={() =>
                                            handleSortTasks({
                                                field: 'duration',
                                            })
                                        }
                                        className={styles.thSort}
                                    >
                                        Duração ⇅
                                    </th>
                                    <th
                                        onClick={() =>
                                            handleSortTasks({
                                                field: 'startDate',
                                            })
                                        }
                                        className={styles.thSort}
                                    >
                                        Data ⇅
                                    </th>
                                    <th>Status</th>
                                    <th>Título</th>
                                </tr>
                            </thead>

                            <tbody>
                                {sortTasksOptions.tasks.map(task => {
                                    return (
                                        <tr key={task.id}>
                                            <td>{task.name}</td>
                                            <td>{task.duration}min</td>
                                            <td>
                                                {formatDate(task.startDate)}
                                            </td>
                                            <td>
                                                {getTaskStatus(
                                                    task,
                                                    state.activetTask,
                                                )}
                                            </td>
                                            <td>{taskTypeMap[task.type]}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                )}
                {!hasTasks && (
                    <p style={{ textAlign: 'center', fontWeight: 'bold' }}>
                        Ainda não existem tarefas criadas!
                    </p>
                )}
            </Container>
        </MainTemplate>
    );
}
