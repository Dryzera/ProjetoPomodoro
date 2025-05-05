import { DefaultButton } from '../DefaultButton';
import { DefaultInput } from '../DefaultInput';
import { Cycles } from '../Cycles';
import { PlayCircleIcon } from 'lucide-react';

export function MainForm() {
    return (
        <form action='' className='form'>
        <div className='formRow'>
            <DefaultInput
                labelText='tarefa'
                type='text'
                id='input'
                placeholder='ex.: estudar matemática'
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
