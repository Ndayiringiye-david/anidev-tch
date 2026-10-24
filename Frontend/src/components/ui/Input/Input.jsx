import styles from './Input.module.css';

/**
 * Reusable controlled Input component
 */
const Input = ({
  label,
  id,
  name,
  type = 'text',
  value,
  onChange,
  placeholder,
  error,
  required = false,
  ...rest
}) => {
  return (
    <div className={styles.wrapper}>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label} {required && <span className={styles.required}>*</span>}
        </label>
      )}
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`${styles.input} ${error ? styles.inputError : ''}`}
        {...rest}
      />
      {error && <p className={styles.errorText}>{error}</p>}
    </div>
  );
};

export default Input;
