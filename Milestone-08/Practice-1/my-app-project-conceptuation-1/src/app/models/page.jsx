

const ModelsPage = async () => {

  const res = await fetch("http://localhost:5000/models", {
    cache: "no-store"
  });
  const models = await res.json();

  if (!res.ok) {
    throw new Error("Failed to fetch models");
  }

  console.log(models,'models');

  return (
    <div>
      <h1>Models Page</h1>

      <div className="grid grid-cols-4 gap-5 ">
        {models.map(model => (
          <div className="border p-3 rounded-lg " key={model.id}>
            <h1 className="text-2xl font-bold">{model.title}</h1>
             <p>{model.description}</p>
             <p className="text-xl text-green-500">{model.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModelsPage;