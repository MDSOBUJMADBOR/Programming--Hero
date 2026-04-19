//1.parent node
const mainContainer = document.getElementById('main-container');

//2.create child node 
const placesSection = document.createElement('section');

//create h1
const h1 = document.createElement('h1');
h1.innerText = 'Places I want to visit';
placesSection.appendChild(h1);

const ul = document.createElement('ul');

const li1 = document.createElement('li');
li1.innerText = 'bandorbon';
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText='sundorbon';
ul.appendChild(li2);

placesSection.appendChild(ul);


//3.append placesSection to the main
mainContainer.appendChild(placesSection)



//easier to create HTML
const booksSection = document.createElement('section');
booksSection.innerHTML = `
<h1> Books I need to reade</h1>
<ul>
          <li>Physics</li>
          <li>Chemistry</li>
          <li>math</li>
          <li>Biology</li>
</ul>

`
mainContainer.appendChild(booksSection);