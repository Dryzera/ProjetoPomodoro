import { useEffect, useReducer, useRef } from 'react';
import initialTaskState from './initialTaskState';
import { TaskContext } from './TaskContext';
import { taskReducer } from './taskReducer';
import { TimerWorkerManager } from '../../workers/TImerWorkerManager';
import { TaskActionsTypes } from './taskActions';
import { loadBeep } from '../../utils/loadBeep';

type TaskContextProviderProps = {
    children: React.ReactNode;
};

export function TaskContextProvider({ children }: TaskContextProviderProps) {
    const [state, dispatch] = useReducer(taskReducer, initialTaskState);
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
        if (!state.activetTask) {
            worker.terminate();
        }

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
