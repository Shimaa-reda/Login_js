var userEmail=document.getElementById("userEmail");
var userPassword=document.getElementById("userPassword");
var loginBtn=document.getElementById("loginBtn");
var errorInputs=document.querySelector('.error');
// var errormsg=document.querySelector('.errormsg');
var usersList=[];
var emailRegex=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
var passwordRegex=/^[A-Z](?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{3,8}$/




if(localStorage.getItem('usersList')){
    usersList=JSON.parse(localStorage.getItem('usersList'));
    // console.log(usersList);
  }
 
loginBtn.addEventListener('click',login);

function login(){
    if(!isEmpty()){
        hideError();
        if(validate(emailRegex,userEmail)&&validate(passwordRegex,userPassword)){
            for(var i=0;i<usersList.length;i++){
                if(userEmail.value==usersList[i].email &&userPassword.value==usersList[i].password){
                    console.log("fol");
                    localStorage.setItem('userName',usersList[i].name);
                    window.location.replace('./home.html');
                   
                    return true;
                    
                }
                else{
                    displayError('Email or password is invalid');
                    console.log("laa");
                    
                }
            }
            
        }
        clear(); 
        
    }
    else{
        errorInputs.classList.replace('d-none','d-block');
        console.log("errror");
        
      }
     
    
   

    

}
function hideError() {
    errorInputs.classList.replace('d-block', 'd-none');
    errorInputs.innerHTML = '';
  }
  
function isEmpty(){
    if(userEmail.value==''||userPassword.value==''){
      displayError('All Inputs are required')
      return true;
    }
  }

  function displayError(message){
    errorInputs.classList.replace('d-none','d-block');
    errorInputs.innerHTML=message;
  }
  function clear() {
   
    userEmail.classList.remove("is-valid", "is-invalid");
    userPassword.classList.remove("is-valid", "is-invalid");
    // errormsg.classList.add("d-none");
  }
  
  function validate(regex,userInput){
    if(regex.test(userInput.value)){
      userInput.classList.add("is-valid");
      userInput.classList.remove("is-invalid");
    //   userInput.nextElementSibling.classList.add("d-none");
      return true;
      // console.log("sa7");
    }
    else{
      // console.log("8lt");
      userInput.classList.remove("is-valid");
      userInput.classList.add("is-invalid");
    //   userInput.nextElementSibling.classList.remove("d-none");
      return false;
  
    }
    
  }