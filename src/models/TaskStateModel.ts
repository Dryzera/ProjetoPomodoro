import { TaskModel } from "./TaskModel"

export type TaskStateModel = {
    tasks: TaskModel[]
    secondsRemaining: number;
    formattedSecondsRemaining: string;
    activetTask: TaskModel | null;
    currentCycle: number;
    config: {
        workTime: number;
        shortBreakTime: number;
        longBreakTime: number;
    };
};