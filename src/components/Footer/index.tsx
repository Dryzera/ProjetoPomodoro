import styles from './style.module.css';

export function Footer() {
    return (
        <div className={styles.footer}>
            <a className={styles.footerLink} href='#'>
                Entenda mais sobre a técnica de Pomodoro ⏱️📝
            </a>
            <a
                className={styles.footerLink}
                href='https://endryus-daniel.vercel.app'
            >
                Feito por Endryus Daniel 💙
            </a>
        </div>
    );
}
