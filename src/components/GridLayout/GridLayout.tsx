import styles from './styles.module.css';

interface Props {
  children: React.ReactNode;
}

const GridLayout: React.FC<Props> = ({ children }) => (
  <div className={styles.container}>{children}</div>
);

export default GridLayout;
