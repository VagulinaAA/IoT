var writers = [{
    name: "Достоевский Фёдор Михайлович",
    age: 18,
    size: 178,
    weight: 77,
    distance: 12,
    tquantity: 3,
    time: 120,
    avepulse: 74
},{
    name: "Пушкин Александр Сергеевич",
    age: 19,
    size: 180,
    weight: 87,
    distance: 12,
    tquantity: 3,
    time: 120,
    avepulse: 74
},{
    name: "Набоков Владимир Владимирович",
    age: 38,
    size: 168,
    weight: 64,
    distance: 12,
    tquantity: 3,
    time: 120,
    avepulse: 74
},{
    name: "Пелевин Виктор Олегович",
    age: 23,
    size: 182,
    weight: 72,
    distance: 12,
    tquantity: 3,
    time: 120,
    avepulse: 74
},{
    name: "Гоголь Николай Васильевич",
    age: 34,
    size: 179,
    weight: 78,
    distance: 12,
    tquantity: 3,
    time: 120,
    avepulse: 74
},{
    name: "Булгаков Михаил Афанасьевич",
    age: 29,
    size: 183,
    weight: 85,
    distance: 12,
    tquantity: 3,
    time: 120,
    avepulse: 74
},{
    name: "Чехов Антон Павлович",
    age: 41,
    size: 188,
    weight: 89,
    distance: 12,
    tquantity: 3,
    time: 120,
    avepulse: 74
}];

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
        document.getElementById("sign-in-error").classList.remove("search-hide");
    }
}
function f_sign_up(){
    document.location.replace("sign_up.html");
}
function f_back_to_sign_in(){
    document.location.replace("sign_in.html");
}
function f_sportsman_click() {
    document.addEventListener('click',function(e){
        for(element of document.getElementsByClassName("list-group")[0].children){
             element.classList.remove("active");
         };
        e.target.classList.add("active");
        let splitted = e.target.id.split("_");
        var number = splitted[1];
        console.log(writers[number-1].name);
        document.getElementById("s_name").textContent = writers[number-1].name;
        document.getElementById("s_age").textContent = writers[number-1].age;
        document.getElementById("s_size").textContent = writers[number-1].size;
        document.getElementById("s_weight").textContent = writers[number-1].weight;
        var sname = writers[number-1].name;
        localStorage.setItem('objectToPass1', sname);
        var sdist = writers[number-1].distance;
        localStorage.setItem('objectToPass2', sdist);
        var stquant = writers[number-1].tquantity;
        localStorage.setItem('objectToPass3', stquant);
        var stime = writers[number-1].time;
        localStorage.setItem('objectToPass4', stime);
        var savepulse = writers[number-1].avepulse;
        localStorage.setItem('objectToPass5', savepulse);
    });
}
function f_achievements_click(){
    document.location.replace("achievements.html");
}
function f_achievements_back_click(){
    document.location.replace("choose_sportsman.html");
}
function f_ach_loader(){
    var sname = localStorage['objectToPass1'];
    localStorage.removeItem('objectToPass1');
    document.getElementById("s_name").textContent = sname;
    var sdist = localStorage['objectToPass2'];
    localStorage.removeItem('objectToPass2');
    document.getElementById("s_dist").textContent = sdist;
    var stquant = localStorage['objectToPass3'];
    localStorage.removeItem('objectToPass3');
    document.getElementById("s_tquant").textContent = stquant;
    var stime = localStorage['objectToPass4'];
    localStorage.removeItem('objectToPass4');
    document.getElementById("s_time").textContent = stime;
    var savepulse = localStorage['objectToPass5'];
    localStorage.removeItem('objectToPass5');
    document.getElementById("s_pulseave").textContent = savepulse;
}
function f_sportsman_search(){
    let search_text = document.getElementById("search").value;
    let search_variants = document.querySelectorAll(".list-group li");
    let names_array = [];
    for(let v of search_variants){
        let v_name = v.innerHTML;
        names_array.push(v_name);
    }
    console.log(names_array);
    for(let i = 0; i < names_array.length; i++){
        if (names_array[i].includes(search_text) == true){
            search_variants[i].classList.remove("search-hide");
        }
        else{
            search_variants[i].classList.add("search-hide");
        }
    }
}
function f_back_to_choose_sportsman(){
    document.location.replace("choose_sportsman.html");
}
function f_add_sportsman(){
    document.location.replace("add_sportsman.html");
}

