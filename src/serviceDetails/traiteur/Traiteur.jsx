import { RiArrowRightSLine } from 'react-icons/ri';


function Traiteur() {
    return (
        <div className="container mx-auto p-6 bg-[#f7f1e9] shadow-lg rounded-lg border border-black">
            <div className="flex justify-center mb-6">
                <h2 className="relative  text-3xl font-bold text-gray-900 font-mono flex items-center">
                   
                    <span className="relative z-10 bg-[#f7f1e9] px-4">Nos prestations de Traiteur</span>
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300"></div>
                    </div>
                </h2>
            </div>
            <div className="flex flex-col gap-6 items-center">
                <a href="/traiteur/plats-marocains" className="w-full md:w-2/3 lg:w-1/2">
                    <button className="flex items-center justify-center w-full p-4 bg-gray-100 rounded-lg shadow-md hover:bg-[#e3dac9] border hover:border-black transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
                        <RiArrowRightSLine className="text-4xl mr-4 text-gray-700 transition-all duration-300 transform hover:scale-110 " />
                        <span className="text-xl font-semibold font-serif text-gray-800 hover:text-[#FF9F01] transition-all duration-300 ">Plats Marocains</span>
                    </button>
                </a>
                <a href="/traiteur/plas-sales" className="w-full md:w-2/3 lg:w-1/2">
                    <button className="flex items-center justify-center w-full p-4 bg-gray-100 rounded-lg shadow-md hover:bg-[#e3dac9] border hover:border-black transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
                        <RiArrowRightSLine className="text-4xl mr-4 text-gray-700 transition-all duration-300 transform hover:scale-110" />
                        <span className="text-xl font-semibold font-serif text-gray-800 hover:text-[#FF9F01] transition-all duration-300">Les Salés</span>
                    </button>
                </a>
                <a href="/traiteur/buffet" className="w-full md:w-2/3 lg:w-1/2">
                    <button className="flex items-center justify-center w-full p-4 bg-gray-100 rounded-lg shadow-md hover:bg-[#e3dac9] border hover:border-black transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
                        <RiArrowRightSLine className="text-4xl mr-4 text-gray-700 transition-all duration-300 transform hover:scale-110" />
                        <span className="text-xl font-semibold font-serif text-gray-800 hover:text-[#FF9F01] transition-all duration-300">Buffet</span>
                    </button>
                </a>
            </div>
        </div>
    );
}

export default Traiteur;
