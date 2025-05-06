import './styles/global.css';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound'; 
import { AboutPomodoro } from './pages/AboutPomodoro';
import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider';

export function App() {
    return (
       <TaskContextProvider>
           <Home />
        </TaskContextProvider>
    );
}
