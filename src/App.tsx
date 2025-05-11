import './styles/global.css';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import { AboutPomodoro } from './pages/AboutPomodoro';
import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider';
import { MessageContainer } from './components/MessagesContainer';
import { BrowserRouter, Route, Routes } from 'react-router';

export function App() {
    return (
        <TaskContextProvider>
            <MessageContainer>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route
                            path='/about-pomodoro'
                            element={<AboutPomodoro />}
                        />

                        <Route path='*' element={<NotFound />} />
                    </Routes>
                </BrowserRouter>
            </MessageContainer>
        </TaskContextProvider>
    );
}
