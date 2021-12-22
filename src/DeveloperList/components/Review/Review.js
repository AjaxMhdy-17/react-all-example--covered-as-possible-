import React, { useState } from "react";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import { reviewData } from "../../dataSet";
import HeadLine from "../UI/HeadLine/HeadLine";
import classes from "./review.module.css";

const Review = () => {
  const [review, setReview] = useState(reviewData);
  const [index, setIndex] = useState(0);
  // console.log(review);

  const checkIndex = (index) => {
    if (index < 0) {
      return review.length - 1;
    } else if (index > review.length - 1) {
      return 0;
    }
    return index;
  };

  const next = () => {
    setIndex((index) => {
      const updateIndex = index + 1;
      return checkIndex(updateIndex);
    });
  };

  const prev = () => {
    setIndex((index) => {
      const updateIndex = index - 1;
      return checkIndex(updateIndex);
    });
  };

  // console.log(index);

  const { id, name, job, image, text } = review[index];

  return (
    <div className={classes.review__main}>
      <HeadLine review_heading>
          Review
        </HeadLine>
      <div className={classes.rev_img}>
        <img src={image} alt="review_image" />
      </div>
      <div className={classes.rev_info}>
        <h4>{name}</h4>
        <h5>{job}</h5>
        <p>{text}</p>
      </div>
      <div className={classes.review__icons}>
        <div onClick={next} className={classes.right_icon}>
          <BsFillArrowRightSquareFill />
        </div>
        <div onClick={prev} className={classes.left_icon}>
          <BsFillArrowLeftSquareFill />
        </div>
      </div>
    </div>
  );
};

export default Review;
