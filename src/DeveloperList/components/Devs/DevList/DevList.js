import React, { useState, useEffect, useContext } from "react";

import classes from "./devList.module.css";
import SingleDev from "./SingleDev/SingleDev";
import { devList } from "../../../dataSet";
import { BsFillGridFill, BsFillHddStackFill, BsSearch } from "react-icons/bs";
import Button from "../../UI/Button/Button";
import AddPost from "../../Crud/AddPost/AddPost";
import { CtxOfDev } from "../../../CtxAndReducer/CtxAndReducer";
import Backdrop from "../../UI/Backdrop/Backdrop";
import EditPost from "../../Crud/EditPost/EditPost";
import { useParams } from "react-router-dom";

function DevList(props) {
  const ctx = useContext(CtxOfDev);

  const [verticle, setVerticle] = useState(false);
  const [name, setName] = useState("");
  const [isActive, setIsActive] = useState(true);
  const [firstTime, setFirstTime] = useState(true);
  const [add, setAdd] = useState(false);

  useEffect(() => {
    if (name === "") {
      ctx.resetAllData();
    }
  }, [name]);

  const setGrid = () => {
    setVerticle(false);
  };

  const setLine = () => {
    setVerticle(true);
  };

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };

  const findDevSearch = (e) => {
    e.preventDefault();
    ctx.findDevSearchByName(name);
  };

  const addForm = () => {
    setAdd(true);
  };
  const closeForm = () => {
    setAdd(false);
  };

  return (
    <div className={classes.dev_list_main}>
      {ctx.isEdit && (
        <Backdrop closeEdit={ctx.closeEdit}>
          <EditPost />
        </Backdrop>
      )}
      <div className={classes.list_top}>
        <div className={classes.list_layout_icons}>
          <span>
            <BsFillGridFill onClick={setGrid} />
          </span>
          <span>
            <BsFillHddStackFill onClick={setLine} />
          </span>
        </div>
        <div className={classes.search_box}>
          <form onSubmit={findDevSearch}>
            <BsSearch className={classes.search_icon} />
            <input
              type="search"
              placeholder="search a developer"
              value={name}
              onChange={nameChangeHandler}
            />
            <button type="submit" disabled={name.length === 0}>
              search
            </button>
          </form>
        </div>
      </div>

      <div
        className={`${classes.list_layout}  ${
          verticle
            ? classes.list_layout_control_verticle
            : classes.list_layout_control_grid
        }`}
      >
        {ctx.filterdData.length === 0 ? (
          <>
            No Developer Found With This Name
            <Button onClick={ctx.resetAllData}>reload</Button>
          </>
        ) : (
          <>
            {ctx.filterdData.map((person) => (
              <SingleDev key={person.id} person={person} verticle={verticle} />
            ))}
          </>
        )}
        <div>
          {add && <AddPost />}
          {add === true ? (
            <Button onClick={closeForm}>close</Button>
          ) : (
            <Button onClick={addForm}>add post</Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default DevList;
