import clsx from "clsx";
import { FC, forwardRef } from "react";
import type { InputProps } from "./Input-type";
import styles from "./Input.module.scss";

const Input: FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      onChange,
      value,
      placeholder,
      type = "text", // по умолчанию тип 'text'
      helperText,
      error,
      pending,
      style,
      icon,
      reverseColor,
      className,
      onFocus,
      ...rest
    },
    ref
  ) => {
    return (
      <div
        className={clsx(
          styles.group,
          {
            [styles.error]: error,
            [styles.pending]: pending,
          },
          className
        )}
      >
        {type === "checkbox" ? (
          <div className={styles.switch}>
            <label className={styles["input-switch"]}>
              <input
                type="checkbox"
                onChange={onChange}
                checked={Boolean(value)}
                disabled={pending}
                ref={ref}
                {...rest}
              />
              <span className={styles.slider}></span>
            </label>
            <p className={styles.placholder}>{placeholder}</p>
          </div>
        ) : (
          <input
            type={type}
            className={clsx(styles.input, {
              [styles.reverse]: reverseColor,
            })}
            onFocus={onFocus}
            onChange={onChange}
            value={typeof value === "boolean" ? String(value) : value}
            placeholder={placeholder}
            disabled={pending}
            style={style}
            ref={ref}
            {...rest}
          />
        )}
        {icon && <div className={styles.icon}>{icon}</div>}
        {helperText && <p className={styles.helperText}>{helperText}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
