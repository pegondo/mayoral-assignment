import styles from './styles.module.css';

export interface Props {
  children: React.ReactNode;
}

/** React component that presents the children inside a card. */
const Card: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles.container} data-testid="card">
      {children}
    </div>
  );
};

export default Card;
