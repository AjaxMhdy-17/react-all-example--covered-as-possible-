import React, { useContext } from "react";
import { CtxOfDev } from "../../../../CtxAndReducer/CtxAndReducer";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import classes from "./devdetails.module.css";
import { useEffect } from "react/cjs/react.development";

const Devdetails = () => {
  const ctx = useContext(CtxOfDev);
  const { id } = useParams();
  const navigate = useNavigate();
  console.log(id);

  const goBack = () => {
    navigate(-1, {
      replace: true,
    });
  };

  console.log(ctx.personEditData);

  const person = ctx.personEditData;

  console.log(person);

//   useEffect(() => {
//     if (person === null) {
//       navigate("/", { replace: true });
//     }
//   }, []);

if (person !== null) {
    return (
        <div>
          <div>
            <div className={classes.name__intro}>
              {person.name[0]}
              {person.name[1]}
            </div>
            <div className={classes.dev__info}>
              <div>
                <strong>name : </strong>
                {person.name}
              </div>
              <div>
                <strong>designation : </strong>
                {person.designation}
              </div>
              <div>
                <strong>level : </strong>
                {person.level}
              </div>
              <div>
                <strong>rating : </strong>
                {person.rating}
              </div>
              <div>
                <strong>join_date : </strong>
                {person.join_date}
              </div>
              <div>
                <strong>pay_per_hour : </strong>
                {person.pay_per_hour}
              </div>
              <div>
                <strong>work_in_week : </strong>
                {person.work_in_week}
              </div>
              {/* <button onClick={goBack}></button> */}
              <Link to='/'>
              Go Back
              </Link>
            </div>
          </div>
        </div>
      );
}
else{
    return(
        <div>
            <h2>please press this <button onClick={goBack}>PRESS THIS</button> for go to home page </h2>
        </div>
    )
}

  
};

export default Devdetails;
