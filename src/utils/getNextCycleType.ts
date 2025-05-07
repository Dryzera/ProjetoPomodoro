import { TaskModel } from '../models/TaskModel'

export default function getNextCycleType(cycle: number): TaskModel['type'] {
    if(cycle % 8 === 0) return 'longBreakTime'
    else if (cycle % 2 === 0) return 'shortBreakTime'
    return 'workTime'
}