// Komponenten tar emot name och recipe som "props"
const DrinkCard = ({ name, recipe }) => {

  const imagePath = `/images/${name}.png`;

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100">
      
      {/* Bild-behållare */}
      <div className="relative h-56 w-full bg-gray-200 overflow-hidden">
        <img 
          src={imagePath}
          alt={`Bild på ${name}`}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Text-innehåll */}
      <div className="p-6">
        <div className="flex justify-between items-center mb-2">
           <h3 className="text-xl font-bold text-gray-800">{name}</h3>
        </div>
        
        <p className="text-gray-600 text-sm line-clamp-3">
          {recipe}
        </p>

        <button className="mt-5 w-full bg-slate-900 text-white py-3 px-4 rounded-xl font-semibold hover:bg-orange-500 transition-colors duration-300">
            Beställ nu
        </button>
      </div>
    </div>
  );
};

export default DrinkCard;