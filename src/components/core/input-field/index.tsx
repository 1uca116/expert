import styles from './index.module.css';
import classNames from 'classnames';
import { useCallback, useEffect, useState } from 'react';

type Props = {
  value?: string | number;
  placeholder?: string;
  disabled?: boolean;
  onChange?: (value: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  type?: 'text';
  className?: string;
  error?: string;
  icon?: JSX.Element;
};
const InputField = ({
  value,
  placeholder,
  disabled,
  onChange,
  onFocus,
  onBlur,
  type,
  className,
  error,
  icon,
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
      <div className={styles.container}>
        {icon ?? null}

        <input
          className={styles.input}
          value={value}
          placeholder={placeholder}
          type={type ?? 'text'}
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

export default InputField;
