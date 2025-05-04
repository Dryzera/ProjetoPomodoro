import './styles/global.css';
import { Container } from './components/Container';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { CountDown } from './components/CountDown';
import { DefaultInput } from './components/DefaultInput';
import { DefaultButton } from './components/DefaultButton';
import { Footer } from './components/Footer';
import { Cycles } from './components/Cycles';
import { PlayCircleIcon } from 'lucide-react';

export function App() {
    return (
        <>
            <Container>
                <Logo />
            </Container>
            <Container>
                <Menu />
            </Container>
            <Container>
                <CountDown />
            </Container>
            <Container>
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
            </Container>

            <Container>
                <Footer />
            </Container>
        </>
    );
}
