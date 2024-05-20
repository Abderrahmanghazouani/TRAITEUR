import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";
import tr1 from "../assets/tr1.jpg";
import tr2 from "../assets/tr2.jpg";
import tr3 from "../assets/tr3.jpg";
import tr4 from "../assets/tr4.jpg";
import tr5 from "../assets/tr5.jpg";
import tr6 from "../assets/tr6.jpg";
import { useState } from "react";

function Carousel({ slides }) {
    const [current, setCurrent] = useState(0);

    const previousSlide = () => {
        setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="overflow-hidden relative rounded-md">
            <div
                className="flex transition ease-out duration-500"
                style={{
                    transform: `translateX(-${current * 100}%)`,
                }}
            >
                {slides.map((slide, index) => (
                    <img key={index} src={slide} alt={`Slide ${index + 1}`} />
                ))}
            </div>
            <div className="absolute top-0 h-full w-full flex justify-between items-center text-white px-10 text-3xl">
                <button onClick={previousSlide}>
                    <FaArrowCircleLeft />
                </button>
                <button onClick={nextSlide}>
                    <FaArrowCircleRight />
                </button>
            </div>
            <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
                {slides.map((_, i) => (
                    <div
                        key={i}
                        onClick={() => {
                            setCurrent(i);
                        }}
                        className={`rounded-full w-5 h-5 cursor-pointer ${
                            i === current ? 'bg-white' : 'bg-gray-500'
                        }`}
                    />
                ))}
            </div>
        </div>
    );
}

export default function Traiteur() {
    const slides = [tr1, tr2, tr3, tr4, tr5, tr6];
    return (
        <div className=" w-full max-w-md mx-auto pt-11">
            <Carousel slides={slides} />
        </div>
    );
}
