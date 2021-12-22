import React, { useState , useEffect } from "react";

import { BsFillArrowRightSquareFill } from "react-icons/bs";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";

import classes from "./banner.module.css";

import cover1 from "../../assets/cover.jpg";
import cover2 from "../../assets/cover-2.png";
import cover3 from "../../assets/cover-3.jpg";

const sliderData = [
  {
    id: 1,
    image: cover2,
  },
  {
    id: 2,
    image: cover1,
  },
  {
    id: 3,
    image: cover3,
  },
];

function Banner() {
  const [slide, setSlide] = useState(0);


    useEffect(() => {

        let slider = setInterval(() => {
            setSlide((slide) => {
                let newSlide = slide + 1 
                if(newSlide > sliderData.length - 1 ){
                    newSlide = 0 ;
                }
                return newSlide 
            })
        },3000)

        return () => {
            clearInterval(slider)
        }

    },[slide])


    const checkIndex = (slide) => {
        if(slide > sliderData.length - 1){
            return 0 
        }
        else if( slide < 0 ){
            return sliderData.length - 1 
        }
        return slide 
    }

    const right = () => {
        setSlide((slide) => {
            let newSlide = slide + 1 
            return checkIndex(newSlide)
        })
    }

    const left = () => {
        setSlide((slide) => {
            let newSlide = slide - 1
            return checkIndex(newSlide)
        })
    }

  return (
    <div className={classes.banner__main}>
     
      <div className={classes.slide__images}>
        <img src={sliderData[slide].image} alt="banner_image" />
        <div className={classes.slide_icons}>
            <div 
                onClick={right}
                className={classes.right_icon}
            >
                <BsFillArrowRightSquareFill/>
            </div>
            <div 
                onClick={left}
                className={classes.left_icon}>
                <BsFillArrowLeftSquareFill/>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
