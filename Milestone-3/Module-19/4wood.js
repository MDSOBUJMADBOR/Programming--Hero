

function woodQuantity(chairQuantity,tableQuantity,bedQuantity){
          const perChairWood=3;
          const perTableWood=10;
          const perBedWood=50;

          const chairTotalWood=chairQuantity*perChairWood;
          const tabelTotalWood=tableQuantity*perTableWood;
          const bedTotalWood=bedQuantity*perBedWood;

          const totalWood= chairTotalWood + tabelTotalWood + bedTotalWood;

          return totalWood;

}
const wood=woodQuantity(1,1,4);
console.log('wood needed',wood);

