import type { ComponentProps, FC } from "react";
import Button from "./Button";
import InputField from "./InputField";
import css from "./LoginForm.module.css";

interface LoginFormProps {
  title: string;
}

const LoginForm: FC<LoginFormProps> = ({ title, ...props }) => {
  return (
    <form className={css["login-form"]}>
      <fieldset>
        <legend>{title}</legend>
        <div>
          <InputField
            type="email"
            autoComplete="email"
            required
            aria-required="true"
          >
            email:
          </InputField>
          <InputField
            type="password"
            autoComplete="current-password"
            required
            aria-required="true"
          >
            password:
          </InputField>
          <Button type="submit" value="signin">
            login
          </Button>
        </div>
      </fieldset>
      <a href="#">Not a member? sign-up</a>
    </form>
  );
};

export default LoginForm;
