import React, { useState } from "react";
import HeadLine from "../../UI/HeadLine/HeadLine";
import DevFilters from "../DevFilters/DevFilters";
import DevList from "../DevList/DevList";

import classes from "./devLayout.module.css";

import { devList } from "../../../dataSet";


const DevLayout = () => {


  const [data, setData] = useState(devList);


  const findDevSearchByName = (name) => {
    const filterData = [...devList];
    const result = filterData.filter(
      (item) => item.name.toLowerCase() === name.toLowerCase()
    );
    setData(result);
  };

  return (
    <>
      <div className={classes.dev_heading}>
        <HeadLine dev_heading>Dev section</HeadLine>
      </div>
      <div className={classes.main_dev_layout}>
        <div className={classes.filter__section}>
          <DevFilters/>
        </div>
        <div className={classes.dev_list_section}>
          <DevList/>
        </div>
      </div>
    </>
  );
};

export default DevLayout;
