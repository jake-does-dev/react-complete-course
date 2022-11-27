import styles from './Button.module.css';

interface ButtonProps {
  text: string;
}

const Button = ({ text }: ButtonProps) => {
  return (
    <div>
      <button className={styles.button}>{text}</button>
    </div>
  );
};

export default Button;
