import {
    HouseIcon,
    SunIcon,
    HistoryIcon,
    SettingsIcon,
    MoonIcon,
} from 'lucide-react';
import styles from './style.module.css';
import { useState, useEffect } from 'react';
import { RouterLink } from '../RouterLink';

type AvailableThemes = 'dark' | 'light';

export function Menu() {
    const [theme, setTheme] = useState<AvailableThemes>(() => {
        return (localStorage.getItem('theme') as AvailableThemes) || 'dark';
    });

    const nextThemeIcon = {
        dark: <SunIcon />,
        light: <MoonIcon />,
    };

    function handleClickTheme(e: React.MouseEvent<HTMLAnchorElement>): void {
        e.preventDefault();
        setTheme(prevValue => {
            return prevValue === 'dark' ? 'light' : 'dark';
        });
    }

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <nav className={styles.menu}>
            <RouterLink
                className={styles.menuLink}
                href='/'
                aria-label='Ir para a home'
                title='Ir para a home'
            >
                <HouseIcon />
            </RouterLink>
            <RouterLink
                className={styles.menuLink}
                href='/history'
                aria-label='Ir para o histórico'
                title='Ir para o histórico'
            >
                <HistoryIcon />
            </RouterLink>
            <RouterLink
                className={styles.menuLink}
                href='/settings'
                aria-label='Configurações'
                title='Configurações'
            >
                <SettingsIcon />
            </RouterLink>
            <a
                className={styles.menuLink}
                href=''
                aria-label='Mudar tema'
                title='Mudar tema'
                onClick={handleClickTheme}
            >
                {nextThemeIcon[theme]}
            </a>
        </nav>
    );
}
