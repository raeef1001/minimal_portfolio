import React from 'react';
import { Link, useParams } from "react-router-dom";
import { project } from "../assets/index";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel'
import { useContext } from "react";
import { Context } from "../App";
const ProjectSingle = () => {
    const routeParams = useParams();
  var ProjectId = routeParams.id;
  const nightmode = useContext(Context);
  const selectedProject = project.find((item) => item.id === parseInt(ProjectId));
    return (
        <div className='w-[90%] md:w-[65%] mx-auto'>
 
 <div className='mt-4 mb-4  cursor-pointer underline  text-xl mx-auto'>
    <Link to='../projects' className={`${nightmode ? " text-gray-300 " : "text-gray-700"} `}>
       Go Back
      </Link>
    </div>
          
            <h2
          className={`${
            nightmode ? "text-[#D6D3D1]" : "text-[#1C1917]"
          } text-[1.25rem] md:text-[2.5rem]  mb-[20px]`}
        >
            {selectedProject.name}
        </h2>
            <Carousel
                infiniteLoop={true}
                showIndicators={false}
                showStatus={false}
                thumbWidth={60}
                autoPlay={true}
                className='productCarousel'
            >
                {
                    selectedProject.image.map(i=><img src={i} alt="" />)
                }
                
               
                
                
                </Carousel>  
                <div className='flex justify-center align-middle mt-10'>
                    <button className='border-2 px-8 py-4 hover:text-lg rounded-md'>
                        <a  href={selectedProject.link} target='_blank' rel="noreferrer">
                           <p >View Site</p>
                        </a>

                    </button>
                    {/* <button className='border-2 px-8 py-4  hover:bg-orange-300'>
                        <a href={selectedProject.github} target='_blank' rel="noreferrer">
                            View Code
                        </a>
                    </button> */}
                </div>

                <p className="text-[#938E8A] mt-[20px] w-full md:w-[60vw] lg:w-[50vw] xl:w-[40vw] 2xl:w-[35vw] self-center md:px-5 mx-auto">
                {selectedProject.description}
          </p>

        </div>
    );
};

export default ProjectSingle;