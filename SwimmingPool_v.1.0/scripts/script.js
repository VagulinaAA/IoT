function f_log_in(){
    document.location.replace("https://yandex.ru/");
}
document.querySelector("#button-start").addEventListener('click', function(){f_log_in()});


var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () { 
  myInput.focus()
})