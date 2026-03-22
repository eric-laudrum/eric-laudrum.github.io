import styles from './Badge.module.css'; 

export default function Badge({ text }: { text: string }) {
    return <span className={styles.badge}>{text}</span>;
}