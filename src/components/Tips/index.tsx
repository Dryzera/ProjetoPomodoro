import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import getNextCycle from '../../utils/getNextCycle';
import getNextCycleType from '../../utils/getNextCycleType';

export function Tips() {
    const { state } = useTaskContext();

    const tipsForWhenActiveTask = {
        workTime: <span>Foque por {state.config.workTime}min</span>,
        shortBreakTime: (
            <span>Descanse por {state.config.shortBreakTime}min</span>
        ),
        longBreakTime: <span>Descanso longo</span>,
    };

    const tipsForNoActiveTask = {
        workTime: (
            <span>
                Próximo ciclo é de <b>{state.config.workTime}min</b>
            </span>
        ),
        shortBreakTime: (
            <span>Próximo descaso é de {state.config.shortBreakTime}min</span>
        ),
        longBreakTime: <span>Próximo descanso será longo</span>,
    };

    const nextCycle = getNextCycle(state.currentCycle);
    const nextCyleType = getNextCycleType(nextCycle);

    return (
        <>
            {!!state.activetTask &&
                tipsForWhenActiveTask[state.activetTask.type]}
            {!state.activetTask && tipsForNoActiveTask[nextCyleType]}
        </>
    );
}
