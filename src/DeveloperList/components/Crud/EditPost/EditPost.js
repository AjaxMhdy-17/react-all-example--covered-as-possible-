import React , {useContext , useState} from 'react'

import classes from './editPost.module.css'

import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";
import {CtxOfDev} from '../../../CtxAndReducer/CtxAndReducer' 

const EditPost = () => {
  
  const ctx = useContext(CtxOfDev) 

  const person = ctx.personEditData ;

  console.log(person);
  // console.log(ctx);

  const [post, setPost] = useState({
    id: person.id,
    name: person.name,
    designation: person.designation,
    rating: person.rating,
    level: person.level,
    join_date: person.join_date,
    pay_per_hour: person.pay_per_hour,
    work_in_week: person.work_in_week,
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
      id : person.id , 
      name : post.name ,
      designation: post.designation,
      rating: parseInt(post.rating),
      level: post.level,
      join_date: "",
      pay_per_hour: parseInt(post.pay_per_hour),
      work_in_week: parseInt(post.work_in_week),
    }

    // console.log(addPersonObj);
    ctx.editPost(addPersonObj)
    setPost({
      id: null,
      name: "",
      designation: "",
      rating: "",
      level: "",
      join_date: "",
      pay_per_hour: "",
      work_in_week: "",
    })

  };

  // console.log(ctx);

  return (
    <div className={classes.live__main}>
      <div className={classes.live__form}>
        <h1>Update developer Info</h1>
        <form onSubmit={handleSubmit}>
          <div className={classes.input}>
            <Input
              placeholder="name"
              type="text"
              onChange={handleChange}
              name="name"
              value={post.name}
            />
          </div>
          <div className={classes.input}>
            <Input
              placeholder="designation"
              type="text"
              onChange={handleChange}
              name="designation"
              value={post.designation}
            />
          </div>
          <div className={classes.input}>
            <Input
              placeholder="rating"
              type="number"
              onChange={handleChange}
              name="rating"
              value={post.rating}
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
            />
          </div>
          <div className={classes.input}>
            <Input
              placeholder="pay_per_hour"
              type="number"
              onChange={handleChange}
              name="pay_per_hour"
              value={post.pay_per_hour}
            />
          </div>
          <div className={classes.input}>
            <Input
              placeholder="worr hour in week"
              type="number"
              onChange={handleChange}
              name="work_in_week"
              value={post.work_in_week}
            />
          </div>
          <div>
            <Button type="submit">Updata Your Developer Info</Button>
          </div>
        </form>
      </div>
    </div>
  );
}



export default EditPost
