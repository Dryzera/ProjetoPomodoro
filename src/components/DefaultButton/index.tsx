import styles from './style.module.css';

type DefaultButtonProps = {
    icon: React.ReactNode;
    color?: 'green' | 'red';
} & React.ComponentProps<'button'>;

export function DefaultButton({icon, color='green', ...props}: DefaultButtonProps) {
    return (
        <>
            <button className={`${styles[color]} ${styles.button}`} {...props}>{icon}</button>
        </>
    );
}
