import styles from './styles.module.css';

export interface Props {
  children: React.ReactNode;
}

/** React component that displays its children in a responsive grid-based layout. */
const GridLayout: React.FC<Props> = ({ children }) => (
  <div className={styles.container} data-testid="grid">
    {children}
  </div>
);

export default GridLayout;
