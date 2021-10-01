function f_log_in(){
    document.location.replace("sign_in.html");
}
function f_sign_in(){
    let login = document.querySelector("#login").value;
    let password = document.querySelector("#password").value;
    let sys_login = "admin";
    let sys_password = "admin";
    if (login == sys_login && password == sys_password){
        console.log("Right!");
        document.location.replace("choose_sportsman.html");
    }
    else{
        console.log("Wrong!");
    }
}
function f_sign_up(){
    document.location.replace("sign_up.html");
}
function f_back_to_sign_in(){
    document.location.replace("sign_in.html");
}