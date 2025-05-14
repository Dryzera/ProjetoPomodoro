import { useEffect, useReducer, useRef } from 'react';
import initialTaskState from './initialTaskState';
import { TaskContext } from './TaskContext';
import { taskReducer } from './taskReducer';
import { TimerWorkerManager } from '../../workers/TImerWorkerManager';
import { TaskActionsTypes } from './taskActions';
import { loadBeep } from '../../utils/loadBeep';
import { TaskStateModel } from '../../models/TaskStateModel';

type TaskContextProviderProps = {
    children: React.ReactNode;
};

export function TaskContextProvider({ children }: TaskContextProviderProps) {
    const [state, dispatch] = useReducer(taskReducer, initialTaskState, () => {
        const storageState = localStorage.getItem('state');

        if (!storageState) return initialTaskState;
        const parsedStorageState = JSON.parse(storageState) as TaskStateModel;

        return {
            ...parsedStorageState,
            activetTask: null,
            secondsRemaining: 0,
            formattedSecondsRemaining: '00:00',
        };
    });
    const worker = TimerWorkerManager.getInstance();

    const playBeep = useRef<() => void | null>(null);

    worker.onmessage(e => {
        const countDownSeconds = e.data;

        if (countDownSeconds <= 0) {
            if (playBeep.current) {
                playBeep.current();
                playBeep.current = null;
            }
            dispatch({ type: TaskActionsTypes.COMPLETE_TASK });
            worker.terminate();
        } else {
            dispatch({
                type: TaskActionsTypes.COUNT_DOWN,
                payload: { secondsRemaining: countDownSeconds },
            });
        }
    });

    useEffect(() => {
        localStorage.setItem('state', JSON.stringify(state));

        if (!state.activetTask) {
            worker.terminate();
        }

        document.title = `${state.formattedSecondsRemaining} - Chronos Pomodoro`;

        worker.postMessage(state);
    }, [state, worker]);

    useEffect(() => {
        if (state.activetTask && playBeep.current === null) {
            playBeep.current = loadBeep();
        } else {
            playBeep.current = null;
        }
    }, [state.activetTask]);

    return (
        <TaskContext.Provider value={{ state, dispatch }}>
            {children}
        </TaskContext.Provider>
    );
}
