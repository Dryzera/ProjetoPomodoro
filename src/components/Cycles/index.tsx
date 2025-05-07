import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import styles from './style.module.css';

export function Cycles() {
    const { state } = useTaskContext()

    return (
        <div className={styles.cycles}>
            {state.tasks.length !== 0 && <span>Ciclos:</span>}
            <div className={styles.cycleDots}>
                {state.tasks.map(value => (
                    <span className={`${styles[value.type]} ${styles.cycleDot}`}></span>
                ))}
            </div>
        </div>
    );
}
