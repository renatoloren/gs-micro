import { ActionButton } from '../ActionButton/ActionButton';
import styles from './Form.module.css';

export const Form = ({ children, onSave }) => {
  return (
    <form onSubmit={onSave}>
      <div className={styles.inputs}>{children}</div>
      <ActionButton text={'Salvar'} />
    </form>
  );
};
