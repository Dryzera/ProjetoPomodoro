import './styles/global.css';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound'; 
import { AboutPomodoro } from './pages/AboutPomodoro';
import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider';
import { ToastContainer } from 'react-toastify';

export function App() {
    return (
        <TaskContextProvider>
           <ToastContainer autoClose={2000} />
           <Home />
        </TaskContextProvider>
    );
}
