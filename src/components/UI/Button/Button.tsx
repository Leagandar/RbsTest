import type { ReactNode, ButtonHTMLAttributes, CSSProperties } from "react";
import styles from "./Button.module.css";

const ButtonSize = {
  big: styles["button_big"],
  small: styles["button_small"],
} as const;

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  width?: string;
  height?: string;
  style?: CSSProperties;
  size: keyof typeof ButtonSize;
  children: ReactNode;
}

const Button = ({
  width,
  height,
  style,
  size,
  children,
  ...rest
}: ButtonProps) => {
  const buttonClassList = [styles.button];
  if (Object.keys(ButtonSize).includes(size)) {
    buttonClassList.push(ButtonSize[size]);
  }

  return (
    <button
      style={{ width, height, ...style }}
      className={buttonClassList.join(" ")}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
