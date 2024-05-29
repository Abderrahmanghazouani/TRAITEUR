import floraleMom from "../assets/floralemom.jpg";
import florale1 from "../assets/florale1.jpg";
import florale2 from "../assets/florale2.jpg";
import florale3 from "../assets/florale3.jpg";



function Florale(){
    return (
        <div className="container mx-auto p-4">
            <div className="p-8 shadow-lg rounded-lg bg-[#f7f1e9] border border-black">
                <img src={floraleMom} alt="" className="w-full max-h-64 object-cover rounded-md shadow-lg border border-black mb-6" />
                <h2 className="text-4xl font-extrabold text-center mb-8 font-mono text-gray-900 tracking-wide leading-tight border-b-2 border-black pb-4 flex items-center justify-center gap-4">
                Des scénographies à couper le souffle
                </h2>
                <p className="text-lg text-gray-800 mb-6 text-center font-serif">
                Pour vos grandes ou petites occasions, SAADI EVENTS Traiteur vous conseil et confectionne pour vous des compositions et décorations florales qui vous ressemblent. Les équipes Rahal Maître Traiteur ont été formées par de grands professionnels internationaux afin de sublimer vos réceptions et cérémonies avec succès. 
                Afin de vous satisfaire au mieux, Rahal Maître Traiteur procède en amont à des sélections rigoureuses de plantes et de fleurs.
                </p>
                <p className="text-lg text-gray-800 mb-6 text-center font-serif">
                Des créations personnalisées vous sont proposées suivant vos envies, couleurs et budgets. Du simple centre de table à la somptueuse œuvre d’art florale en passant par l’habillage complet de l’espace,
                 les conceptions florales de SAADI EVENTS Traiteur feront de votre réception un lieu de grâce et de convivialité.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <img src={florale1} alt="Table décorée 1" className="w-full h-64 object-cover rounded-md shadow-lg border border-black" />
                    <img src={florale2} alt="Table décorée 2" className="w-full h-64 object-cover rounded-md shadow-lg border border-black" />
                    <img src={florale3} alt="Table décorée 3" className="w-full h-64 object-cover rounded-md shadow-lg border border-black" />
                </div>
            </div>
        </div>
    );
}

export default Florale;