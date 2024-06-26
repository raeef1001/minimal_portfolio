import React from 'react';
import { useContext } from "react";
import { Context } from "../App";
import { Link } from 'react-router-dom';
const SingleCard = (props) => {
    const nightMode = useContext(Context);
    const tag = ["HTML", "CSS", "JavaScript"]
    return (
      <Link to={`/projects/${props.data.id}`}>
        <div  className={`${
            nightMode ? "border-[#fff]" : "border-[#1C1917]"
          } text-[.875rem]  font-bold cursor-pointer border-2  rounded-lg w-[80vw]
          md:max-w-[350px]`} >
 
            <div>
                <img src={props.data.img} className='h-44 object-cover overflow-hidden w-full' alt="" />
            </div>
            <div className='mx-3 mb-3 text-[.875rem] font-semibold'>
                <div >
                    <h1 className='text-[1.25rem] font-bold my-3 '>
                       {props.data.name}
                    </h1>
                </div>
                <div className='flex gap-2'>
                    {
                    
                        props.data.stack.map((t)=>(<div className={`${
                            nightMode ? "border-[#fff]" : "border-[#1C1917]"
                          } border-2 rounded-md inline p-[5px] `} >
                        {t}
                        </div>)
                            
                        )
                    }
                  
                 
                  
                </div>
            </div>
        </div>
      </Link>
    );
};

export default SingleCard;

