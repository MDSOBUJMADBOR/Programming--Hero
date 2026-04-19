let thrivingList = [];
let strugglingList= []
let currentStatus ='all'


let total = document.getElementById('total');
let thrivingCount = document.getElementById('thrivingCount');
let strugglingCount = document.getElementById('strugglingCount');


const allFilterBtn = document.getElementById('all-filter-btn');
const thrivingFilterBtn = document.getElementById('thriving-filter-btn');
const strugglingFilterBtn = document.getElementById('struggling-filter-btn');



const allCardSection=document.getElementById('allCards');
const mainContainer = document.querySelector('main');
const filterSection=document.getElementById('Filtered-section')
// console.log(mainContainer.children);
// console.log(thrivingList.length);
function calculateCount() {
total.innerText = allCardSection.children.length;//3
thrivingCount.innerText = thrivingList.length;
strugglingCount.innerText = strugglingList.length;

};
calculateCount()


// step -1
function toggleStyle(id){

//adding gray bg for all
allFilterBtn.classList.add('bg-gray-300','text-black')
thrivingFilterBtn.classList.add('bg-gray-300','text-black')
strugglingFilterBtn.classList.add('bg-gray-300','text-black')

//if any button has black the remove
allFilterBtn.classList.remove('bg-black','text-white')
thrivingFilterBtn.classList.remove('bg-black','text-white')
strugglingFilterBtn.classList.remove('bg-black','text-white')


const selected=document.getElementById(id);
currentStatus =id
// console.log(currentStatus);

//adding black bg for current button
selected.classList.remove('bg-gray-300','text-black');
selected.classList.add('bg-black','text-white')

if(id == 'thriving-filter-btn'){
allCardSection.classList.add('hidden');
filterSection.classList.remove('hidden');
   renderThriving()
}
else if(id == 'all-filter-btn'){
     allCardSection.classList.remove('hidden')
     filterSection.classList.add('hidden')
}
else if (id == 'struggling-filter-btn'){
     allCardSection.classList.add('hidden')
     filterSection.classList.remove('hidden')
     renderStruggling()
}

}



// step-2 delegation
mainContainer.addEventListener('click', function (event) {
     
if(event.target.classList.contains('thriving-btn')){

     const parenNode =event.target.parentNode.parentNode  
     console.log(parenNode)

     const plantName=parenNode.querySelector('.plantName').innerText
     const light=parenNode.querySelector('.light').innerText
     const water=parenNode.querySelector('.water').innerText
     const notes=parenNode.querySelector('.notes').innerText
   parenNode.querySelector('.status').innerText = 'Thrive';

     const cardInfo = {
          plantName,
          light,
          water,
          status :'Thrive',
          notes
     }

     const platExist = thrivingList.find(item => item.plantName == cardInfo.plantName)
     if(!platExist){
          thrivingList.push(cardInfo)
     }
     renderThriving()
     //removing the plant from thriving list
     strugglingList = strugglingList.filter(item => item.plantName != cardInfo.plantName)
     // console.log(strugglingList)

     //after remove rerender the html
     if(currentStatus == 'struggling-filter-btn'){
        renderStruggling()
     }
     calculateCount()

}

else if(event.target.classList.contains('struggling-btn')){

     const parenNode =event.target.parentNode.parentNode  
     console.log(parenNode)

     const plantName=parenNode.querySelector('.plantName').innerText
     const light=parenNode.querySelector('.light').innerText
     const water=parenNode.querySelector('.water').innerText
     const notes=parenNode.querySelector('.notes').innerText
   parenNode.querySelector('.status').innerText = 'struggle';

     const cardInfo = {
          plantName,
          light,
          water,
          status :'struggle',
          notes
     }

     const platExist = strugglingList.find(item => item.plantName == cardInfo.plantName)
     if(!platExist){
          strugglingList.push(cardInfo)
     }
     renderStruggling()
     //removing the plant from thriving list
     thrivingList = thrivingList.filter(item => item.plantName != cardInfo.plantName)
     // console.log(strugglingList)

     //after remove rerender the html
     if(currentStatus == 'thriving-filter-btn'){
       renderThriving()
     }
     calculateCount()

}

})


//step-3 html file create
function renderThriving() {
     //make the filterSection empty every time
     filterSection.innerHTML = ''

     //crating innerHTML
     for(let thrive of thrivingList){
          // console.log(thrive)
// console.log(thrive)
          let div =document.createElement('div');
          div.className='card border border-black p-5'
          div.innerHTML=`
          <div class="flex justify-between">
                    <div class="right space-y-4">
                              <div>
                              <h1 class="plantName text-3xl">${thrive.plantName}</h1>
                              <p class="latinName">Latin Name</p>
                              </div>
                              <div class="flex gap-3">
                                        <p class="light bg-gray-200">Bright Indicate</p>
                                        <p class="water bg-gray-300">weekly</p>
                              </div>
                              <p class="status">${thrive.status}</p>
                              <p class="notes">New leaf unfurling by the east window</p>
                              <div>
                              <button class="thriving-btn bg-green-200 p-4">Thrive</button>
                              <button class="struggling-btn bg-red-200 p-4">Struggle</button>
                              </div>
                    </div>
                    <div class="left">
                              <button class="bg-red-200 p-3">Delete</button>
                    </div>
          </div>
          `
          filterSection.appendChild(div)
     }
}



function renderStruggling() {
     //make the filterSection empty every time
     filterSection.innerHTML = ''

     //crating innerHTML
     for(let struggle of strugglingList){
          // console.log(thrive)
// console.log(thrive)
          let div =document.createElement('div');
          div.className='card border border-black p-5'
          div.innerHTML=`
          <div class="flex justify-between">
                    <div class="right space-y-4">
                              <div>
                              <h1 class="plantName text-3xl">${struggle.plantName}</h1>
                              <p class="latinName">Latin Name</p>
                              </div>
                              <div class="flex gap-3">
                                        <p class="light bg-gray-200">Bright Indicate</p>
                                        <p class="water bg-gray-300">weekly</p>
                              </div>
                              <p class="status">${struggle.status}</p>
                              <p class="notes">New leaf unfurling by the east window</p>
                              <div>
                              <button class="thriving-btn bg-green-200 p-4">Thrive</button>
                              <button class="struggling-btn bg-red-200 p-4">Struggle</button>
                              </div>
                    </div>
                    <div class="left">
                              <button class="bg-red-200 p-3">Delete</button>
                    </div>
          </div>
          `
          filterSection.appendChild(div)
     }
}