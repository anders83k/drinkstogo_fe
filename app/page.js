export default async function Home() {
  try {
    const response = await fetch("http://localhost:8080/drinkstogo", {
      cache: "no-store",
    });

    if (!response.ok) {
      return <main className="p-10">Kunde inte hämta menyn (status: {response.status})</main>;
    }

    const data = await response.json();

    console.log("Data från API:", data);

    if (!Array.isArray(data) || data.length === 0) {
      return <main className="p-10">Inga drinkar hittades i databasen.</main>;
    }

    const displayDrinks = data.slice(0, 6);

    return (
      <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-12 text-zinc-900 dark:text-white">
            Våra 6 Populäraste Drinkar
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayDrinks.map((drink) => {
              console.log("Drink:", drink.name);
              console.log("Bildsökväg:", `/images/${drink.name}.png`);

              return (
                <div
                  key={drink.name}
                  className="bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-sm border border-zinc-200 dark:border-zinc-800 flex flex-col items-center text-center"
                >
                  {/* ✅ Bilden behövde src titel "alt" och className */}
                  <div className="relative w-full h-48 bg-zinc-100 dark:bg-zinc-800 rounded-xl mb-4 overflow-hidden">
                  <img
                      src={`/images/${drink.name}.png`}
                      alt={`Bild på ${drink.name}`}
                      className="w-full h-full object-cover"
                    />


                  </div>

                  <h3 className="text-xl font-semibold text-orange-500 mb-2">
                    {drink.name}
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm">
                    {drink.recipe}
                  </p>

                  <button className="mt-6 px-6 py-2 bg-zinc-900 dark:bg-white dark:text-black text-white rounded-full text-sm font-medium hover:scale-105 transition-transform">
                    Läs mer
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Fel vid hämtning:", error);
    return <main className="p-10">Ett fel uppstod: {error.message}</main>;
  }
}