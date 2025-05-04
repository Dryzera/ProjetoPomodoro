import './styles/global.css';
import { Container } from './components/Container';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { CountDown } from './components/CountDown';
import { DefaultInput } from './components/DefaultInput';
import { Footer } from './components/Footer';

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
                        <p>Ciclos</p>
                        <p>0 0 0 0 0</p>
                    </div>
                    <div className='formRow'>
                        <button>Enviar</button>
                    </div>
                </form>
            </Container>

            <Container>
                <Footer />
            </Container>
        </>
    );
}
