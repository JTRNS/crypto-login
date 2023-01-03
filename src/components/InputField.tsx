import { ComponentProps, FC, useId } from "react";
import css from "./InputField.module.css";

interface InputFieldProps extends ComponentProps<"input"> {
  type: string;
  error?: string;
}

const InputField: FC<InputFieldProps> = ({
  children,
  type,
  error,
  ...props
}) => {
  const id = useId();
  return (
    <div className={css["input-field"]}>
      <label htmlFor={id}>{children}</label>
      <input type={type} id={id} {...props} />
      {error && <em>{error}</em>}
    </div>
  );
};

export default InputField;
