const Form = document.getElementById("form");
const Name = document.getElementById("name");
const Email = document.getElementById("email");
const Phone = document.getElementById("phone");
const Message = document.getElementById("message");

function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    const small = formControl.querySelector("small");
    small.innerText = message; 
}

function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

function emailValidation(email){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function checkEmail(){
    if(Email.value == ""){
        showError(Email, "Email is required");
    }
    else if(!emailValidation(Email.value)){
        showError(Email, "Email is not valid");
    }
    else{
        showSuccess(Email);
    }
}

function checkName(){
    if(Name.value == ""){
        showError(Name, "Name is required");
    }
    else{
        showSuccess(Name);
    }
}
function checkPhone(){
    if(Phone.value == ""){
        showError(Phone, "Phone number is required");
    }
    else{
        showSuccess(Phone);
    }
}
function checkMessage(){
    if(Message.value == ""){
        showError(Message, "Message is required");
    }
    else{
        showSuccess(Message);
    }
}

form.addEventListener("submit", function(e){

    e.preventDefault();

    checkEmail();
    checkName();
    checkPhone();
    checkMessage();
});
