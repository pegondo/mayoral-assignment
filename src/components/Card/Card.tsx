import styles from './styles.module.css';

interface Props {
  children: React.ReactNode;
}

/** React component that presents the children inside a card. */
const Card: React.FC<Props> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default Card;
