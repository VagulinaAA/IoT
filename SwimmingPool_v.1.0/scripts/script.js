var trainings = [{
    name: "Кардио-рывок",
    row_1:{
        time: 5,
        pulsemax: 80,
        pulsemin: 72
    },
    row_2:{
        time: 10,
        pulsemax: 100,
        pulsemin: 75
    }
},{
    name: "Кардио-релакс",
    row_1:{
        time: 5,
        pulsemax: 79,
        pulsemin: 71
    },
    row_2:{
        time: 10,
        pulsemax: 110,
        pulsemin: 70
    }
},{
    name: "Восстановление",
    row_1:{
        time: 5,
        pulsemax: 75,
        pulsemin: 70
    },
    row_2:{
        time: 10,
        pulsemax: 80,
        pulsemin: 70
    }
},{
    name: "Моя тренировка 1",
    row_1:{
        time: 5,
        pulsemax: 80,
        pulsemin: 72
    },
    row_2:{
        time: 10,
        pulsemax: 100,
        pulsemin: 75
    }
},{
    name: "Моя тренировка 2",
    row_1:{
        time: 5,
        pulsemax: 80,
        pulsemin: 72
    },
    row_2:{
        time: 10,
        pulsemax: 100,
        pulsemin: 75
    }
},{
    name: "Моя тренировка 3",
    row_1:{
        time: 5,
        pulsemax: 80,
        pulsemin: 72
    },
    row_2:{
        time: 10,
        pulsemax: 100,
        pulsemin: 75
    }
},{
    name: "Моя тренировка 4",
    row_1:{
        time: 5,
        pulsemax: 80,
        pulsemin: 72
    },
    row_2:{
        time: 10,
        pulsemax: 100,
        pulsemin: 75
    }
}]

var writers = [{
    name: "Достоевский Фёдор Михайлович",
    age: 18,
    size: 178,
    weight: 77,
    distance: 12,
    tquantity: 3,
    time: 120,
    avepulse: 74,
    train_1: {
        date: "19/02/2021",
        pulsemax: 102,
        pulsemin: 71,
        distance: 3
    },
    train_2: {
        date: "25/11/2021",
        pulsemax: 130,
        pulsemin: 79,
        distance: 7
    }
},{
    name: "Пушкин Александр Сергеевич",
    age: 19,
    size: 180,
    weight: 87,
    distance: 12,
    tquantity: 3,
    time: 120,
    avepulse: 74,
    train_1: {
        date: "19/02/2021",
        pulsemax: 102,
        pulsemin: 71,
        distance: 3
    },
    train_2: {
        date: "25/11/2021",
        pulsemax: 130,
        pulsemin: 79,
        distance: 7
    }
},{
    name: "Набоков Владимир Владимирович",
    age: 38,
    size: 168,
    weight: 64,
    distance: 12,
    tquantity: 3,
    time: 120,
    avepulse: 74,
    train_1: {
        date: "19/02/2021",
        pulsemax: 102,
        pulsemin: 71,
        distance: 3
    },
    train_2: {
        date: "25/11/2021",
        pulsemax: 130,
        pulsemin: 79,
        distance: 7
    }
},{
    name: "Пелевин Виктор Олегович",
    age: 23,
    size: 182,
    weight: 72,
    distance: 12,
    tquantity: 3,
    time: 120,
    avepulse: 74,
    train_1: {
        date: "19/02/2021",
        pulsemax: 102,
        pulsemin: 71,
        distance: 3
    },
    train_2: {
        date: "25/11/2021",
        pulsemax: 130,
        pulsemin: 79,
        distance: 7
    }
},{
    name: "Гоголь Николай Васильевич",
    age: 34,
    size: 179,
    weight: 78,
    distance: 12,
    tquantity: 3,
    time: 120,
    avepulse: 74,
    train_1: {
        date: "19/02/2021",
        pulsemax: 102,
        pulsemin: 71,
        distance: 3
    },
    train_2: {
        date: "25/11/2021",
        pulsemax: 130,
        pulsemin: 79,
        distance: 7
    }
},{
    name: "Булгаков Михаил Афанасьевич",
    age: 29,
    size: 183,
    weight: 85,
    distance: 12,
    tquantity: 3,
    time: 120,
    avepulse: 74,
    train_1: {
        date: "19/02/2021",
        pulsemax: 102,
        pulsemin: 71,
        distance: 3
    },
    train_2: {
        date: "25/11/2021",
        pulsemax: 130,
        pulsemin: 79,
        distance: 7
    }
},{
    name: "Чехов Антон Павлович",
    age: 41,
    size: 188,
    weight: 89,
    distance: 12,
    tquantity: 3,
    time: 120,
    avepulse: 74,
    train_1: {
        date: "19/02/2021",
        pulsemax: 102,
        pulsemin: 71,
        distance: 3
    },
    train_2: {
        date: "25/11/2021",
        pulsemax: 130,
        pulsemin: 79,
        distance: 7
    }
}];

