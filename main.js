const $emailInput = document.querySelector(".input--email");
const $passwordInput = document.querySelector(".input--password");
const $textarea = document.querySelector(".textarea");
const $submit = document.querySelector(".btn");

const regExEmail = /^(([^<>()\[\]\\.,:\s@"]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const regExPassword = /(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.{8,}$/;


$submit.addEventListener("click" , () => {
    
    if(regExEmail.test($emailInput.value) === true  ){
        $emailInput.style.border = "2px solid green";
    } else {
       $emailInput.style.border = "2px solid red";
    }

    if(regExPassword.test($passwordInput.value) === true) {
        $passwordInput.style.border = "2px solid green";
    } else {
        $passwordInput.style.border = "2px solid red";
    }

    if($textarea.value.length <= 10) {
        $textarea.style.border = "2px solid red";
    } else {
        $textarea.style.border = "2px solid green";
    }
    
})

// mayuscula, minuscula, numero, speacil caracter