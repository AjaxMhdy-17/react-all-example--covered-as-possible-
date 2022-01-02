import React from "react";
import { useForm } from "react-hook-form";

const HookForms = () => {
  const {
    register,
    handleSubmit,
    reset, 
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {

    ///getting all submited data from here 
    console.log(data);
    reset() 
  }

  console.log(errors);

  return (
    <div>
      <h2>form validation</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h4>{errors.firstName && <span>name invalid</span>}</h4>
        <h4>{errors.email && <span>please enter a valid email</span>}</h4>
        <h4>{errors.password && <span>please enter a valid password more then 3 less then 8</span>}</h4>
        <h4>{errors.isAgree && <span>please check in checkbox button</span>}</h4>
        <h4>{errors.color && <span>please choose a color</span>}</h4>
        {/* <h4>{errors.selectedOption && <span>please choose select option</span>}</h4> */}
        
        <div className="">
          <input 
            placeholder="enter name" 
            type="text" 
            {...register('firstName' , {required : true , minLength : 3 , maxLength : 5})}
        />
        </div>
        <div>
            <input 
                type="email"  
                placeholder='enter email'
                {...register('email' , {required : true , pattern : /^[^\s@]+@[^\s@]+\.[^\s@]+$/})}
            />
        </div>
        <div>
            <input 
                type="text" placeholder='enter password' 
                {...register('password' , {required : true , minLength : 4 , maxLength : 8 })} 
            />
        </div>
        <div>
            <input 
                type="checkbox" 
                {...register('isAgree' , {required : true})} 
            />
            <label htmlFor="checkbox"> agree with terms and conditions</label>
        </div>
        <div>
            <input 
                type="radio" 
                value="red" 
                {...register('color' , {required : true })}
            />
            <label htmlFor="red"> red</label>
            <br />
            <input 
                type="radio" 
                value="blue" 
                {...register('color' ,  {required : true })}
            />
            <label htmlFor="blue">blue</label>
            <br />
            <input 
                type="radio" 
                value="purple" 
                {...register('color' ,  {required : true })}
            />
            <label htmlFor="purple">purple</label>
        </div>
        <div>
            <select {...register('selectedOption' , {required : true})}>
                <option value="option-1">option-1</option>
                <option value="option-2">option-2</option>
                <option value="option-3">option-3</option>
            </select>
        </div>
        <div>
            <button type='submit'>submit</button>
        </div>
      </form>
    </div>
  );
};

export default HookForms;