// Start-training-window functions start

// var myModal = document.getElementById('myModal')
// var myInput = document.getElementById('myInput')

// myModal.addEventListener('shown.bs.modal', function () { 
//   myInput.focus()
// })

var cron;
var pulse = 0;
var speed = 1;
var flag = 0;

var minute = 0;
var second = 0;

var maxPulse = 0;
var minPulse = 120;
var totalTime;
var totalDist = 0;

function start(minute, second) {
    pause(cron);
    cron = setInterval(() => {
        if (second == 60) {
            second = 0;
            minute++;
        }
        second++;
        document.getElementById('timer-minutes').innerText = returnData(minute);
        document.getElementById('timer-seconds').innerText = ":" + returnData(second);

        pulse = Math.round(65 + Math.random() * 10);
        document.getElementById('pulse').innerHTML = pulse;
        if (pulse > maxPulse)
            maxPulse = pulse;
        if (pulse < minPulse)
            minPulse = pulse;
        // speed = Math.round(speed + Math.random() * 0.5 - 0.25, 2);
        document.getElementById('speed').innerHTML = speed;

        totalTime = returnData(minute) + ":" + returnData(second);
        totalDist = totalDist + speed / 3600 * 1000;
    }, 1000);
}
function pause(cron) {
    clearInterval(cron);
}
function reset() {
    clearInterval(cron);
    document.getElementById('timer-minutes').innerText = '00';
    document.getElementById('timer-seconds').innerText = ':00';

    pulse = 0;
    document.getElementById('pulse').innerHTML = pulse;
    speed = 1;
    document.getElementById('speed').innerHTML = speed;
    flag = 0;
}

function returnData(input) {
    return input > 9 ? input : `0${input}`
}

window.onload = function() {
    console.log("LOADED");
    var updateInterval = 1000; //in ms
    var numberElements = 15;

    var updateCount = 0;

    var chartPulse = $("#chartPulse");
    var chartSpeed = $("#chartSpeed");

    var commonOptions = {
        scales: {
          xAxes: [{
            type: 'time',
            time: {
              displayFormats: {
                second: 'mm:ss'
              }
            }
          }],
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        },
        legend: {display: false},
        tooltips:{
          enabled: false
        }
    };

    var chartPInstance = new Chart(chartPulse, {
        type: 'line',
        data: {
          datasets: [{
              label: "X Acceleration",
              data: 0,
              fill: false,
              borderColor: '#343e9a',
              borderWidth: 1
          }]
        },
        options: Object.assign({}, commonOptions, {
          title:{
            display: true,
            fontSize: 18
          }
        })
    });

    var chartSInstance = new Chart(chartSpeed, {
        type: 'line',
        data: {
          datasets: [{
              label: "X Acceleration",
              data: 0,
              fill: false,
              borderColor: '#343e9a',
              borderWidth: 1
          }]
        },
        options: Object.assign({}, commonOptions, {
          title:{
            display: true,
            fontSize: 18
          }
        })
    });

    function addData(data) {
        if (data) {
            chartPInstance.data.labels.push(new Date());
            chartPInstance.data.datasets.forEach((dataset) =>{dataset.data.push(pulse)});
            chartSInstance.data.labels.push(new Date());
            chartSInstance.data.datasets.forEach((dataset) =>{dataset.data.push(speed)});
            if (updateCount > numberElements) {
                chartPInstance.data.labels.shift();
                chartPInstance.data.datasets[0].data.shift();
                chartSInstance.data.labels.shift();
                chartSInstance.data.datasets[0].data.shift();
            }
            else updateCount++;
            chartPInstance.update();
            chartSInstance.update();
        }
    }

    function updateData() {
        console.log("Update Data");
        setTimeout(updateData, updateInterval);
        addData(1);
    }
    updateData();
}

