window.addEventListener("load" , function () {

    const $darkModeLight = document.querySelector(".darkMode__light");
    const $darkModeDark = document.querySelector(".darkMode__dark");

    const $body = document.body;
    const $title = document.querySelector(".title");
    const $darkModeSpan = document.querySelector(".darkMode__span");

    const $labelEmail = document.querySelector(".label--email");
    const $labelPassword = document.querySelector(".label--password");
    const $labelTextarea = document.querySelector(".label--textarea");

    const $smallText = document.querySelector(".small-text");
    const $smallTextLast = document.querySelector(".small-textLast");

    const $emailInput = document.querySelector(".input--email");
    const $passwordInput = document.querySelector(".input--password");
    const $textarea = document.querySelector(".textarea");
    const $submit = document.querySelector(".btn");

const regExEmail = /^(([^<>()\[\]\\.,:\s@"]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const regExPassword = /(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.{8,}$/;

const functionDarkMode = function() {
    $darkModeDark.addEventListener("click" , () => {
        // BackgroundColor
        $body.style.backgroundColor = ("#0D1317");
        // Color
        $title.style.color = "#fff";
        $darkModeLight.style.color = "#fff";
        $darkModeDark.style.color = "#fff";

        $darkModeSpan.style.color = "#fff";
        $labelEmail.style.color = "#fff";
        $labelPassword.style.color = "#fff"; 
        $labelTextarea.style.color = "#fff"; 
        $smallText.style.color = "#fff";
        $smallTextLast.style.color = "#fff";

    })

    $darkModeLight.addEventListener("click" , () => {
        // BackgroundColor
        $body.style.backgroundColor = ("#fff");
        // Color
        $title.style.color = "#0D1317";
        $darkModeLight.style.color = "#0D1317";
        $darkModeDark.style.color = "#0D1317";

        $darkModeSpan.style.color = "#0D1317";
        $labelEmail.style.color = "#0D1317";
        $labelPassword.style.color = "#0D1317"; 
        $labelTextarea.style.color = "#0D1317"; 
        $smallText.style.color = "#0D1317";
        $smallTextLast.style.color = "#0D1317";

    })
}
functionDarkMode();

$submit.addEventListener("click" , () => {

    if(regExEmail.test($emailInput.value) === true  ) {
        $emailInput.style.border = "1px solid #d6d7d7";
    } else {
        $emailInput.style.border = "2px solid red";
    }

    if(regExPassword.test($passwordInput.value) === true) {
        $passwordInput.style.border = "1px solid #d6d7d7";
    } else {
        $passwordInput.style.border = "2px solid red";
    }

    if($textarea.value.length >= 9 ) {
        $textarea.style.border = "1px solid #d6d7d7";
    } else {
        $textarea.style.border = "2px solid red";  
    }

    if(regExEmail.test($emailInput.value) === true && regExPassword.test($passwordInput.value) === true && $textarea.value.length >= 9 ) {
        alert("El formulario se ha completado correctamente");
        $emailInput.value = "";
        $passwordInput.value = "";
        $textarea.value = "";

    } else {
      alert("El formulario NO se ha completado. Por favor, complete todo los inputs con borde rojo.");

   }
})

}) 
