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
    }
    else{
        console.log("Wrong!");
    }
}