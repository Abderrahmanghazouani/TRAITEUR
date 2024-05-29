import imgBuffet from "../../../assets/Traiteur/buffet/buffet.jpg";

function Buffet() {
    return (
        <div className="container mx-auto p-8 border-4 border-black shadow-md rounded-lg bg-[#f7f1e9]  ">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-8 text-center border-b-4 border-gray-800 pb-2 font-mono">Buffet</h1>
            <img src={imgBuffet} alt="Buffet" className=" w-full max-h-60 object-cover  mb-6 rounded-lg shadow-md border border-black " />
            <p className="text-lg text-gray-800 mb-6 font-serif">
                Un buffet peut proposer ou non la totalité d'un repas et être mise en valeur par une décoration. Un des principaux intérêts de service buffet est d'offrir une variété de mets plus importante que lors d'un repas. Si vous n'avez aucune idée des plats qui composeront votre buffet de mariage, inspirez-vous des suggestions suivantes. Il est recommandé de tenir compte des ...
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mb-2 font-mono">Buffet entreprise</h3>
            <p className="text-lg text-gray-800 mb-6 font-serif">
                Un buffet d'entreprise est un repas dont il est préférable de laisser la préparation et le service à des professionnels afin d'en assurer la réussite. Si vous devez organiser un événement pour votre entreprise et que vous ne savez pas encore exactement quel format vous pouvez sélectionner, ...
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mb-2 font-mono">Buffet privé</h3>
            <p className="text-lg text-gray-800 mb-6 font-serif">
                Un buffet privé est un repas dont il est préférable de laisser la préparation et le service à des professionnels afin d'en assurer la réussite. Si vous devez organiser un événement pour votre entreprise et que vous ne savez pas encore exactement quel format vous pouvez sélectionner, ...
            </p>
        </div>
    );
}

export default Buffet;
