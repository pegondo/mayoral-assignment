import styles from './styles.module.css';

interface Props {
  children: React.ReactNode;
}

const Card: React.FC<Props> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default Card;
