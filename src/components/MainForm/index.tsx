import { DefaultButton } from '../DefaultButton';
import { DefaultInput } from '../DefaultInput';
import { Cycles } from '../Cycles';
import { PlayCircleIcon } from 'lucide-react';
import { useRef } from 'react';

export function MainForm() {
    // const [taskName, setTaskName] = useState('');
    const taskNameInput = useRef<HTMLInputElement>(null);
    
    const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }
    
    return (
        <form onSubmit={handleSubmitForm} action='' className='form'>
        <div className='formRow'>
            <DefaultInput
                labelText='tarefa'
                type='text'
                id='input'
                placeholder='ex.: estudar matemática'
                // value={taskName}
                // onChange={e => setTaskName(e.target.value)}
                ref={taskNameInput}
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
