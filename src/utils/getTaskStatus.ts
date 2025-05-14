import { TaskModel } from '../models/TaskModel';

export function getTaskStatus(task: TaskModel, activeTask: TaskModel | null) {
    if (
        task.completeDate === null &&
        task.interruptDate === null &&
        task.id !== activeTask?.id
    )
        return 'Abandonada';
    else if (task.completeDate) return 'Completa';
    else if (task.interruptDate) return 'Interrompida';
    return 'Em Progresso';
}
