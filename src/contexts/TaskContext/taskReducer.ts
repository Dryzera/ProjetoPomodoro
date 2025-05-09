import { TaskStateModel } from '../../models/TaskStateModel';
import getNextCycle from '../../utils/getNextCycle';
import { TaskActionModel, TaskActionsTypes } from './taskActions';

export function taskReducer(
    state: TaskStateModel,
    action: TaskActionModel,
): TaskStateModel {
    switch (action.type) {
        case TaskActionsTypes.START_TASK: {
            const newTask = action.payload;
            const nextCycle = getNextCycle(state.currentCycle);
            const secondsRemaining = newTask.duration * 60;

            return {
                ...state,
                activetTask: newTask,
                currentCycle: nextCycle,
                secondsRemaining,
                tasks: [...state.tasks, newTask],
            };
        }
        case TaskActionsTypes.INTERRUPT_TAKS: {
            return {
                ...state,
                activetTask: null,
                secondsRemaining: 0,
                formattedSecondsRemaining: '00:00',
                tasks: state.tasks.map(task => {
                    if (state.activetTask && state.activetTask.id === task.id) {
                        return { ...task, interruptDate: Date.now() };
                    }
                    return task;
                }),
            };
        }
        case TaskActionsTypes.RESET_STATE: {
            return state;
        }
    }

    return state;
}
