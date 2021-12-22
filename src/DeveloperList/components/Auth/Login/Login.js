import React, { useContext, useEffect } from "react";
import { useNavigate , Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";
import classes from "./login.module.css";
import { GoogleProvider } from "../Firebase";
import Firebase from "../Firebase";


import { CtxOfDev } from "../../../CtxAndReducer/CtxAndReducer";

const Login = () => {
  const ctx = useContext(CtxOfDev);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // console.log();

  useEffect(() => {
    if (ctx.isLogin === true) {
      navigate("/", { replace: true });
    }
  }, [ctx.isLogin]);

  const signInWithGoogle = () => {
    ctx.signInWithGoogle();
  };

  const handleSubmitForm = (data) => {
    // console.log(data.email);
    // console.log(data.password);
    ctx.signWithPassword(data.email, data.password);
  };

  return (
    <div className={classes.form__main}>
      <h2>Login</h2>
      <h4>{ctx.errorMessage !== "" && ctx.errorMessage}</h4>
      <form onSubmit={handleSubmit(handleSubmitForm)}>
        <div>
          {<h4>{errors.email && <span>please enter a valid email</span>}</h4>}
          {
            <h4>
              {errors.password && (
                <span>please enter password more then 6</span>
              )}
            </h4>
          }
          <input
            className={classes.input_field}
            type="email"
            placeholder="enter email"
            {...register("email", {
              required: true,
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            })}
          />
        </div>
        <div>
          <input
            className={classes.input_field}
            type="password"
            placeholder="enter password"
            {...register("password", { required: true, minLength: 5 })}
          />
        </div>
        <Button orange type="submit">
          login
        </Button>
      </form>
      <Button orange onClick={signInWithGoogle}>
        Sign In With Google
      </Button>
      <h3>
        Have No Account ?<Link to="/register">Register Here</Link>
      </h3>
    </div>
  );
};

export default Login;
