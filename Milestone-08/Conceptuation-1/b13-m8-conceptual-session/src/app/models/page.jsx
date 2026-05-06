// cache ---> SSG -- Static Site generation
// dynamic ---> SSR ---> Server Side Rendering
// revalidate ---> ISR ---> Incremental(kichu time por por) Site Regeneration


const ModelsPage = async () => {
    const res = await  fetch("http://localhost:8000/models", {cache:"no-store"})
    const models = await res.json()



    return (
        <div>
            <h1>Models Page</h1>

            <div className="grid grid-cols-3 gap-5">
                {models.map(model => <div className="border p-3 rounded-lg" key={model.id}>
                    <h1 className="text-2xl font-bold">{model.title}</h1>
                    <p>{model.description}</p>
                    <p className="text-xl text-green-500">${model.price}</p>
                </div>)}
            </div>
        </div>
    );
};

export default ModelsPage;