function plusClick() {
    speed = speed + 0.05;
    speed = +speed.toFixed(2);
}

function minusClick() {
    speed = speed - 0.05;
    speed = +speed.toFixed(2);
}

function startOnClick() {
  document.getElementById("btnStart").classList.add("d-none");
  document.getElementById("btnStop").classList.remove("d-none");

  var plusBtn = document.getElementById("speedIncrease");
  var minusBtn = document.getElementById("speedDecrease");

  plusBtn.classList.add("btn-primary");
  minusBtn.classList.add("btn-primary");

  plusBtn.classList.remove("btn-secondary", "disabled");
  minusBtn.classList.remove("btn-secondary", "disabled");
  totalDist = 0;
  
  start(minute, second);
}

function stopOnClick() {
  document.getElementById("btnStart").classList.remove("d-none");
  document.getElementById("btnStop").classList.add("d-none");

  var plusBtn = document.getElementById("speedIncrease");
  var minusBtn = document.getElementById("speedDecrease");

  plusBtn.classList.remove("btn-primary");
  minusBtn.classList.remove("btn-primary");

  plusBtn.classList.add("btn-secondary", "disabled");
  minusBtn.classList.add("btn-secondary", "disabled");
  totalDist = +totalDist.toFixed(2);
  console.log(totalDist);
  reset();
}

function showResults() {
    document.getElementById("totalDist").innerHTML = +totalDist.toFixed(2);
    document.getElementById("totalTime").innerHTML = totalTime;
    document.getElementById("minPulse").innerHTML = minPulse;
    document.getElementById("maxPulse").innerHTML = maxPulse;
}

function saveOnClick() {
    console.log("save");
    stopOnClick();
}


