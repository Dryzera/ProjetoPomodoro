import { History } from '../../pages/History';
import { Home } from '../../pages/Home';
import { NotFound } from '../../pages/NotFound';
import { AboutPomodoro } from '../../pages/AboutPomodoro';
import { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router';

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, [pathname]);

    return null;
}

export function MainRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about-pomodoro' element={<AboutPomodoro />} />
                <Route path='/history' element={<History />} />

                <Route path='*' element={<NotFound />} />
            </Routes>
            <ScrollToTop />
        </BrowserRouter>
    );
}
