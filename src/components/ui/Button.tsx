import styles from './Button.module.css';

interface ButtonProps {
  text: string;
  onClick?: () => void;
}

const Button = ({ onClick, text }: ButtonProps) => {
  return (
    <div>
      <button className={styles.button} onClick={onClick}>
        {text}
      </button>
    </div>
  );
};

export default Button;
