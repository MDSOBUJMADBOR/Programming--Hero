document.getElementById('cashout-btn').addEventListener('click',function(){
 //1- get the agent number & validate
 const cashoutNumber = getValueFrom('cashout-number');
if(cashoutNumber.length !== 11){
  alert('invalid number');
  return;
}
 //2- get the amount
 const cashoutAmount = getValueFrom('cashout-amount');

 //3- get the Current Balance , validate , convert to Number
  const currentBalance = getBalance();
        

    //4 calculate Balance
const newBalance = currentBalance - Number(cashoutAmount);
console.log(newBalance);
if(newBalance < 0){
  alert('invalid Amount');
  return;
}
//5- Get the pin and verify
const pin = getValueFrom('cashout-pin');
if(pin === '1234'){
  alert('Cashout successfully');
  setBalance(newBalance);
//1- history-container ke shore niye ashbo
          const history = document.getElementById('history-container');

          //2- new div create kirbo
          const newHistory = document.createElement('div');
          //3-new div innerHTML add korbo
          newHistory.innerHTML = `
          <div class="transaction-card p-5 bg-base-100">
        Cashout ${cashoutAmount} TAKA success to ${cashoutNumber} ,  at ${new Date()}                  
                    </div>
          `
          //4-history container e newDiv append korbo
          history.append(newHistory);
}else{
   alert('invalid pin');
  return;
}

});




// document.getElementById('cashout-btn').addEventListener('click',function(){
//           //1- get the agent number & validate
//        const cashoutNumberInput = document.getElementById('cashout-number');
//        const cashoutNumber = cashoutNumberInput.value;
//        console.log(cashoutNumber)
//           //2- get the amount , validate , convert to Number
//           const cashoutAmountInput = document.getElementById('cashout-amount');
//           const cashoutAmount = cashoutAmountInput.value;
//           console.log(cashoutAmount);
//           if(cashoutNumber.length !== 11){
//             alert('Invalid Agent Number');
//             return;
//           }

//           //3- get the Current Balance , validate , convert to Number
//          const balanceElement = document.getElementById('balance');
//          const balance = balanceElement.innerText;
//          console.log(balance)
//           //4- Calculate new Balance 
//           const newBalance = Number(balance) - Number(cashoutAmount);
          
//           if(newBalance < 0){
//              alert('Invalid Amound');
//              return;
//             }
            
//           //5- Get the pin and verify
//           const cashoutPinInput = document.getElementById('cashout-pin');
//           const pin = cashoutPinInput.value;
//           if(pin === '1234'){
//              //5.1 - true:: show an alert > set Balance
//                alert('cashout successfully');
//                console.log('newbalance',newBalance);
//                balanceElement.innerText = newBalance;
//           }else{

//                alert('invalid pin');
//                return;
//              //5.2 - false:: show an error alert > set return
//           }
          
// });