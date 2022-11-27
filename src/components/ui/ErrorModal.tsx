import errorModalStyles from './ErrorModal.module.css';
import Card from './Card';
import Button from './Button';

interface ErrorModalProps {
  title: string;
  message: string;
  onDismiss: () => void;
}

const ErrorModal = ({ message, onDismiss, title }: ErrorModalProps) => {
  return (
    <div>
      <div className={errorModalStyles.backdrop}>
        <Card className={errorModalStyles.modal}>
          <header className={errorModalStyles.header}>
            <h2>{title}</h2>
          </header>
          <div className={errorModalStyles.content}>
            <p>{message}</p>
          </div>
          <footer className={errorModalStyles.actions}>
            <Button text={'Okay'} onClick={onDismiss} />
          </footer>
        </Card>
      </div>
    </div>
  );
};

export default ErrorModal;
