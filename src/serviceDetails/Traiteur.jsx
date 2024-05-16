import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import tr1 from "../assets/tr1.jpg";
import tr2 from "../assets/tr2.jpg";
import tr3 from "../assets/tr3.jpg";
import tr4 from "../assets/tr4.jpg";
import tr5 from "../assets/tr5.jpg";
import tr6 from "../assets/tr6.jpg";

function ImageSlider({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === images.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <div className="w-full max-w-[700px] h-[600px] m-auto py-16 px-4 relative">
            <div style={{ backgroundImage: `url(${images[currentIndex]})` }} className="w-full h-full rounded-2xl bg-center bg-cover duration-500"></div>
            {/* Left arrow */}
            <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer" onClick={prevSlide}>
                <BsChevronCompactLeft size={30} />
            </div>
            {/* Right arrow */}
            <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer" onClick={nextSlide}>
                <BsChevronCompactRight size={30} />
            </div>
            <div className="flex top-4 justify-center py-2">
                {images.map((image, slideIndex) => (
                    <div key={slideIndex} onClick={() => setCurrentIndex(slideIndex)} className={`text-2xl cursor-pointer ${currentIndex === slideIndex ? 'text-blue-500' : 'text-gray-500'}`}>
                        <RxDotFilled />
                    </div>
                ))}
            </div>
        </div>
    );
}

function TextContent() {
    return (
        <div className="flex-1 py-16 px-4">
            <h2 className="text-2xl font-bold text-center text-w mb-4">Title Here</h2>
            <p className="text-center">Dans la cuisine marocain on peut ressentir la richesse culturelle du Maroc et l’identité de chacune de ses régions parmi toutes les saveurs que le Maroc a offrir ; il était difficile de faire un choix
            La cuisine marocaine est reconnue comme étant la plus riche des cuisines orientales. La délicatesse de ses recettes permet d’apprécier l’explosion de saveurs des épices dont elle est constituée.
            Les influences arabes et berbères de cette cuisine donnent naissance à de savoureux plats que le Chef Olivier Bearzatto revisite avec passion.
            Couscous, tajine, pastilla, tangia, … mettent en avant les arômes des épices (safran, coriandre, paprika, cumin…) sans oublier les herbes aromatiques (romarin, fenouil, thym, anis, basilic…).
            </p>
        </div>
    );
}

export default function Traiteur() {
    const images = [tr1, tr2, tr3, tr4, tr5, tr6];

    return (
        <>
            {/* Original layout */}
            <div className="flex">
                <ImageSlider images={images} />
                <TextContent />
            </div>
            
            {/* Mirrored layout */}
            <div className="flex">
                <TextContent />
                <ImageSlider images={images} />
            </div>
        </>
    );
}
