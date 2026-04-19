
console.log('add money')

document.getElementById('add-money-btn').addEventListener('click',function(){
         //1-bank account get
         const bankAccount = getValueFrom('add-money-bank');
         if(bankAccount == 'Select a Bank'){
          alert('Please select a bank');
          return;
         }
         //2-get bank account number
         const accno = getValueFrom('add-money-number');
         if(accno.length !== 11){
          alert('invalid account number');
          return;
         }
         //3 -get ammount
         const amount = getValueFrom('add-money-amount');
         const currentBalance = getBalance();
         const newBalance = currentBalance + Number(amount);

        const pin = getValueFrom('add-money-pin');
        if(pin == '1234'){
          alert(`Add Money Success from 
          ${bankAccount} 
          at ${new Date()}`);
          setBalance(newBalance);
          //1- history-container ke shore niye ashbo
          const history = document.getElementById('history-container');

          //2- new div create kirbo
          const newHistory = document.createElement('div');
          //3-new div innerHTML add korbo
          newHistory.innerHTML = `
          <div class="transaction-card p-5 bg-base-100">
        Add money from ${bankAccount} , acc-no ${accno} at ${new Date()}                  
                    </div>
          `
          //4-history container e newDiv append korbo
          history.append(newHistory);
        }else{
          alert('Invalid Pin');
          return;
        }
})

