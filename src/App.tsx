import './styles/global.css';
import { Heading } from './components/Heading.tsx';
import { TimerIcon } from 'lucide-react';

export function App() {
    return (
        <Heading>
            Olá
            <button>
                <TimerIcon />
            </button>
        </Heading>
    );
}
