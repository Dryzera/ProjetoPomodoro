import styles from './style.module.css';
import { RouterLink } from '../RouterLink';

export function Footer() {
    return (
        <div className={styles.footer}>
            <RouterLink className={styles.footerLink} href='/about-pomodoro'>
                Entenda mais sobre a técnica de Pomodoro ⏱️📝
            </RouterLink>
            <a
                className={styles.footerLink}
                href='https://endryus-daniel.vercel.app'
            >
                Feito por Endryus Daniel 💙
            </a>
        </div>
    );
}
