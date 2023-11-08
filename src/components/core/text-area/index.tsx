import styles from './index.module.css';
import classNames from 'classnames';
import { useCallback, useEffect, useState } from 'react';

type Props = {
  label?: string;
  value?: string | number;
  placeholder?: string;
  disabled?: boolean;
  onChange?: (value: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  className?: string;
  error?: string;
  inputColor?: string;
};
const TextArea = ({
  value,
  label,
  placeholder,
  disabled,
  onChange,
  onFocus,
  onBlur,
  className,
  error,
  inputColor,
}: Props) => {
  const [inputValue, setStrValue] = useState(value);

  const handleInput = useCallback(
    (value: string) => {
      setStrValue(value);

      onChange?.(value);
    },
    [onChange]
  );

  useEffect(() => {
    if (inputValue !== value) {
      setStrValue(value);
    }
  }, [inputValue, value]);

  return (
    <div className={classNames('w-full', className)}>
      {label && <label className={styles.label}>{label}</label>}

      <div className={classNames(styles.container, inputColor)}>
        <textarea
          className={classNames(styles.input, inputColor)}
          value={value}
          placeholder={placeholder}
          onChange={(event) => handleInput(event.target.value)}
          onFocus={onFocus}
          onBlur={onBlur}
          autoComplete='off'
          disabled={disabled}
        />
      </div>

      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
};

export default TextArea;
