import styles from './styles.module.css';

interface Props {
  children: React.ReactNode;
}

/** React component that displays its children in a responsive grid-based layout. */
const GridLayout: React.FC<Props> = ({ children }) => (
  <div className={styles.container}>{children}</div>
);

export default GridLayout;
