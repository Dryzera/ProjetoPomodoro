import { Link } from 'react-router';
import styles from './style.module.css';

export function Footer() {
    return (
        <div className={styles.footer}>
            <Link className={styles.footerLink} to='/about-pomodoro'>
                Entenda mais sobre a técnica de Pomodoro ⏱️📝
            </Link>
            <a
                className={styles.footerLink}
                href='https://endryus-daniel.vercel.app'
            >
                Feito por Endryus Daniel 💙
            </a>
        </div>
    );
}
