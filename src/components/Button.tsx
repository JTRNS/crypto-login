import type { ComponentProps, PropsWithChildren, FC } from "react";
import css from "./Button.module.css";

interface ButtonProps extends ComponentProps<"button"> {}

const Button: FC<PropsWithChildren<ButtonProps>> = ({ children, ...props }) => {
  return (
    <button className={css["button"]} role="button" {...props}>
      {children}
    </button>
  );
};

export default Button;
