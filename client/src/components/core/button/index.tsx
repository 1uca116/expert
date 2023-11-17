import styles from './index.module.css';
import classNames from 'classnames';
import React from 'react';

type ButtonProps = {
  variant: 'primary' | 'secondary' | 'tertiary';
  inverse?: boolean;
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant, inverse, className, children, ...buttonProps },
    ref
  ) => {
    return (
      <button
        {...buttonProps}
        className={classNames(
          styles.button,
          { [styles.primary]: variant === 'primary' },
          { [styles.secondary]: variant === 'secondary' },
          { [styles.tertiary]: variant === 'tertiary' },
          { [styles.inverse]: inverse === true },
          className
        )}
        ref={ref}
      >
        {children}
      </button>
    );
  }
);

export default Button;
