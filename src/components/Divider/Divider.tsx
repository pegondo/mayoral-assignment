import styles from './styles.module.css';

/** Simple hr divider that hides for non-mobile resolutions. */
const Divider: React.FC = () => <hr className={styles.divider} data-testid="divider" />;

export default Divider;
