import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sale1 from "../../../assets/Traiteur/sales/sale1.jpg";
import sale2 from "../../../assets/Traiteur/sales/sale2.jpg";
import sale3 from "../../../assets/Traiteur/sales/sale3 (2).jpg";
import sale4 from "../../../assets/Traiteur/sales/sale4.jpg";
import sale5 from "../../../assets/Traiteur/sales/sale5.jpg";


function PlatS() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className="container mx-auto p-8 bg-[#f7f1e9] shadow-lg rounded-lg  border-black b border-4">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-8 text-center border-b-4 border-gray-800 pb-2 font-mono">
                Les Salés
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <Slider {...settings} >
                    <div>
                        <div className="w-full h-72 rounded-lg overflow-hidden shadow-md">
                            <img src={sale1} alt="Plat Marocain 1" className="w-full h-full object-cover" />
                        </div>
                    </div>
                    <div>
                        <div className="w-full h-72 rounded-lg overflow-hidden shadow-md">
                            <img src={sale5} alt="Plat Marocain 2" className="w-full h-full object-cover" />
                        </div>
                    </div>
                    <div>
                        <div className="w-full h-72 rounded-lg overflow-hidden shadow-md">
                            <img src={sale3} alt="Plat Marocain 3" className="w-full h-full object-cover" />
                        </div>
                    </div>
                    <div>
                        <div className="w-full h-72 rounded-lg overflow-hidden shadow-md">
                            <img src={sale4} alt="Plat Marocain 4" className="w-full h-full object-cover" />
                        </div>
                    </div>
                    <div>
                        <div className="w-full h-72 rounded-lg overflow-hidden shadow-md">
                            <img src={sale2} alt="Plat Marocain 5" className="w-full h-full object-cover" />
                        </div>
                    </div>
                
                </Slider>
                <div>
                    <p className="text-lg text-gray-800 mb-6 font-serif leading-relaxed">
                        Dans la cuisine marocaine, on peut ressentir la richesse culturelle du Maroc et l’identité de chacune de ses régions parmi toutes les saveurs que le Maroc a à offrir ; il était difficile de faire un choix.
                    </p>
                    <p className="text-lg text-gray-800 mb-6 font-serif leading-relaxed">
                        Les plats marocains salés sont également réputés pour leur goût exquis et leurs épices aromatiques. Des plats comme le tajine, le couscous, et la pastilla salée sont des délices pour les papilles et font partie intégrante de la cuisine marocaine.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default PlatS;
