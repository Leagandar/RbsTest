import type { ChangeEvent, CSSProperties, InputHTMLAttributes } from "react";
import styles from "./Input.module.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  value: string;
  invalid?: boolean;
  style?: CSSProperties;
  labelOn?: boolean;
  onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  value,
  onChangeHandler,
  label,
  id,
  invalid,
  style,
  labelOn = true,
  ...rest
}: InputProps) => {
  return (
    <div className={styles.input} style={style}>
      <label htmlFor={id}>{label}:</label>
      <input
        className={invalid ? styles.inputInvalid : ""}
        value={value}
        onChange={onChangeHandler}
        {...rest}
      />
    </div>
  );
};

export default Input;
