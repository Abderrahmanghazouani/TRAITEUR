import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import pat1 from "../../assets/patisserie/pat1.jpg";
import pat2 from "../../assets/patisserie/pat2.jpg";
import pat3 from "../../assets/patisserie/pat3.jpg";
// import pat4 from "../../assets/patisserie/pat4.jpg";
import pat5 from "../../assets/patisserie/pat5.jpg";

function PatisserieDesserts() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className="container mx-auto p-8 bg-[#f7f1e9] shadow-lg rounded-lg border-black border-4">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-8 text-center border-b-4 border-gray-800 pb-2 font-mono">
            PÂTISSERIE MAROCAINE ET DESSERTS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <Slider {...settings}>
                    <div>
                        <div className="w-full h-72 rounded-lg overflow-hidden shadow-md">
                            <img src={pat1} alt="Pâtisserie Marocaine 1" className="w-full h-full object-cover" />
                        </div>
                    </div>
                    <div>
                        <div className="w-full h-72 rounded-lg overflow-hidden shadow-md">
                            <img src={pat3} alt="Pâtisserie Marocaine 2" className="w-full h-full object-cover" />
                        </div>
                    </div>
                    <div>
                        <div className="w-full h-72 rounded-lg overflow-hidden shadow-md">
                            <img src={pat2} alt="Pâtisserie Marocaine 3" className="w-full h-full object-cover" />
                        </div>
                    </div>
                    {/* <div>
                        <div className="w-full h-72 rounded-lg overflow-hidden shadow-md">
                            <img src={pat4} alt="Pâtisserie Marocaine 4" className="w-full h-full object-cover" />
                        </div>
                    </div> */}
                    <div>
                        <div className="w-full h-72 rounded-lg overflow-hidden shadow-md">
                            <img src={pat5} alt="Pâtisserie Marocaine 5" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </Slider>
                <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-gray-900 font-serif">LE MAROC, PAYS DE TOUS LES TRÉSORS</h3>
                    <p className="text-lg text-gray-800 leading-relaxed font-serif ">
                        Les pâtisseries marocaines, souvent à base de miel et d’amandes, clôturent admirablement les réceptions gourmandes.
                    </p>
                    <p className="text-lg text-gray-800 leading-relaxed font-serif">
                        Avec son approche originale du métier de pâtissier, SAADI EVENTS Traiteur révolutionne les traditions marocaines les mieux établies avec des créations aux saveurs authentiques de produits de terroir.
                    </p>
                    <p className="text-lg text-gray-800 leading-relaxed font-serif">
                        De la fleur d’oranger au miel pur, les créations SAADI EVENTS Traiteur aboutissent aux ouvrages raffinés de cornes de gazelle, Mhenchas, Chebbakias, Fekkas ou encore Ghribas aux amandes, aux noix ou au sésame.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default PatisserieDesserts;
