import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import piece1 from "../../assets/patisserie/pIECESMontee/pM1.jpg";
// import piece2 from "../../assets/patisserie/pIECESMontee/pM2.jpg";
import piece3 from "../../assets/patisserie/pIECESMontee/pM3.jpg";
import piece4 from "../../assets/patisserie/pIECESMontee/pM4.jpg";


function PieceMontee() {
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
            PIÈCES MONTÉES 
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <Slider {...settings}>
                    <div>
                        <div className="w-full h-72 rounded-lg overflow-hidden shadow-md">
                            <img src={piece4} alt="pieces montees" className="w-full h-full object-cover" />
                        </div>
                    </div>
                    <div>
                        <div className="w-full h-72 rounded-lg overflow-hidden shadow-md">
                            <img src={piece1} alt="Pâtisserie Marocaine 2" className="w-full h-full object-cover" />
                        </div>
                    </div>
                    <div>
                        <div className="w-full h-72 rounded-lg overflow-hidden shadow-md">
                            <img src={piece3} alt="Pâtisserie Marocaine 3" className="w-full h-full object-cover" />
                        </div>
                    </div>
              
                </Slider>
                <div className="space-y-6">
                  
                    <p className="text-lg font-bold text-gray-800 leading-relaxed font-serif  ">
                    Vous cherchez une pièce montée pour vos évènements soit pour un mariage ou pour fiançailles ? Un dessert unique mais surtout original.
                    </p>
                    <p className="text-lg text-gray-800 leading-relaxed font-serif" >
                        Tous les convives (ou presque) s’attendent à voir arriver LA traditionnelle pièce montée ou le 
                        fameux gâteau à étages. Le tout garni de couches de crème, avec tous les accessoires estampillés mariage : 
                        figurines intégrées, pâte d’amande, bref rien de fort original. 

                    </p>
                    <p className="text-lg text-gray-800 leading-relaxed font-serif">
                    Pourtant le dessert de mariage ne se limite pas à la seule pièce montée, à la corbeille de fruits, aux pâtisseries marocaines, 
                    même si cela fait partie des traditions du mariage. Les pâtissiers
                     font désormais preuve d’originalité ne vous ne privez pas et régalez vos invités.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default PieceMontee;
