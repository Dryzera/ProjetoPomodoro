import { useEffect } from 'react';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import styles from './style.module.css';

export function CountDown() {
    const {state, setState} = useTaskContext()
    
    useEffect(() => {
        if (!state.activetTask) return;
      
        const interval = setInterval(() => {
          setState(prev => {
            const newSeconds = prev.secondsRemaining - 1;
      
            if (newSeconds < 0) {
              clearInterval(interval);
              return prev;
            }
      
            const minutes = Math.floor(newSeconds / 60);
            const restSeconds = newSeconds % 60;
      
            return {
              ...prev,
              secondsRemaining: newSeconds,
              formattedSecondsRemaining: `${String(minutes).padStart(2, '0')}:${String(restSeconds).padStart(2, '0')}`
            };
          });
        }, 1000);
      
        return () => clearInterval(interval);
      }, [state, setState]);
      
    return <div className={styles.container}>{state.formattedSecondsRemaining}</div>;
}
