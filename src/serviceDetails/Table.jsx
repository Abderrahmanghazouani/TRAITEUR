
import table1 from "../assets/table3 (1).jpg";
import table2 from "../assets/table3 (2).jpg";
import table3 from "../assets/table3 (3).jpg";
import tablemom from "../assets/Table-mom.jpg";

function Table() {
    return (
        <div className="container mx-auto p-4">
            <div className="p-8 shadow-lg rounded-lg bg-[#f7f1e9] border border-black">
                <img src={tablemom} alt="" className="w-full max-h-64 object-cover rounded-md shadow-lg border border-black mb-6" />
                <h2 className="text-4xl font-extrabold text-center mb-8 font-mono text-gray-900 tracking-wide leading-tight border-b-2 border-black pb-4 flex items-center justify-center gap-4">
                    
                    Le plaisir de manger passe aussi par les yeux …
                </h2>
                <p className="text-lg text-gray-800 mb-6 text-center font-serif">
                    SAADI EVENTS Traiteur vous propose des ornements diversifiés pour habiller vos tables et buffets de réception.
                    Faisant le tour des meilleurs salons internationaux de décoration et d’art de table, Rahal Maître Traiteur dresse
                    pour vous des tables originales pour faire de votre réception un cadre inédit.
                </p>
                <p className="text-lg text-gray-800 mb-6 text-center font-serif">
                    Les équipes de Rahal Maître Traiteur procèdent à une sélection de vaisselle qui habille vos tables de fêtes et donne le ton à votre repas : blanc raffiné,
                    esprit bistrot, noir sophistiqué ou couleurs chatoyantes …
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <img src={table1} alt="Table décorée 1" className="w-full h-64 object-cover rounded-md shadow-lg border border-black" />
                    <img src={table2} alt="Table décorée 2" className="w-full h-64 object-cover rounded-md shadow-lg border border-black" />
                    <img src={table3} alt="Table décorée 3" className="w-full h-64 object-cover rounded-md shadow-lg border border-black" />
                </div>
            </div>
        </div>
    );
}

export default Table;
