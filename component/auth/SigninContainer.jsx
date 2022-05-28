import { useState } from "react";
import { useSnackbar } from "notistack";

import { Signin } from ".";
import validate from "@utils/validator";
import { fetcher } from "@utils/clientFuncs";

const SigninContainer = ({ setModeHandler, hideProfileMenuHandler }) => {
  const { enqueueSnackbar } = useSnackbar(),
    [loading, setLoading] = useState(false),
    [showPassword, setShowPassword] = useState(false),
    [email, setEmail] = useState(process.env.NODE_ENV === "development" ? process.env.NEXT_PUBLIC_DEV_EMAIL : ""),
    [password, setPassword] = useState(process.env.NODE_ENV === "development" ? process.env.NEXT_PUBLIC_DEV_PASSWORD : "");

  const signinHandler = async () => {
    setLoading(true);
    try {
      validate({ type: "email", value: email });
      validate({
        type: "password",
        value: password,
        attributes: ["hasNumber", "hasSpecialChar", "hasRange", "hasLetter"],
      });

      const { token, error } = await fetcher("/auth/signup", { password, email });

      setLoading(false);
      if (status) {
        hideProfileMenuHandler();
        // enqueueSnackbar("A verification link has been sent to your mail", { variant: "info" });
      } else {
        throw { label: error };
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      if (error && error.label) return enqueueSnackbar(error.label, { variant: "error" });
      enqueueSnackbar("An error occured", { variant: "error" });
    }
  };

  return (
    <Signin
      {...{
        email,
        loading,
        setEmail,
        password,
        setPassword,
        showPassword,
        signinHandler,
        setModeHandler,
        setShowPassword,
      }}
    />
  );
};

export default SigninContainer;
