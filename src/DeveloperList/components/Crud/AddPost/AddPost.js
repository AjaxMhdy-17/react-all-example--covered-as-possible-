import React, { useState , useContext } from "react";
import { useNavigate } from "react-router";
import classes from "./addPost.module.css";

import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";
import {CtxOfDev} from '../../../CtxAndReducer/CtxAndReducer' 

const AddPost = (props) => {

  const ctx = useContext(CtxOfDev) 

  const [post, setPost] = useState({
    id: null,
    name: "",
    designation: "",
    rating: "",
    level: "",
    join_date: "",
    pay_per_hour: "",
    work_in_week: "",
    inTeam : false , 
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPost({
      ...post,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(post);
    // console.log(typeof(parseInt(post.rating)));
    let randomId = parseInt(Math.random()*(40-5) + 5);

    const addPersonObj = {
      id : randomId , 
      name : post.name ,
      designation: post.designation,
      rating: parseInt(post.rating),
      level: post.level,
      join_date: "",
      pay_per_hour: parseInt(post.pay_per_hour),
      work_in_week: parseInt(post.work_in_week),
      inTeam : false , 
    }

    // console.log(addPersonObj);
    ctx.addPostLive(addPersonObj)
    setPost({
      id: null,
      name: "",
      designation: "",
      rating: "",
      level: "",
      join_date: "",
      pay_per_hour: "",
      work_in_week: "",
      inTeam : false , 
    })

  };

  // console.log(ctx);

  return (
    <div className={classes.live__main}>
      <div className={classes.live__form}>
        <h1>add version your favorite developer</h1>
        <form onSubmit={handleSubmit}>
          <div className={classes.input}>
            <Input
              placeholder="name"
              type="text"
              onChange={handleChange}
              name="name"
              value={post.name}
              required 
            />
          </div>
          <div className={classes.input}>
            <Input
              placeholder="designation"
              type="text"
              onChange={handleChange}
              name="designation"
              value={post.designation}
              required 
            />
          </div>
          <div className={classes.input}>
            <Input
              placeholder="rating"
              type="number"
              onChange={handleChange}
              name="rating"
              value={post.rating}
              required 
            />
          </div>
          <div className={classes.input}>
            {/* <Input placeholder="level" type='text' onChange={handleChange} name='level' value={post.level} /> */}
            <select
              onChange={handleChange}
              name="level"
              className={classes.select__box}
            >
              <option value="intermediate">intermediate</option>
              <option value="advanced">Advanced</option>
              <option value="expert">Expert</option>
            </select>
          </div>
          <div className={classes.input}>
            <Input
              placeholder="join_date"
              type="text"
              onChange={handleChange}
              name="join_date"
              value={post.join_date}
              required 
            />
          </div>
          <div className={classes.input}>
            <Input
              placeholder="pay_per_hour"
              type="number"
              onChange={handleChange}
              name="pay_per_hour"
              value={post.pay_per_hour}
              required 
            />
          </div>
          <div className={classes.input}>
            <Input
              placeholder="work hour in week"
              type="number"
              onChange={handleChange}
              name="work_in_week"
              value={post.work_in_week}
              required 
            />
          </div>
          <div>
            <Button type="submit">Add Your Developer</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPost;
