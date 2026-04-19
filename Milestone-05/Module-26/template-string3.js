
const firstName = 'Kamruzzaman';
const lastName = 'Shuvo';
const fullName2 = `${firstName} ${lastName}`

const aboutMe = ` My name is ${firstName} `;
const giveMe = `give me money ${(10+20)*2+500}`
console.log(fullName2);



function getCardHTM(name,description,price) {
          const div =`
<div class="card">
          <h2>${name.toUpperCase()}</h2>
          <p>Price: ${price}</p>
          <p>${description}</p>
</div>
          `
          console.log(div);
}
getCardHTM('iPhone 12', 'This is the lastest iPhone model',999)
