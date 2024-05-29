
import amenagement from "../assets/amenagemnt.jpg";

function Amenagement() {
    return (
        <div className="container mx-auto p-4">
            <div className="shadow-lg rounded-lg overflow-hidden bg-[#f7f1e9] border border-black">
                <img src={amenagement} alt="Aménagement" className="w-full h-auto max-h-80" />
                <div className="p-6">
                    <h2 className="text-3xl text-center font-bold text-gray-900 mb-2 font-mono">AMÉNAGEMENT</h2>
                    <h4 className="text-xl font-semibold text-center text-gray-700 mb-4 font-mono">VOS STRUCTURES ET CHAPITEAUX SUR MESURE</h4>
                    <p className="text-lg text-gray-800 mb-4 font-serif text-center">
                        Pour l’aménagement de vos espaces de réception, SAADI EVENTS Traiteur met à votre disposition une équipe d’architectes designers qui après avoir étudié scrupuleusement les besoins en agencement et installation de votre site, déterminent des réponses à vos exigences architecturales tout en respectant l’ensemble des normes de construction et de montage.
                    </p>
                    <p className="text-lg text-gray-800 mb-4 font-serif text-center">
                        Du simple chapiteau à la structure vitrée grande dimension, les équipes SAADI EVENTS  Traiteur transforment les espaces les plus simples en des lieux merveilleux où convergent toutes les magies : jardins de palace, terrasses de villas, sites historiques, plages privées, désert, esplanades.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Amenagement;
