/**
 * 1.childNodes
 * 2.parentNode
 */
// document.getElementById('players-container')
// <section id=​"players-container" style=​"background-color:​ lightblue;​ border:​ 3px solid green;​ margin-bottom:​ 5px;​ border-radius:​ 15px;​ padding:​ 10px;​">​…​</section>​
// document.getElementById('players-container').childNodes
// NodeList(5) [text, h1, text, ul, text]
// document.getElementById('players-container').childNodes[0]
// #text
// document.getElementById('players-container').childNodes[1]
// <h1>​Players​</h1>​
// document.getElementById('players-container').childNodes[3]
// <ul>​…​</ul>​
// document.getElementById('players-container').childNodes[3].childNodes
// NodeList(11) [text, li, text, li, text, li, text, li, text, comment, text]
// document.getElementById('players-container').childNodes[3].childNodes[0]
// #text
// document.getElementById('players-container').childNodes[3].childNodes[1]
// <li>​…​</li>​
// document.getElementById('players-container').childNodes[3].childNodes[1].parentNode
// <ul>​…​</ul>​
// document.getElementById('players-container').childNodes[3].childNodes[1].parentNode.parentNode
// <section id=​"players-container" style=​"background-color:​ lightblue;​ border:​ 3px solid green;​ margin-bottom:​ 5px;​ border-radius:​ 15px;​ padding:​ 10px;​">​…​</section>​
// document.getElementById('players-container').childNodes[3].childNodes[1].parentNode.parentNode.parentNode
// <main>​…​</main>​




/**
 * 1.createElement
 */
// 1.create element and set innerText or innerHTML
const newChild = document.createElement('li');
newChild.innerText = 'New born footballer hero';
//2.find the parent where you will add the child
const playersList = document.getElementById('player-list');

//3.append the child to the parent
playersList.appendChild(newChild);