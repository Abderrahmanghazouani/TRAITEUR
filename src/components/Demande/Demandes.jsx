

const demandes = [
  { id: 1, title: 'Demande 1', description: 'Description de la demande 1' },
  { id: 2, title: 'Demande 2', description: 'Description de la demande 2' },
  { id: 3, title: 'Demande 3', description: 'Description de la demande 3' },
];

const DemandList = () => {
  return (
    <div className="max-w-2xl mx-auto p-4" style={{ backgroundColor: '#E3DAC9' }}>
      <h1 className="text-[#902813] text-2xl font-bold mb-4">Liste des Demandes</h1>
      <ul className="space-y-4">
        {demandes.map(demande => (
          <li key={demande.id}>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold">
                <a
                  href={`/demande/${demande.id}`}
                  className="text-[#902813] hover:text-[#FFB917] hover:underline"
                >
                  {demande.title}
                </a>
              </h2>
              <p className="text-gray-600">{demande.description}</p>
            </div>
            {demande.id !== demandes[demandes.length - 1].id && (
              <hr className="my-3" style={{ borderColor: '#FFB917' }} />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DemandList;
