import React, { useContext , useEffect } from "react";
import { CtxOfDev } from "../../../../CtxAndReducer/CtxAndReducer";
import classes from "./singleDev.module.css";
import EditPost from "../../../Crud/EditPost/EditPost";
import Backdrop from "../../../UI/Backdrop/Backdrop";
import { Link } from "react-router-dom";
import { BsFillPencilFill, BsFillTrashFill } from "react-icons/bs";
import Button from "../../../UI/Button/Button";

const SingleDev = (props) => {
  const person = props.person;

  const ctx = useContext(CtxOfDev);

  // console.log(person);

  // console.log(ctx);

  // useEffect(() => {
  
  // },[ctx.filterdData])

  return (
    <>
      <div
        className={`${classes.single__dev__main} ${
          props.verticle ? classes.single_list_view : ""
        }`}
      >
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
          <br />
          <Link onClick={() => ctx.getEditData(person)} className={classes.styl} to={`/details/${person.id}`}>
            details about
          </Link>
          <div className={classes.styl} onClick={() => ctx.addToTeam(person.id)}>
            {person.inTeam === true ? "Already In A Team" : "Add This Dev In Your Team"}
          </div>
          <div
            className={classes.styl}
            onClick={() => {
              ctx.openEdit();
              ctx.getEditData(person);
            }}
          >
            Update{" "}
            <span>
              <BsFillPencilFill />
            </span>{" "}
          </div>
          <div
            onClick={() => ctx.deletePost(person.id)}
            className={classes.styl}
          >
            delete{" "}
            <span>
              <BsFillTrashFill />
            </span>{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleDev;
