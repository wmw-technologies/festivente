import { MouseEvent, ReactNode } from 'react';
import styles from './index.module.scss';
import { Icon } from '@/src/types';
import UIIcon from '@/src/components/UI/Icon';

type UIButtonProps = {
  type?: 'button' | 'submit' | 'reset';
  icon?: Icon;
  children?: ReactNode;
  onClick?: () => void;
};

function UIButton({ type = 'button', icon, children, onClick }: UIButtonProps) {
  return (
    <div className={styles.containerButton} onClick={onClick}>
      <button type={type} className={styles.button}>
        {icon && <UIIcon name={icon} smaller />}
        <span>{children}</span>
      </button>
    </div>
  );
}

type UIActionButtonProps = {
  icon: Icon;
  variant?: 'gray' | 'black';
  active?: boolean;
  disabled?: boolean;
  smaller?: boolean;
  onClick?: () => void;
};

function UIActionButton({ icon, variant = 'black', active, disabled, smaller, onClick }: UIActionButtonProps) {
  return (
    <button
      type="button"
      disabled={disabled}
      aria-label="button"
      className={`${styles.actionButton} ${smaller ? styles.smaller : ''} ${active ? styles.active : ''} ${variant === 'black' ? styles.black : styles.gray}`}
      onClick={onClick}
    >
      <UIIcon name={icon} smaller={smaller} />
    </button>
  );
}

type UIToggleButtonProps = {
  isOpened: boolean;
  onClick: () => void;
};

function UIToggleButton({ isOpened, onClick }: UIToggleButtonProps) {
  function handleOnClick(e: MouseEvent<HTMLElement>) {
    e.preventDefault();
    e.stopPropagation();
    onClick();
  }
  return (
    <button type="button" title={isOpened ? 'Zwiń' : 'Rozwiń'} className={styles.toggleButton} onClick={handleOnClick}>
      <UIIcon name={isOpened ? 'MinusIcon' : 'PlusIcon'} />
    </button>
  );
}

UIButton.Action = UIActionButton;
UIButton.Toggle = UIToggleButton;

export default UIButton;
