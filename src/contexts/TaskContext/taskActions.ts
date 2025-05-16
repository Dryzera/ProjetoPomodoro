import { TaskModel } from '../../models/TaskModel';

export enum TaskActionsTypes {
    START_TASK = 'START_TASK',
    INTERRUPT_TAKS = 'INTERRUPT_TASK',
    RESET_STATE = 'RESET_STATE',
    COUNT_DOWN = 'COUNT_DOWN',
    COMPLETE_TASK = 'COMPLETE_TASK',
    CHANGE_SETTINGS = 'CHANGE_SETTINGS',
}

export type TaskActionModel =
    | {
          type: TaskActionsTypes.START_TASK;
          payload: TaskModel;
      }
    | {
          type: TaskActionsTypes.INTERRUPT_TAKS;
      }
    | {
          type: TaskActionsTypes.RESET_STATE;
      }
    | {
          type: TaskActionsTypes.COUNT_DOWN;
          payload: { secondsRemaining: number };
      }
    | {
          type: TaskActionsTypes.COMPLETE_TASK;
      }
    | {
          type: TaskActionsTypes.CHANGE_SETTINGS;
          payload: {
              workTime: number;
              shortBreakTime: number;
              longBreakTime: number;
          };
      };
