import React, { useContext, useEffect } from "react";
import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";
import { Link } from "react-router-dom";
import classes from "../Login/login.module.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { CtxOfDev } from "../../../CtxAndReducer/CtxAndReducer";

function Register() {
  const ctx = useContext(CtxOfDev);
    const navigate = useNavigate() 
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSubmitForm = (data) => {
    console.log(data);
    // console.log(data.password);
    ctx.createUserWithPassword(data.name , data.email, data.password);
  };

  useEffect(() => {
    if(ctx.isLogin === true ){
        navigate('/',{replace : true})
    }
  },[ctx.isLogin])

  return (
    <div className={classes.form__main}>
      <h2>Register</h2>

      <form onSubmit={handleSubmit(handleSubmitForm)}>
        <div>
        {<h4>{errors.name && <span>please enter a name</span>}</h4>}
          {<h4>{errors.email && <span>please enter a valid email</span>}</h4>}
          {
            <h4>
              {errors.password && (
                <span>please enter password more then 6</span>
              )}
            </h4>
          }
        </div>
        <div>
          <input
            className={classes.input_field}
            type="text"
            placeholder="enter name"
            {...register("name", { required: true })}
          />
        </div>
        <div>
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
        <Button orange>register</Button>
      </form>
      <h3>
        Have A Account ?<Link to="/login">Login Here</Link>
      </h3>
    </div>
  );
}

export default Register;
