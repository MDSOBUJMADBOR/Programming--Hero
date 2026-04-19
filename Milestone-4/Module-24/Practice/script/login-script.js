


document.getElementById('btn-login').addEventListener('click',function(){
          const loginNumber = document.getElementById('login-number');
          const contactNumber = loginNumber.value;
          
          const btnPassword = document.getElementById('btn-password');
          const passwordNumber = btnPassword.value;
         
          if(contactNumber == '01234567890' && passwordNumber == '1234'){
                    alert('Login Success');
          window.location.assign('home.html');
          }
          else{
                    alert('Login Faild');
                    return;
          }
})

