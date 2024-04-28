import React from 'react';
import SingleCard from './SingleCard';
import {project} from '../assets/index'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useContext } from "react";
import { Context } from "../App";
import { Link } from 'react-router-dom';
const Card = () => {
    const nightmode = useContext(Context)
    const d  = [...project]
    console.log(d)
    const responsiveness = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
        },
        taqblet: {
          breakpoint: { max: 1023, min: 464 },
          items: 2,
        },
        mobile: {
          breakpoint: { max: 767, min: 0 },
          items: 1,
        },
      };
      const itemclass={
        width: "350px",
        height: "100%",
        padding: "0px 10px",
        margin: "10px",
        overflow: "hidden",
      }
      const containerClass = {
        width: "100%",
        height: "100%",
        padding: "0px 10px",
        margin: "10px",
      }
    return (
        // <div className='flex justify-center content-center flex-col gap-2 md:flex-row px-24 md:px-10 py-10'>
            <div className="mt-[30px] md:mt-[50px] mb-[50px] md:mb-0 lg:w-[60%] w-[90%] mx-auto relative">
      <Carousel 
       infinite={true}
       autoPlaySpeed={1000}
       keyBoardControl={true}
      responsive={responsiveness}
    //   centerMode={true}
      containerClass={containerClass}
      itemClass={itemclass}
      >
       {
            d.map(item=> (
                        <SingleCard  data={item}></SingleCard>
            ))
           }
      </Carousel>
      
    <div className='mt-4 mb-4  cursor-pointer underline   absolute right-4 '>
    <Link to='/projects' className={`${nightmode ? " text-gray-300 " : "text-gray-700"} `}>
        view all
      </Link>
    </div>
    </div>
        //    {
        //     project.map(item=> (
        //                 <SingleCard  data={item}></SingleCard>
        //     ))
        //    }
            
        // </div>
    );
};

export default Card;