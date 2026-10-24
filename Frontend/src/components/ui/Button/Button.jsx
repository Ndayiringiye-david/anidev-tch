import styles from './Button.module.css';

/**
 * Reusable Button component
 * @param {object} props
 * @param {'button'|'submit'|'reset'} props.type
 * @param {'primary'|'secondary'|'danger'} props.variant
 * @param {boolean} props.isLoading
 * @param {boolean} props.disabled
 * @param {React.ReactNode} props.children
 */
const Button = ({
  children,
  type = 'button',
  variant = 'primary',
  isLoading = false,
  disabled = false,
  onClick,
  className = '',
  ...rest
}) => {
  return (
    <button
      type={type}
      disabled={disabled || isLoading}
      onClick={onClick}
      className={`${styles.btn} ${styles[variant]} ${className}`}
      {...rest}
    >
      {isLoading ? <span className={styles.spinner} /> : children}
    </button>
  );
};

export default Button;
