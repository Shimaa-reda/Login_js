// html elements
var userName=document.getElementById("userName");
var userEmail=document.getElementById("userEmail");
var userPassword=document.getElementById("userPassword");
var registerBtn=document.getElementById("registerBtn");
var errorInputs=document.querySelector('.error');
// var errormsg=document.querySelector('.errormsg');
var form = document.querySelector('form');

var usersList=[];

var nameRegex = /^\w{3,}(\s+\w+)*$/;
var emailRegex=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
var passwordRegex=/^[A-Z](?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{3,8}$/




if(localStorage.getItem('usersList')){
  usersList=JSON.parse(localStorage.getItem('usersList'));
  console.log(usersList);
}


// variables

// functions
function register(e){
  e.preventDefault();
 
  if (!isEmpty()) {
    if (validate(nameRegex, userName) && validate(emailRegex, userEmail) && validate(passwordRegex, userPassword)) {
      if (!isExist()) {
        var user = {
          name: userName.value,
          email: userEmail.value,
          password: userPassword.value,
        };
      
        usersList.push(user);
        localStorage.setItem('usersList', JSON.stringify(usersList));
        clear();

        // Success Message
        errorInputs.classList.replace('d-none', 'd-block');
        errorInputs.innerHTML = "Success!";
        errorInputs.style.color = "green";

        console.log(usersList);
      }
    }
  } else {
    displayError('All Inputs are required');
    console.log("error");
  }
}

function isEmpty(){
  if(userName.value=='' ||userEmail.value==''||userPassword.value==''){
    displayError('All Inputs are required')
    return true;
  }
}
function isExist(){
  for(var i=0;i<usersList.length;i++){
    if(userEmail.value==usersList[i].email){
      displayError('Email is Already Exist');
      return true;
    }
  }
}
function displayError(message){
  errorInputs.classList.replace('d-none', 'd-block');
  errorInputs.innerHTML = message;
  errorInputs.style.color = "#dc3545"; // set color to red when error
}

function clear(){
  userEmail.value='';
  userName.value='';
  userPassword.value='';
  userName.classList.remove("is-valid", "is-invalid");

  userEmail.classList.remove("is-valid", "is-invalid");
  userPassword.classList.remove("is-valid", "is-invalid");
}

function validate(regex,userInput){
  if(regex.test(userInput.value)){
    userInput.classList.add("is-valid");
    userInput.classList.remove("is-invalid");
    userInput.nextElementSibling.classList.add("d-none");
    return true;
    // console.log("sa7");
  }
  else{
    // console.log("8lt");
    userInput.classList.remove("is-valid");
    userInput.classList.add("is-invalid");
    userInput.nextElementSibling.classList.remove("d-none");
    return false;

  }
  
}

// events
form.addEventListener('submit',register);


