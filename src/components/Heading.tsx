import styles from './Heading.module.css';

export function Heading(props) {
    const className = styles.heading;

    return <h1 className={className}>{props.children}</h1>;
}
