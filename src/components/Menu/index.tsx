import { HouseIcon, SunIcon, HistoryIcon, SettingsIcon, MoonIcon } from 'lucide-react';
import styles from './style.module.css';
import { useState, useEffect } from 'react';

type AvailableThemes = 'dark' | 'light'

export function Menu() {
    const [theme, setTheme] = useState<AvailableThemes>(() => {
        return localStorage.getItem('theme') as AvailableThemes || 'dark'
    })

    const nextThemeIcon = {
        dark:  <SunIcon />,
        light:  <MoonIcon />
    }

    function handleClickTheme(e: React.MouseEvent<HTMLAnchorElement>): void {
        e.preventDefault()
        setTheme(prevValue => {
            return prevValue === 'dark' ? 'light' : 'dark';
        })
    }

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
        localStorage.setItem('theme', theme)
    }, [theme])

    return (
        <nav className={styles.menu}>
            <a className={styles.menuLink} href='#' aria-label='Ir para a home' title='Ir para a home'>
                <HouseIcon />
            </a>
            <a className={styles.menuLink} href='#' aria-label='Ir para o histórico' title='Ir para o histórico'>
                <HistoryIcon />
            </a>
            <a className={styles.menuLink} href='#' aria-label='Configurações' title='Configurações'>
                <SettingsIcon />
            </a>
            <a className={styles.menuLink} href='' aria-label='Mudar tema' title='Mudar tema' onClick={handleClickTheme}>
                {nextThemeIcon[theme]}
            </a>
        </nav>
    );
}
