import type { ComponentProps, FC } from "react";
import css from "./Toggle.module.css";

interface ToggleProps extends ComponentProps<"input"> {
  type?: "checkbox";
}

const Toggle: FC<ToggleProps> = ({ children, ...props }) => {
  return (
    <div className={css["checkbox-field"]}>
      <input {...props} type="checkbox" />
      <span>{children}</span>
    </div>
  );
};

export default Toggle;
