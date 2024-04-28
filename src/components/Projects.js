import React from "react";
import { useContext } from "react";
import { Context } from "../App";
import { project } from "../assets/index";
import SingleCard from "./SingleCard";
import { Link } from "react-router-dom";
const Projects = () => {
  const nightmode = useContext(Context);
  const react = project.filter((item) => item.typeof === "react");
  const wordpress = project.filter((item) => item.typeof === "wordpress");
  const designs = project.filter((item) => item.typeof === "design");
  return (
    <div>
        
         <div className='mt-4 mb-4  cursor-pointer underline  text-xl w-[90%] lg:w-[70%] mx-auto'>
    <Link to='../' className={`${nightmode ? " text-gray-300 " : "text-gray-700"} `}>
       Go Back
      </Link>
    </div>
      <div className="w-[80%] sm:w-[80%] lg:w-[70%]  mx-auto">
        <h2
          className={`${
            nightmode ? "text-[#D6D3D1]" : "text-[#1C1917]"
          } text-[2.25rem] md:text-[2.5rem]  mb-[10px]`}
        >
          Full Stack MERN Website
        </h2>
        <div className="md:w-[80vw] lg:w-[50vw] xl:w-[40vw] 2xl:w-[35vw] self-center px-5">
          <p
            className={`${
              nightmode ? "text-[#D6D3D1]" : "text-[#1C1917]"
            } text-[.75rem] md:text-[1rem]   `}
          >
            Explore some of my recent React projects, where I've applied
            cutting-edge technologies and best practices to create dynamic and
            user-friendly web applications. Each project represents a unique
            challenge and solution, demonstrating my expertise in React
            development.
          </p>
        </div>
        <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6  md:px-10 py-10">
          {react.map((item) => (
            <SingleCard data={item}></SingleCard>
          ))}
        </div>
      </div>
      {/* <div className="w-[60%] sm:w-[80%] lg:w-[70%]  mx-auto">
        <h2
          className={`${
            nightmode ? "text-[#D6D3D1]" : "text-[#1C1917]"
          } text-[2.25rem] md:text-[2.5rem]  mb-[10px]`}
        >
          Website Design
        </h2>
        <div className="md:w-[60vw] lg:w-[50vw] xl:w-[40vw] 2xl:w-[35vw] self-center px-5">
          <p
            className={`${
              nightmode ? "text-[#D6D3D1]" : "text-[#1C1917]"
            } text-[.75rem] md:text-[1rem]   `}
          >
            Transforming ideas into visually stunning and user-centric digital
            experiences is at the core of my website design philosophy. Each
            project is a canvas where creativity meets functionality, resulting
            in websites that leave a lasting impression. Explore some of my
            recent design endeavors that showcase my commitment to aesthetics
            and user experience.
          </p>
        </div>
        <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6  md:px-10 py-10">
          {designs.map((item) => (
            <SingleCard data={item}></SingleCard>
          ))}
        </div>
      </div> */}
      {/* <div className="w-[60%] sm:w-[80%] lg:w-[70%]  mx-auto">
        <h2
          className={`${
            nightmode ? "text-[#D6D3D1]" : "text-[#1C1917]"
          } text-[2.25rem] md:text-[2.5rem]  mb-[10px]`}
        >
          wordpress Website
        </h2>
        <div className="md:w-[60vw] lg:w-[50vw] xl:w-[40vw] 2xl:w-[35vw] self-center px-5">
          <p
            className={`${
              nightmode ? "text-[#D6D3D1]" : "text-[#1C1917]"
            } text-[.75rem] md:text-[1rem]  `}
          >
            Empower your online presence with the versatility and power of
            WordPress. As a seasoned developer, I specialize in leveraging the
            capabilities of this robust content management system to create
            dynamic, scalable, and visually appealing websites. Explore some of
            my recent WordPress projects that demonstrate my proficiency in
            harnessing the full potential of this popular platform.
          </p>
        </div>
        <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6  md:px-10 py-10">
          {wordpress.map((item) => (
            <SingleCard data={item}></SingleCard>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default Projects;
