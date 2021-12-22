import React, { useContext } from "react";
import { CtxOfDev } from "../../CtxAndReducer/CtxAndReducer";
import classes from "./team.module.css";
import Button from "../UI/Button/Button";

function Team(props) {
  const ctx = useContext(CtxOfDev);

  console.log(ctx);

  const teamData = ctx.teamData;
  console.log(teamData);

  if (teamData.length === 0) {
    return <h3>No Team Member</h3>;
  }

  const teamList = teamData.map((member) => {
    const { id, name, designation, pay_per_hour, work_in_week, total_week } =
      member;
    return (
      <div key={id} className={classes.team__main}>
        <div className={classes.team__1}>
          <span>{name}</span>
          <span>{designation}</span>
          <span>
            <span>pay_per_hour :</span> <span>{pay_per_hour}</span>{" "}
          </span>
        </div>
        <div className={classes.team__2}>
          <span>
            <span>working hour week :</span> <span>{work_in_week}</span>
          </span>
          <span className={classes.space}>
            <span>hire for week</span> <span>{total_week}</span>
            <button onClick={() => ctx.increaseWeek(id)}>+</button>
            <button
              disabled={total_week <= 1}
              onClick={() => ctx.decreaseWeek(id)}
            >
              -
            </button>
          </span>
          <span>amount : {pay_per_hour * total_week * work_in_week}</span>
        </div>
        <div>
          <Button onClick={() => ctx.remove(id)}>remove from team</Button>
        </div>
      </div>
    );
  });

  //   let totalAmount = teamData.reduce((previtem , curritem) => {
  //       return parseInt(previtem.total_week*previtem.pay_per_hour) + parseInt(curritem.total_week*curritem.pay_per_hour);
  //   })


  let totalAmount = 0 
  teamData.map((item) => {
    // totalAmount += parseInt(parseInt(item.total_week) * parseInt(item.pay_per_hour))
    // console.log(typeof item.total_week);
    // console.log(typeof item.pay_per_hour);
    totalAmount += parseInt(item.total_week * item.pay_per_hour*item.work_in_week)
    // return sum ;
  });

//   console.log(totalAmount);

  // for( let i = 0 ; i < teamData.length ; i++ ){
  //     let member = teamData[i]
  //     totalAmount = parseInt(totalAmount) +  parseInt(member.pay_per_hour * member.total_week)
  //     console.log(totalAmount);
  // }

  //   console.log(totalAmount);

  return (
    <div>
      <div>{teamList}</div>
      <div>
        <h3>Total Amount ${totalAmount}</h3>
      </div>
    </div>
  );
}

export default Team;
