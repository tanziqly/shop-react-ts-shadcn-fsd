import { LoginForm } from "@features/LoginForm/ui";
import { FC } from "react";

export const SignIn: FC = () => {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <LoginForm />
      </div>
    </div>
  );
};
