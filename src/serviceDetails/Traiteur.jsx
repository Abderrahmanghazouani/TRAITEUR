import { FaArrowCircleRight,FaArrowCircleLeft } from "react-icons/fa";
import tr1 from "../assets/tr1.jpg";
import tr2 from "../assets/tr2.jpg";
import tr3 from "../assets/tr3.jpg";
import tr4 from "../assets/tr4.jpg";
import tr5 from "../assets/tr5.jpg";
import tr6 from "../assets/tr6.jpg";
import { useState } from "react";

function Carousel({slides}){
    let [current,setCurrent] =useState();

    let previousSlide =() => {
        if(current===0) setCurrent(slides.length - 1);
        else setCurrent(current - 1);
    };

    let nextSlide =() => {
        if(current===slides.length - 1) setCurrent(0);
        else setCurrent(current + 1);
    };

    return(
     <div className="overflow-hidden relative">
        <div className="flex transition ease-out duration-40"
        style={{
            transform:`translateX(-${current * 100 }%)`,
        }}>
            {slides.map((s) =>{
              return <img src={s}/>;
            })}
        </div>
        <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-10 text-3xl ">
            <button onClick={previousSlide}>
            <FaArrowCircleLeft />
            </button>
            <button onClick={nextSlide}>
            <FaArrowCircleRight />
            </button>
        </div>
        <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full ">
            {slides.map((s,i) =>{
            return(
             <div
              onClick={()=>{
                 setCurrent(i);
              }}
              key={"circle"+i}
              className={`rounded-full w-5 h-5 cursor-pointer
              ${i==current?'bg-white':'bg-gray-500'}`}>
             </div>
            );
            })}
        </div>
    </div>
    );
} 
export default function Traiteur(){
    const slides =[tr1,tr2,tr3,tr4,,tr5,tr6]; 
    return(
      <div className="w-[60%] m-auto pt-11">
        <Carousel slides={slides}/>
      </div>
    );
}