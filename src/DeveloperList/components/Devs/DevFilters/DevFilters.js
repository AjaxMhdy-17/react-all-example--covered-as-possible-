import React, { useState , useEffect , useContext} from "react";
import Button from "../../UI/Button/Button";
import { devList } from "../../../dataSet";
import classes from "./devFilters.module.css";

import {CtxOfDev} from '../../../CtxAndReducer/CtxAndReducer'

const allCategory = [
  ...new Set(devList.map((item) => item.designation.toLowerCase())),
];

function DevFilters(props) {

  const ctx = useContext(CtxOfDev)


  const [category, setCategory] = useState('');
  const [selectedRadioValue, setSelectedRadioValue] = useState("");

  const [isActive , setIsActive] = useState(true)

  useEffect(() => {
    ctx.filterDevByDesignation(category);
  }, [category]);

  const selectHandlerChange = (e) => {
    setCategory(e.target.value);
  };

  // console.log(category);

  const radioChangeHandler = (e) => {
    setSelectedRadioValue(e.target.value);
    setIsActive(false) 
  };

  const radioSubmithHandler = (e) => {
    e.preventDefault();
    ctx.findBySkillLevel(selectedRadioValue);
  };


  return (
    <div className={classes.dev_filters_main}>
      <h4>Filters</h4>
      <div className="select_category">
          <select
            className={classes.select_category}
            value={category}
            onChange={selectHandlerChange}
          >
            {allCategory.map((category, index) => (
              <option
                key={index}
                className={classes.select_option}
                value={category}
              >
                {category}
              </option>
            ))}
          </select>
      </div>
      <div className={classes.radio__submit}>
        <form onSubmit={radioSubmithHandler}>
          <div className={classes.radio_div}>
            <input
              type="radio"
              id="Intermediate"
              name="level"
              value="Intermediate"
              onChange={radioChangeHandler}
            />
            <label htmlFor="Intermediate">Intermediate</label>
          </div>
          <div className={classes.radio_div}>
            <input
              onChange={radioChangeHandler}
              type="radio"
              id="Advanced"
              name="level"
              value="Advanced"
            />
            <label htmlFor="Advanced">Advanced</label>
          </div>
          <div className={classes.radio_div}>
            <input
              onChange={radioChangeHandler}
              type="radio"
              id="Expert"
              name="level"
              value="Expert"
            />
            <label htmlFor="Expert">Expert</label>
          </div>
          <Button disabled={isActive} type="submit">find</Button>
        </form>
      </div>
      <div className={classes.sorting_buttons}>
        <Button onClick={ctx.sortingDataByName}>Sort by name</Button>
        <Button onClick={ctx.sortingDataByRating}>Sort by rating</Button>
        <Button onClick={ctx.sortingDataByJoining}>Sort by join date</Button>
        <Button onClick={ctx.resetAllData}>reset all</Button>
      </div>
    </div>
  );
}

export default DevFilters;
