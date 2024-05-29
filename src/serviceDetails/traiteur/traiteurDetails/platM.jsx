import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import platM1 from "../../../assets/Traiteur/platMarocain/tr1.jpg";
import platM2 from "../../../assets/Traiteur/platMarocain/tr2.jpg";
import platM3 from "../../../assets/Traiteur/platMarocain/tr3.jpg";
import platM4 from "../../../assets/Traiteur/platMarocain/tr4.jpg";
import platM5 from "../../../assets/Traiteur/platMarocain/tr5.jpg";
import platM6 from "../../../assets/Traiteur/platMarocain/tr6.jpg";

function PlatM() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className="container mx-auto p-6 bg-[#f7f1e9] shadow-md rounded-lg border-4 border-black">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-8 text-center border-b-4 border-gray-800 pb-2 font-mono">Plats Marocains</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <Slider {...settings}>
                    <div>
                        <div className="w-full h-72 rounded-lg overflow-hidden shadow-md">
                            <img src={platM4} alt="Plat Marocain 1" className="w-full h-full object-cover" />
                        </div>
                    </div>
                    <div>
                        <div className="w-full h-72 rounded-lg overflow-hidden shadow-md">
                            <img src={platM3} alt="Plat Marocain 2" className="w-full h-full object-cover" />
                        </div>
                    </div>
                    <div>
                        <div className="w-full h-72 rounded-lg overflow-hidden shadow-md">
                            <img src={platM2} alt="Plat Marocain 3" className="w-full h-full object-cover" />
                        </div>
                    </div>
                    <div>
                        <div className="w-full h-72 rounded-lg overflow-hidden shadow-md">
                            <img src={platM5} alt="Plat Marocain 4" className="w-full h-full object-cover" />
                        </div>
                    </div>
                    <div>
                        <div className="w-full h-72 rounded-lg overflow-hidden shadow-md">
                            <img src={platM6} alt="Plat Marocain 5" className="w-full h-full object-cover" />
                        </div>
                    </div>
                    <div>
                        <div className="w-full h-72 rounded-lg overflow-hidden shadow-md">
                            <img src={platM1} alt="Plat Marocain 6" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </Slider>
                <div>
                    <p className="text-lg text-gray-800 mb-6 font-serif">
                        Dans la cuisine marocaine, on peut ressentir la richesse culturelle du Maroc et l’identité de chacune de ses régions parmi toutes les saveurs que le Maroc a à offrir ; il était difficile de faire un choix.
                    </p>
                    <p className="text-lg text-gray-800 mb-6 font-serif">
                        La cuisine marocaine est reconnue comme étant la plus riche des cuisines orientales. La délicatesse de ses recettes permet d’apprécier l’explosion de saveurs des épices dont elle est constituée. Les influences arabes et berbères de cette cuisine donnent naissance à de savoureux plats que le Chef Olivier Bearzatto revisite avec passion. Couscous, tajine, pastilla, tangia, … mettent en avant les arômes des épices (safran, coriandre, paprika, cumin…) sans oublier les herbes aromatiques (romarin, fenouil, thym, anis, basilic…).
                    </p>
                </div>
            </div>
        </div>
    );
}

export default PlatM;
