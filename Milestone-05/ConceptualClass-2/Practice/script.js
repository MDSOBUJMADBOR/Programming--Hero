
const categoriesContainer = document.getElementById("categoriesContainer");
const treesContainer = document.getElementById("treesContainer");



//Category btn
async function loadCategories() {
//async await
const res = await fetch("https://openapi.programming-hero.com/api/categories");

const data = await res.json();
// console.log(data);
// console.log(categoriesContainer);

data.categories.forEach((category) => {
          // console.log(category.id);

const btn = document.createElement('button');
btn.className = "btn btn-outline w-full";
btn.textContent = category.category_name;

btn.onclick = () => selectCategory(category.id ,btn);

categoriesContainer.appendChild(btn);
})
}

async function selectCategory(categoryId , btn) {
          // console.log(categoryId,btn);


//Update active button style
const allButtons = document.querySelectorAll("#categoriesContainer button, #allTreesbtn");
// console.log(allButtons);
allButtons.forEach((btn) => {
          btn.classList.remove("btn-primary");
          btn.classList.add("btn-outline");
})
btn.classList.add("btn-primary");
btn.classList.remove("btn-outline");

const res = await fetch(`https://openapi.programming-hero.com/api/category/${categoryId}`);
const data = await res.json();
// console.log(data);
displayTrees(data.plants);

}
//Trees load and display
async function loadTrees() {
          
}

function displayTrees(trees) {
// "id": 1,
// "image": "https://i.ibb.co.com/cSQdg7tf/mango-min.jpg",
// "name": "Mango Tree",
// "description": "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green canopy offers shade, while its sweet fruits are rich in vitamins and minerals.",
// "category": "Fruit Tree",
// "price": 500
trees.forEach((tree) => {
console.log(tree);
const card =document.createElement('div');
card.className = `card bg-white  shadow-sm border-b-2`;
card.innerHTML = ` 
<figure>
                                                            <img src="${tree.image}"
                                                                      alt="Shoes" />
                                                  </figure>
                                                  <div class="card-body">
                                                            <h2 class="card-title">${tree.name}</h2>
                                                            <p class="line-clamp-2">${tree.description}</p>
                                                            <div class="badge badge-success badge-outline">${tree.category}</div>
                                                            <div class="flex justify-between items-center">
                                                                      <h2 class="font-bold text-xl text-[#4ade80]">$${tree.price}
                                                                      </h2>
                                                                      <button class="btn btn-primary">Card</button>
                                                            </div>
                                                  </div>
`
treesContainer.appendChild(card);

})

}






loadCategories()



