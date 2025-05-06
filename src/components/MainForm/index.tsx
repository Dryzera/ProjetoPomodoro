import { DefaultButton } from '../DefaultButton';
import { DefaultInput } from '../DefaultInput';
import { Cycles } from '../Cycles';
import { PlayCircleIcon } from 'lucide-react';
import { useRef } from 'react';
import { toast } from 'react-toastify';
import { TaskModel } from '../../models/TaskModel';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';

export function MainForm() {
    const {setState} = useTaskContext()
    const taskNameRef = useRef<HTMLInputElement>(null);
    
    function handleSubmitForm(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        if(!taskNameRef.current) return;

        const taskName = taskNameRef.current.value.trim();

        if(taskName.length === 0) {
            toast.warning('Campo tarefa não pode estar vazio.')
            return;
        };

        const newTask: TaskModel = {
            id: Date.now().toString(),
            name: taskName,
            startDate: Date.now(),
            completeDate: null,
            interruptDate: null,
            duration: 1,
            type: 'workTime',
        };

        const secondsRemaining = newTask.duration * 60 // to second

        setState(prevState =>  {
            return {
                ...prevState,
                activetTask: newTask,
                currentCycle: 1,
                secondsRemaining,
                formattedSecondsRemaining: '00:00',
                tasks: [...prevState.tasks, newTask],
            }
        })

        toast.info(`Task "${taskName}" iniciada!`)}  
    
    return (
        <form onSubmit={handleSubmitForm} action='' className='form'>
        <div className='formRow'>
            <DefaultInput
                labelText='tarefa'
                type='text'
                id='input'
                placeholder='ex.: estudar matemática'
                // value={taskNameState}
                // onChange={e => setTaskNameState(e.target.value)}
                ref={taskNameRef}
            />
        </div>
        <div className='formRow'>
            <p>Lorem, ipsum.</p>
        </div>
        <div className='formRow'>
            <Cycles />
        </div>
        <div className='formRow'>
            <DefaultButton icon={<PlayCircleIcon />} />
        </div>
    </form>
    );
}