// Start-training-window functions finish

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

        var train_1_date = writers[number-1].train_1.date;
        localStorage.setItem('objectToPass6', train_1_date);
        var train_1_pmax = writers[number-1].train_1.pulsemax;
        localStorage.setItem('objectToPass7', train_1_pmax);
        var train_1_pmin = writers[number-1].train_1.pulsemin;
        localStorage.setItem('objectToPass8', train_1_pmin);
        var train_1_dist = writers[number-1].train_1.distance;
        localStorage.setItem('objectToPass9', train_1_dist);

        var train_2_date = writers[number-1].train_2.date;
        localStorage.setItem('objectToPass10', train_2_date);
        var train_2_pmax = writers[number-1].train_2.pulsemax;
        localStorage.setItem('objectToPass11', train_2_pmax);
        var train_2_pmin = writers[number-1].train_2.pulsemin;
        localStorage.setItem('objectToPass12', train_2_pmin);
        var train_2_dist = writers[number-1].train_2.distance;
        localStorage.setItem('objectToPass13', train_2_dist);
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
function f_history_click(){
    document.location.replace("history.html");
}
function f_history_back_click(){
    document.location.replace("choose_sportsman.html");
}
function f_history_loader(){
    var sname = localStorage['objectToPass1'];
    localStorage.removeItem('objectToPass1');
    document.getElementById("s_name").textContent = sname;
    var train_1_date = localStorage['objectToPass6'];
    localStorage.removeItem('objectToPass6');
    document.getElementById("history_date").textContent = train_1_date;
    var train_1_pmax = localStorage['objectToPass7'];
    localStorage.removeItem('objectToPass7');
    document.getElementById("history_pulse_max").textContent = train_1_pmax;
    var train_1_pmin = localStorage['objectToPass8'];
    localStorage.removeItem('objectToPass8');
    document.getElementById("history_pulse_min").textContent = train_1_pmin;
    var train_1_dist = localStorage['objectToPass9'];
    localStorage.removeItem('objectToPass9');
    document.getElementById("history_distance").textContent = train_1_dist;

    var train_2_date = localStorage['objectToPass10'];
    localStorage.removeItem('objectToPass10');
    document.getElementById("history_date_2").textContent = train_2_date;
    var train_2_pmax = localStorage['objectToPass11'];
    localStorage.removeItem('objectToPass11');
    document.getElementById("history_pulse_max_2").textContent = train_2_pmax;
    var train_2_pmin = localStorage['objectToPass12'];
    localStorage.removeItem('objectToPass12');
    document.getElementById("history_pulse_min_2").textContent = train_2_pmin;
    var train_2_dist = localStorage['objectToPass13'];
    localStorage.removeItem('objectToPass13');
    document.getElementById("history_distance_2").textContent = train_2_dist;
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
function f_choose_training(){
    document.location.replace("choose_training.html");
}
function f_training_click() {
    document.addEventListener('click',function(e){
        for(element of document.getElementsByClassName("list-group")[0].children){
             element.classList.remove("active");
         };
        e.target.classList.add("active");
        let splitted = e.target.id.split("_");
        var number = splitted[1];
        document.getElementById("t_name").textContent = trainings[number-1].name;
        document.getElementById("time").textContent = trainings[number-1].row_1.time;
        document.getElementById("pmax").textContent = trainings[number-1].row_1.pulsemax;
        document.getElementById("pmin").textContent = trainings[number-1].row_1.pulsemin;

        document.getElementById("time_2").textContent = trainings[number-1].row_2.time;
        document.getElementById("pmax_2").textContent = trainings[number-1].row_2.pulsemax;
        document.getElementById("pmin_2").textContent = trainings[number-1].row_2.pulsemin;
    });
}
function f_add_training(){
    document.location.replace("add_training.html");
}
function f_to_start(){
    document.location.replace("./src/start.html");
}
function f_back_to_choose_training(){
    document.location.replace("choose_training.html");
}
function f_edit_training(){
    var parent_time = document.getElementById("time_add");
    var input_time = document.createElement("input");
    input_time.setAttribute('type', 'text');
    input_time.setAttribute('placeholder', 'Время');
    input_time.setAttribute('class', 'edit-input form-control');
    parent_time.appendChild(input_time); 

    var parent_pmax = document.getElementById("pmax_add");
    var input_pmax = document.createElement("input");
    input_pmax.setAttribute('type', 'text');
    input_pmax.setAttribute('placeholder', 'Пульс(max)');
    input_pmax.setAttribute('class', 'edit-input form-control');
    parent_pmax.appendChild(input_pmax); 

    var parent_pmin = document.getElementById("pmin_add");
    var input_pmin = document.createElement("input");
    input_pmin.setAttribute('type', 'text');
    input_pmin.setAttribute('placeholder', 'Пульс(min)');
    input_pmin.setAttribute('class', 'edit-input form-control');
    parent_pmin.appendChild(input_pmin); 

    var parent_ok = document.getElementById("ok");
    var btn_ok = document.createElement("button");
    btn_ok.innerHTML = "Добавить";
    btn_ok.setAttribute('class', 'edit-btn');
    parent_ok.appendChild(btn_ok);
}
