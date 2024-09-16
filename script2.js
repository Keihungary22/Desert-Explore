let game_state = true;
stateCheck();
if(!game_state){
    start_screen.style.display = "none";
    game_screen.style.display = "block";
    loadGameState();
}

document.getElementById('player_number').addEventListener('change', function() {
    var playerNumber = this.value;
    for (var i = 2; i <= 4; i++) {
        if (i <= playerNumber) {
            document.getElementById('p' + i + '_p').style.display = 'block';
            document.getElementById('p' + i + '_i').style.display = 'block';
        } else {
            document.getElementById('p' + i + '_p').style.display = 'none';
            document.getElementById('p' + i + '_i').style.display = 'none';
        }
    }
});

const start_screen = document.querySelector("#home_screen");
const game_screen = document.querySelector("#gamescreen");
const win_screen = document.querySelector("#win");
const lose_screen = document.querySelector("#lose");
const start = document.querySelector("#start");
const win_button = document.querySelector("#win_button");
const lose_button = document.querySelector("#lose_button");
const win_comment = document.querySelector("#win_comment");
const lose_comment = document.querySelector("#lose_comment");

const pr1 = document.querySelector("#pr1");
const pr2 = document.querySelector("#pr2");
const pr3 = document.querySelector("#pr3");

const mt0 = document.querySelector("#mt0");
const mt1 = document.querySelector("#mt1");
const mt2 = document.querySelector("#mt2");
const mt3 = document.querySelector("#mt3");
const mt4 = document.querySelector("#mt4");
const mt5 = document.querySelector("#mt5");
const mt6 = document.querySelector("#mt6");
const mt7 = document.querySelector("#mt7");
const mt8 = document.querySelector("#mt8");
const mt9 = document.querySelector("#mt9");
const mt10 = document.querySelector("#mt10");
const mt11 = document.querySelector("#mt11");
const mt12 = document.querySelector("#mt12");
const mt13 = document.querySelector("#mt13");
const mt14 = document.querySelector("#mt14");
const mt15 = document.querySelector("#mt15");
const mt16 = document.querySelector("#mt16");
const mt17 = document.querySelector("#mt17");
const mt18 = document.querySelector("#mt18");
const mt19 = document.querySelector("#mt19");
const mt20 = document.querySelector("#mt20");
const mt21 = document.querySelector("#mt21");
const mt22 = document.querySelector("#mt22");
const mt23 = document.querySelector("#mt23");
const mt24 = document.querySelector("#mt24");
const matrix = [];
for (let i = 0; i < 5; i++) {
    matrix[i] = []; // Initialize inner arrays
}
matrix[0][0] = mt0;
matrix[0][1] = mt1;
matrix[0][2] = mt2;
matrix[0][3] = mt3;
matrix[0][4] = mt4;
matrix[1][0] = mt5;
matrix[1][1] = mt6;
matrix[1][2] = mt7;
matrix[1][3] = mt8;
matrix[1][4] = mt9;
matrix[2][0] = mt10;
matrix[2][1] = mt11;
matrix[2][2] = mt12;
matrix[2][3] = mt13;
matrix[2][4] = mt14;
matrix[3][0] = mt15;
matrix[3][1] = mt16;
matrix[3][2] = mt17;
matrix[3][3] = mt18;
matrix[3][4] = mt19;
matrix[4][0] = mt20;
matrix[4][1] = mt21;
matrix[4][2] = mt22;
matrix[4][3] = mt23;
matrix[4][4] = mt24;

const matrix2 = [];
for(let i = 0; i < 5; i++){
    matrix2[i] = [];
    for(let j = 0; j < 5; j++){
        matrix2[i][j] = "none";
    }
}


const oasis_pre1 = document.querySelector("#oasis_pre1");
const oasis_pre2 = document.querySelector("#oasis_pre2");
const oasis_pre3 = document.querySelector("#oasis_pre3");
const oasis_pre4 = document.querySelector("#oasis_pre4");
const oasis1 = document.querySelector("#oasis1");
const oasis2 = document.querySelector("#oasis2");
const oasis3 = document.querySelector("#oasis3");
const drought = document.querySelector("#drought");
const hole = document.querySelector("#hole");

const item1_clue_up = document.querySelector("#item1_clue_up");
const item1_clue_down = document.querySelector("#item1_clue_down");
const item1_clue_left = document.querySelector("#item1_clue_left");
const item1_clue_right = document.querySelector("#item1_clue_right");
const item2_clue_up = document.querySelector("#item2_clue_up");
const item2_clue_down = document.querySelector("#item2_clue_down");
const item2_clue_left = document.querySelector("#item2_clue_left");
const item2_clue_right = document.querySelector("#item2_clue_right");
const item3_clue_up = document.querySelector("#item3_clue_up");
const item3_clue_down = document.querySelector("#item3_clue_down");
const item3_clue_left = document.querySelector("#item3_clue_left");
const item3_clue_right = document.querySelector("#item3_clue_right");

const item1 = document.querySelector("#item1");
const item2 = document.querySelector("#item2");
const item3 = document.querySelector("#item3");


const urgu_name = document.querySelector("#urgu_name");
const remain_count = document.querySelector("#remain_count");
const upButton = document.querySelector("#up");
const downButton = document.querySelector("#down");
const leftButton = document.querySelector("#left");
const rightButton = document.querySelector("#right");
const digButton = document.querySelector("#dig");
const action_comfirm = document.querySelector("#action_comfirm");





const player = document.querySelector("#player");

const p1_info = document.querySelector("#p1_info");
const p2_info = document.querySelector("#p2_info");
const p3_info = document.querySelector("#p3_info");
const p4_info = document.querySelector("#p4_info");
const water_num_p1 = document.querySelector("#water_num_p1");
const action_num_p1 = document.querySelector("#action_num_p1");
const p1_turn = document.querySelector("#p1_turn");
const water_num_p2 = document.querySelector("#water_num_p2");
const action_num_p2 = document.querySelector("#action_num_p2");
const p2_turn = document.querySelector("#p2_turn");
const water_num_p3 = document.querySelector("#water_num_p3");
const action_num_p3 = document.querySelector("#action_num_p3");
const p3_turn = document.querySelector("#p3_turn");
const water_num_p4 = document.querySelector("#water_num_p4");
const action_num_p4 = document.querySelector("#action_num_p4");
const p4_turn = document.querySelector("#p4_turn");

var playerNumber;
var playerNames = [];
var waterNumber;
var timeNumber;

var playerTurn = [];
var playerColor = [];
var water_num = [];


let player_posiY = 2;
let player_posiX = 2;
let player_posi = matrix[player_posiY][player_posiX];
player.style.border =  "2px solid red";

let current_player = 0;
let current_color = playerColor[current_player];
let actionCnt = 3;




document.getElementById('start').addEventListener('click', function() {

    playerNumber = document.getElementById('player_number').value;
    for (let i = 1; i <= playerNumber; i++) {
        if(document.getElementById('p' + i + '_i').value === ''){
            playerNames.push(`Player ${i}`);
        }else{
            playerNames.push(document.getElementById('p' + i + '_i').value);
        }
        playerTurn.push(i);
        if(i === 1){
            playerColor.push("red");
        }
        if(i === 2){
            playerColor.push("blue");
        }
        if(i === 3){
            playerColor.push("green");
        }
        if(i === 4){
            playerColor.push("yellow");
        }
    }
    waterNumber = document.getElementById('water_number').value;
    timeNumber = document.getElementById('time_number').value;

    start_screen.style.display = 'none';
    game_screen.style.display = 'block';
    // document.getElementById('home_screen').style.display = 'none';
    // document.getElementById('gamescreen').style.display = 'block';

    for(let i = 1; i <= playerNumber; i++){
        water_num.push(waterNumber);
    }


    startCountdown();
    outputInformation();
    initPlayerinfo();
    oasis_set();
});

function outputInformation(){
    console.log('Player Number: ' + playerNumber);
    console.log('Player Names: ' + playerNames.join(', '));
    console.log('Water Number: ' + waterNumber);
    console.log('Time Number: ' + timeNumber);
    console.log(playerTurn);
    console.log(playerColor);
    console.log(water_num);
}

// About time function
let time;
let interval;
function startCountdown(){
    time = Math.floor(new Date().getTime() / 1000) + timeNumber * 60;
    //time = Math.floor(new Date().getTime() / 1000) + 1 * 60;
    
    updateCountdown();
    interval = setInterval(updateCountdown, 1000);
}
function updateCountdown(){
    const now = Math.floor(new Date().getTime() / 1000);
    const distance = time - now;
    const minutes = Math.floor(distance / 60);
    const seconds = Math.floor(distance % 60);
    const countdownElement = document.getElementById("countdown");
    countdownElement.innerHTML = ("0" + minutes).slice(-2) + ":" + ("0" + seconds).slice(-2);
    if(distance <= 0){
        clearInterval(interval);
        countdownElement.innerHTML = "00:00";
        onCountdownFinish();
    }
}

function onCountdownFinish() {
    game_state = true;
    game_screen.style.display = 'none';
    lose.style.display = 'block';
    lose_comment.innerText = "Time is up!";
}

function stopTime(){
    clearInterval(interval);
}


function initPlayerinfo(){
    const p1_name = document.querySelector("#p1_name");
    const p2_name = document.querySelector("#p2_name");
    const p3_name = document.querySelector("#p3_name");
    const p4_name = document.querySelector("#p4_name");

    if(playerNumber == 1){
        p1_name.innerText = `${playerNames[0]}`;
    }
    if(playerNumber == 2){
        p1_name.innerText = `${playerNames[0]}`;
        p2_name.innerText = `${playerNames[1]}`;
    }
    if(playerNumber == 3){
        p1_name.innerText = `${playerNames[0]}`;
        p2_name.innerText = `${playerNames[1]}`;
        p3_name.innerText = `${playerNames[2]}`;
    }
    if(playerNumber == 4){
        p1_name.innerText = `${playerNames[0]}`;
        p2_name.innerText = `${playerNames[1]}`;
        p3_name.innerText = `${playerNames[2]}`;
        p4_name.innerText = `${playerNames[3]}`;
    }
    water_num_p1.innerText = `${waterNumber}`;
    water_num_p2.innerText = `${waterNumber}`;
    water_num_p3.innerText = `${waterNumber}`;
    water_num_p4.innerText = `${waterNumber}`;

    if(playerNumber < 4){
        p4_info.hidden = true;
    }
    if(playerNumber < 3){
        p3_info.hidden = true;
    }
    if(playerNumber < 2){
        p2_info.hidden = true;
    }
}

function after_action(){
    actionCnt--;
    if(actionCnt === 0){
        actionCnt = 3;
        if(current_player === 0){
            water_num[current_player]--;
            water_num_p1.innerText = `${water_num[current_player]}`;
            action_num_p1.innerText = `${actionCnt}`;
            p1_turn.innerText = "Your turn!";
            p1_turn.innerText = "";
        }
        if(current_player === 1){
            water_num[current_player]--;
            water_num_p2.innerText = `${water_num[current_player]}`;
            action_num_p2.innerText = `${actionCnt}`;
            p2_turn.innerText = "Your turn!";
            p2_turn.innerText = "";
        }
        if(current_player === 2){
            water_num[current_player]--;
            water_num_p3.innerText = `${water_num[current_player]}`;
            action_num_p3.innerText = `${actionCnt}`;
            p3_turn.innerText = "Your turn!";
            p3_turn.innerText = "";
        }
        if(current_player === 3){
            water_num[current_player]--;
            water_num_p4.innerText = `${water_num[current_player]}`;
            action_num_p4.innerText = `${actionCnt}`;
            p4_turn.innerText = "Your turn!";
            p4_turn.innerText = "";
        }

        current_player++;
        if(current_player >= playerNumber){
            current_player = 0;
        }
        if(current_player === 0){
            urgu_name.innerText = `${playerNames[0]}.`;
            p1_turn.innerText = "Your turn!";
        }
        if(current_player === 1){
            urgu_name.innerText = `${playerNames[1]}.`;
            p2_turn.innerText = "Your turn!";
        }
        if(current_player === 2){
            urgu_name.innerText = `${playerNames[2]}.`;
            p3_turn.innerText = "Your turn!";
        }
        if(current_player === 3){
            urgu_name.innerText = `${playerNames[3]}.`;
            p4_turn.innerText = "Your turn!";
        }
        current_color = playerColor[current_player];
        player.style.border = `2px solid ${current_color}`;
        //next_player();
    }else{
        if(current_player === 0){
            action_num_p1.innerText = `${actionCnt}`;
            p1_turn.innerText = "Your turn!";
            urgu_name.innerText = `${playerNames[0]}.`;
        }
        if(current_player === 1){
            action_num_p2.innerText = `${actionCnt}`;
            p2_turn.innerText = "Your turn!";
            urgu_name.innerText = `${playerNames[1]}.`;
        }
        if(current_player === 2){
            action_num_p3.innerText = `${actionCnt}`;
            p3_turn.innerText = "Your turn!";
            urgu_name.innerText = `${playerNames[2]}.`;
        }
        if(current_player === 3){
            action_num_p4.innerText = `${actionCnt}`;
            p4_turn.innerText = "Your turn!";
            urgu_name.innerText = `${playerNames[3]}.`;
        }    
    }
    remain_count.innerText = `Remaining times: ${actionCnt}`;
    checkWater();
    saveGameState();
}

function checkWater(){
    let check = false;
    let index = 0;
    for(let i = 0; i < water_num.length; i++){
        if(water_num[i] <= -1){
            check = true;
            index = i;
            break;
        }
    }
    if(check){
        stopTime();
        game_state = true;
        game_screen.style.display = 'none';
        lose.style.display = 'block';
        lose_comment.innerText = `${playerNames[index]} ran out of water...`;
    }
}

let isAnimating = false;

function up_button(){
    if(isAnimating) return;
    isAnimating = true;

    if(player_posiY <= 0){
        action_comfirm.innerHTML = "You are on the edge";
        isAnimating = false;
    }else{
        action_comfirm.innerHTML = "Moved to up.";
        const style = window.getComputedStyle(player);
        const top = parseInt(style.top, 10) - 101;
        player.style.top = top + "px";
        player.style.transition = "top 1s ease-in-out";
    
        player_posi.style.border =  "None";
        player_posiY = player_posiY - 1;
        player_posi = matrix[player_posiY][player_posiX];

        new Promise(resolve => setTimeout(resolve, 1000)).then(() =>{
            isAnimating = false;
            after_action();
        })
    }
}
upButton.addEventListener("click", function(){
    up_button();
})

function down_button(){
    if (isAnimating) return;
    isAnimating = true; 

    if (player_posiY >= 4){
        action_comfirm.innerHTML = "You are on the edge.";
        isAnimating = false;
    }else{
        action_comfirm.innerHTML = "Moved to down.";
        const style = window.getComputedStyle(player);
        const top = parseInt(style.top, 10) + 101;
        player.style.top = top + "px";
        player.style.transition = "top 1s ease-in-out";
    
        player_posi.style.border =  "None";
        player_posiY = player_posiY + 1;
        player_posi = matrix[player_posiY][player_posiX];

        new Promise(resolve => setTimeout(resolve, 1000)).then(() => {
            isAnimating = false; 
            after_action();
        });
    }
}
downButton.addEventListener("click", function(){
    down_button();
});


function left_button(){
    if(isAnimating) return;
    isAnimating = true;

    if(player_posiX <= 0){
        action_comfirm.innerHTML = "You are on the edge.";
        isAnimating = false;
    }else{
        action_comfirm.innerHTML = "Moved to left.";
        const style = window.getComputedStyle(player);
        player.style.transition = "left 1s ease-in-out";
        const left = parseInt(style.left, 10) - 101;
        player.style.left = left + "px";
    
        player_posi.style.border =  "None";
        player_posiX = player_posiX - 1;
        player_posi = matrix[player_posiY][player_posiX];

        new Promise(resolve => setTimeout(resolve, 1000)).then(() =>{
            isAnimating = false;
            after_action();
        });
    }
}
leftButton.addEventListener("click", function(){
    left_button();
});

function right_button(){
    if(isAnimating) return;
    isAnimating = true;

    if(player_posiX >= 4){
        action_comfirm.innerHTML = "You are on the edge.";
        isAnimating = true;
    }else{
        action_comfirm.innerHTML = "Moved to right.";
        const style = window.getComputedStyle(player);
        player.style.transition = "left 1s ease-in-out";
        const left = parseInt(style.left, 10) + 101;
        player.style.left = left + "px";
    
        player_posi.style.border =  "None";
        player_posiX = player_posiX + 1;
        player_posi = matrix[player_posiY][player_posiX];

        new Promise(resolve => setTimeout(resolve, 1000)).then(() =>{
            isAnimating = false;
            after_action();
        });
    }
}
rightButton.addEventListener("click", function(){
    right_button();
});

let item1_clue_count = 0;
let item2_clue_count = 0;
let item3_clue_count = 0;
let item_cnt = 0;

function dig_button(){
    if(matrix2[player_posiY][player_posiX] == "drought"){
        drought.hidden = false;
        if(current_player === 0){
            water_num[current_player]--;
            water_num_p1.innerText = `${water_num[current_player]}`;
        }
        if(current_player === 1){
            water_num[current_player]--;
            water_num_p2.innerText = `${water_num[current_player]}`;
        }
        if(current_player === 2){
            water_num[current_player]--;
            water_num_p3.innerText = `${water_num[current_player]}`;
        }
        if(current_player === 3){
            water_num[current_player]--;
            water_num_p4.innerText = `${water_num[current_player]}`;
        }  
    }
    if(matrix2[player_posiY][player_posiX] == "oasis1"){
        oasis1.hidden = false;
        if(current_player === 0){
            water_num[current_player]++;
            water_num_p1.innerText = `${water_num[current_player]}`;
        }
        if(current_player === 1){
            water_num[current_player]++;
            water_num_p2.innerText = `${water_num[current_player]}`;
        }
        if(current_player === 2){
            water_num[current_player]++;
            water_num_p3.innerText = `${water_num[current_player]}`;
        }
        if(current_player === 3){
            water_num[current_player]++;
            water_num_p4.innerText = `${water_num[current_player]}`;
        }  
    }
    if(matrix2[player_posiY][player_posiX] == "oasis2"){
        oasis2.hidden = false;
        if(current_player === 0){
            water_num[current_player]++;
            water_num_p1.innerText = `${water_num[current_player]}`;
        }
        if(current_player === 1){
            water_num[current_player]++;
            water_num_p2.innerText = `${water_num[current_player]}`;
        }
        if(current_player === 2){
            water_num[current_player]++;
            water_num_p3.innerText = `${water_num[current_player]}`;
        }
        if(current_player === 3){
            water_num[current_player]++;
            water_num_p4.innerText = `${water_num[current_player]}`;
        }  
    }
    if(matrix2[player_posiY][player_posiX] == "oasis3"){
        oasis3.hidden = false;
        if(current_player === 0){
            water_num[current_player]++;
            water_num_p1.innerText = `${water_num[current_player]}`;
        }
        if(current_player === 1){
            water_num[current_player]++;
            water_num_p2.innerText = `${water_num[current_player]}`;
        }
        if(current_player === 2){
            water_num[current_player]++;
            water_num_p3.innerText = `${water_num[current_player]}`;
        }
        if(current_player === 3){
            water_num[current_player]++;
            water_num_p4.innerText = `${water_num[current_player]}`;
        }  
    }
    if(matrix2[player_posiY][player_posiX] == "hole"){
        matrix[player_posiY][player_posiX].hidden = true;
        hole.hidden = false;
        let water = Math.ceil(water_num[current_player] / 2);
        if(current_player === 0){
            water_num[current_player] = water_num[current_player] - water;
            water_num_p1.innerText = `${water_num[current_player]}`;
        }
        if(current_player === 1){
            water_num[current_player] = water_num[current_player] - water;
            water_num_p2.innerText = `${water_num[current_player]}`;
        }
        if(current_player === 2){
            water_num[current_player] = water_num[current_player] - water;
            water_num_p3.innerText = `${water_num[current_player]}`;
        }
        if(current_player === 3){
            water_num[current_player] = water_num[current_player] - water;
            water_num_p4.innerText = `${water_num[current_player]}`;
        }
    }
    if(matrix2[player_posiY][player_posiX] == "item1" && item1_clue_count == 2){
        matrix[player_posiY][player_posiX].hidden = true;
        item1.hidden = false;
        pr1.innerText = "O";
        item_cnt++;
        check_item_cnt();
    }
    if(matrix2[player_posiY][player_posiX] == "item2" && item2_clue_count == 2){
        matrix[player_posiY][player_posiX].hidden = true;
        item2.hidden = false;
        pr2.innerText = "O";
        item_cnt++;
        check_item_cnt();
    }
    if(matrix2[player_posiY][player_posiX] == "item3" && item3_clue_count == 2){
        matrix[player_posiY][player_posiX].hidden = true;
        item3.hidden = false;
        pr3.innerText = "O";
        item_cnt++;
        check_item_cnt();
    }
    if(matrix2[player_posiY][player_posiX] == "item1_clue_up"){
        matrix[player_posiY][player_posiX].hidden = true;
        item1_clue_up.hidden = false;
        item1_clue_count++;
    }
    if(matrix2[player_posiY][player_posiX] == "item1_clue_down"){
        matrix[player_posiY][player_posiX].hidden = true;
        item1_clue_down.hidden = false;
        item1_clue_count++;
    }
    if(matrix2[player_posiY][player_posiX] == "item1_clue_left"){
        matrix[player_posiY][player_posiX].hidden = true;
        item1_clue_left.hidden = false;
        item1_clue_count++;
    }
    if(matrix2[player_posiY][player_posiX] == "item1_clue_right"){
        matrix[player_posiY][player_posiX].hidden = true;
        item1_clue_right.hidden = false;
        item1_clue_count++;
    }
    if(matrix2[player_posiY][player_posiX] == "item2_clue_up"){
        matrix[player_posiY][player_posiX].hidden = true;
        item2_clue_up.hidden = false;
        item2_clue_count++;
    }
    if(matrix2[player_posiY][player_posiX] == "item2_clue_down"){
        matrix[player_posiY][player_posiX].hidden = true;
        item2_clue_down.hidden = false;
        item2_clue_count++;
    }
    if(matrix2[player_posiY][player_posiX] == "item2_clue_left"){
        matrix[player_posiY][player_posiX].hidden = true;
        item2_clue_left.hidden = false;
        item2_clue_count++;
    }
    if(matrix2[player_posiY][player_posiX] == "item2_clue_right"){
        matrix[player_posiY][player_posiX].hidden = true;
        item2_clue_right.hidden = false;
        item2_clue_count++;
    }
    if(matrix2[player_posiY][player_posiX] == "item3_clue_up"){
        matrix[player_posiY][player_posiX].hidden = true;
        item3_clue_up.hidden = false;
        item3_clue_count++;
    }
    if(matrix2[player_posiY][player_posiX] == "item3_clue_down"){
        matrix[player_posiY][player_posiX].hidden = true;
        item3_clue_down.hidden = false;
        item3_clue_count++;
    }
    if(matrix2[player_posiY][player_posiX] == "item3_clue_left"){
        matrix[player_posiY][player_posiX].hidden = true;
        item3_clue_left.hidden = false;
        item3_clue_count++;
    }
    if(matrix2[player_posiY][player_posiX] == "item3_clue_right"){
        matrix[player_posiY][player_posiX].hidden = true;
        item3_clue_right.hidden = false;
        item3_clue_count++;
    }
    matrix[player_posiY][player_posiX].hidden = true;
    action_comfirm.innerHTML = "Digged.";
    after_action();
}
digButton.addEventListener("click", function(){
    dig_button();
});


document.addEventListener("keydown", function(event) {
    if (event.keyCode === 38) { 
        up_button();
    }
    if (event.keyCode === 40) { 
        down_button();
    }
    if (event.keyCode === 37) { 
        left_button();
    }
    if (event.keyCode === 39) { 
        right_button();
    }
    if (event.keyCode === 17) { 
        dig_button();
    }
});

function check_item_cnt(){
    if(item_cnt >= 3){
        setTimeout(function() {
            stopTime();
            game_state = true;
            game_screen.style.display = 'none';
            win.style.display = 'block';
            win_comment.innerText = 'All items are found, and your rocket are fixed!';
        }, 1000);
    }
}


// Initializing special cells
occupied = [matrix[2][2]];
//occupied = [12];

function getRandomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let index_random = 0;

function oasis_set(){
    //let oasis_drought = [oasis1, oasis2, oasis3, drought];
    let oasis_drought = ['oasis1', 'oasis2', 'oasis3', 'drought'];
    oasisX = [];
    oasisY = [];
    itemX = [];
    itemY = [];
    for(let i = 0; i < 8; i++){
        if(i == 0){
            check = false;
            while(!check){
                x = getRandomInt(0, 2);
                y = getRandomInt(0, 2);
                if(!occupied.includes(matrix[y][x])){
                    check = true;
                }
            }
            matrix[y][x].hidden = 'false';
            let style = window.getComputedStyle(matrix[y][x]);
            let topValue = parseInt(style.top, 10);
            let leftValue = parseInt(style.left, 10);
            oasis_pre1.hidden = false;
            oasis_pre1.style.top = topValue + "px";
            oasis_pre1.style.left = leftValue + "px";
            occupied.push(matrix[y][x]);
            oasisX.push(x);
            oasisY.push(y);
            

            let randomInd = Math.floor(Math.random() * oasis_drought.length);
            let randomEleId = oasis_drought[randomInd];
            let randomEle = document.getElementById(randomEleId);
            randomEle.style.top = topValue + "px";
            randomEle.style.left = leftValue + "px";
            oasis_drought.splice(randomInd, 1);
            matrix2[y][x] = randomEleId;
        }else if(i == 1){
            check = false;
            while(!check){
                x = getRandomInt(2, 4);
                y = getRandomInt(2, 4);
                if(!occupied.includes(matrix[y][x]) && !oasisX.includes(x) && !oasisY.includes(y)){
                    check = true;
                }
            }
            matrix[y][x].hidden = 'false';
            let style = window.getComputedStyle(matrix[y][x]);
            let topValue = parseInt(style.top, 10);
            let leftValue = parseInt(style.left, 10);
            oasis_pre2.hidden = false;
            oasis_pre2.style.top = topValue + "px";
            oasis_pre2.style.left = leftValue + "px";
            occupied.push(matrix[y][x]); 
            oasisX.push(x);
            oasisY.push(y);
            let randomInd = Math.floor(Math.random() * oasis_drought.length);
            let randomEleId = oasis_drought[randomInd];
            let randomEle = document.getElementById(randomEleId);
            randomEle.style.top = topValue + "px";
            randomEle.style.left = leftValue + "px";
            oasis_drought.splice(randomInd, 1);
            matrix2[y][x] = randomEleId;
        }else if(i == 2){
            check = false;
            while(!check){
                x = getRandomInt(2, 4);
                y = getRandomInt(0, 2);
                if(!occupied.includes(matrix[y][x]) && !oasisX.includes(x) && !oasisY.includes(y)){
                    check = true;
                }
            }
            matrix[y][x].hidden = 'false';
            let style = window.getComputedStyle(matrix[y][x]);
            let topValue = parseInt(style.top, 10);
            let leftValue = parseInt(style.left, 10);
            oasis_pre3.hidden = false;
            oasis_pre3.style.top = topValue + "px";
            oasis_pre3.style.left = leftValue + "px";
            occupied.push(matrix[y][x]);
            oasisX.push(x);
            oasisY.push(y);
            let randomInd = Math.floor(Math.random() * oasis_drought.length);
            let randomEleId = oasis_drought[randomInd];
            let randomEle = document.getElementById(randomEleId);
            randomEle.style.top = topValue + "px";
            randomEle.style.left = leftValue + "px";
            oasis_drought.splice(randomInd, 1);
            matrix2[y][x] = randomEleId;
        }else if(i == 3){
            check = false;
            while(!check){
                x = getRandomInt(0, 2);
                y = getRandomInt(2, 4);
                if(!occupied.includes(matrix[y][x]) && !oasisX.includes(x) && !oasisY.includes(y)){
                    check = true;
                }
            }
            matrix[y][x].hidden = 'false';
            let style = window.getComputedStyle(matrix[y][x]);
            let topValue = parseInt(style.top, 10);
            let leftValue = parseInt(style.left, 10);
            oasis_pre4.hidden = false;
            oasis_pre4.style.top = topValue + "px";
            oasis_pre4.style.left = leftValue + "px";
            occupied.push(matrix[y][x]);
            oasisX.push(x);
            oasisY.push(y);
            let randomInd = Math.floor(Math.random() * oasis_drought.length);
            let randomEleId = oasis_drought[randomInd];
            let randomEle = document.getElementById(randomEleId);
            randomEle.style.top = topValue + "px";
            randomEle.style.left = leftValue + "px";
            oasis_drought.splice(randomInd, 1);
            matrix2[y][x] = randomEleId;
        }else if(i == 4){
            check = false;
            while(!check){
                x = getRandomInt(0, 4);
                y = getRandomInt(0, 4);
                if(!occupied.includes(matrix[y][x])){
                    check = true;
                }
            }
            let style = window.getComputedStyle(matrix[y][x]);
            let topValue = parseInt(style.top, 10);
            let leftValue = parseInt(style.left, 10);
            // item1.hidden = false;
            item1.style.top = topValue + "px";
            item1.style.left = leftValue + "px";
            occupied.push(matrix[y][x]);
            matrix2[y][x] = "item1";
            itemX.push(x);
            itemY.push(y);

            item1_emp_y = [];
            for(let i = 0; i < 5; i++){
                if(!occupied.includes(matrix[i][x])){
                    item1_emp_y.push(i);
                }
            }
            let randomInd = Math.floor(Math.random() * item1_emp_y.length);
            let randY = item1_emp_y[randomInd];
            if(randY > y){
                let style = window.getComputedStyle(matrix[randY][x]);
                let topValue = parseInt(style.top, 10);
                let leftValue = parseInt(style.left, 10);
                // item1_clue_up.hidden = false;
                item1_clue_up.style.top = topValue + "px";
                item1_clue_up.style.left = leftValue + "px";
                occupied.push(matrix[randY][x]);
                matrix2[randY][x] = "item1_clue_up";
            }else{
                let style = window.getComputedStyle(matrix[randY][x]);
                let topValue = parseInt(style.top, 10);
                let leftValue = parseInt(style.left, 10);
                // item1_clue_down.hidden = false;
                item1_clue_down.style.top = topValue + "px";
                item1_clue_down.style.left = leftValue + "px";
                occupied.push(matrix[randY][x]);
                matrix2[randY][x] = "item1_clue_down";
            }

            item1_emp_x = [];
            for(let i = 0; i < 5; i++){
                if(!occupied.includes(matrix[y][i])){
                    item1_emp_x.push(i);
                }
            }
            randomInd = Math.floor(Math.random() * item1_emp_x.length);
            let randX = item1_emp_x[randomInd];
            if(randX > x){
                let style = window.getComputedStyle(matrix[y][randX]);
                let topValue = parseInt(style.top, 10);
                let leftValue = parseInt(style.left, 10);
                // item1_clue_left.hidden = false;
                item1_clue_left.style.top = topValue + "px";
                item1_clue_left.style.left = leftValue + "px";
                occupied.push(matrix[y][randX]);
                matrix2[y][randX] = "item1_clue_left";
            }else{
                let style = window.getComputedStyle(matrix[y][randX]);
                let topValue = parseInt(style.top, 10);
                let leftValue = parseInt(style.left, 10);
                // item1_clue_right.hidden = false;
                item1_clue_right.style.top = topValue + "px";
                item1_clue_right.style.left = leftValue + "px";
                occupied.push(matrix[y][randX]);
                matrix2[y][randX] = "item1_clue_right";
            }


        }else if(i == 5){
            check = false;
            while(!check){
                x = getRandomInt(0, 4);
                y = getRandomInt(0, 4);
                if(!occupied.includes(matrix[y][x]) && !itemX.includes(x) && !itemY.includes(y)){
                    check = true;
                }
            }
            let style = window.getComputedStyle(matrix[y][x]);
            let topValue = parseInt(style.top, 10);
            let leftValue = parseInt(style.left, 10);
            // item2.hidden = false;
            item2.style.top = topValue + "px";
            item2.style.left = leftValue + "px";
            occupied.push(matrix[y][x]);
            matrix2[y][x] = "item2";
            itemX.push(x);
            itemY.push(y);


            item2_emp_y = [];
            for(let i = 0; i < 5; i++){
                if(!occupied.includes(matrix[i][x])){
                    item2_emp_y.push(i);
                }
            }
            let randomInd = Math.floor(Math.random() * item2_emp_y.length);
            let randY = item2_emp_y[randomInd];
            if(randY > y){
                let style = window.getComputedStyle(matrix[randY][x]);
                let topValue = parseInt(style.top, 10);
                let leftValue = parseInt(style.left, 10);
                // item2_clue_up.hidden = false;
                item2_clue_up.style.top = topValue + "px";
                item2_clue_up.style.left = leftValue + "px";
                occupied.push(matrix[randY][x]);
                matrix2[randY][x] = "item2_clue_up";
            }else{
                let style = window.getComputedStyle(matrix[randY][x]);
                let topValue = parseInt(style.top, 10);
                let leftValue = parseInt(style.left, 10);
                // item2_clue_down.hidden = false;
                item2_clue_down.style.top = topValue + "px";
                item2_clue_down.style.left = leftValue + "px";
                occupied.push(matrix[randY][x]);
                matrix2[randY][x] = "item2_clue_down";
            }

            item2_emp_x = [];
            for(let i = 0; i < 5; i++){
                if(!occupied.includes(matrix[y][i])){
                    item2_emp_x.push(i);
                }
            }
            randomInd = Math.floor(Math.random() * item2_emp_x.length);
            let randX = item2_emp_x[randomInd];
            if(randX > x){
                let style = window.getComputedStyle(matrix[y][randX]);
                let topValue = parseInt(style.top, 10);
                let leftValue = parseInt(style.left, 10);
                // item2_clue_left.hidden = false;
                item2_clue_left.style.top = topValue + "px";
                item2_clue_left.style.left = leftValue + "px";
                occupied.push(matrix[y][randX]);
                matrix2[y][randX] = "item2_clue_left";
            }else{
                let style = window.getComputedStyle(matrix[y][randX]);
                let topValue = parseInt(style.top, 10);
                let leftValue = parseInt(style.left, 10);
                // item2_clue_right.hidden = false;
                item2_clue_right.style.top = topValue + "px";
                item2_clue_right.style.left = leftValue + "px";
                occupied.push(matrix[y][randX]);
                matrix2[y][randX] = "item2_clue_right";
            }
        }else if(i == 6){
            check = false;
            while(!check){
                x = getRandomInt(0, 4);
                y = getRandomInt(0, 4);
                if(!occupied.includes(matrix[y][x]) && !itemX.includes(x) && !itemY.includes(y)){
                    check = true;
                }
            }
            let style = window.getComputedStyle(matrix[y][x]);
            let topValue = parseInt(style.top, 10);
            let leftValue = parseInt(style.left, 10);
            // item3.hidden = false;
            item3.style.top = topValue + "px";
            item3.style.left = leftValue + "px";
            occupied.push(matrix[y][x]);
            matrix2[y][x] = "item3";
            itemX.push(x);
            itemY.push(y);

            item3_emp_y = [];
            for(let i = 0; i < 5; i++){
                if(!occupied.includes(matrix[i][x])){
                    item3_emp_y.push(i);
                }
            }
            let randomInd = Math.floor(Math.random() * item3_emp_y.length);
            let randY = item3_emp_y[randomInd];
            if(randY > y){
                let style = window.getComputedStyle(matrix[randY][x]);
                let topValue = parseInt(style.top, 10);
                let leftValue = parseInt(style.left, 10);
                // item3_clue_up.hidden = false;
                item3_clue_up.style.top = topValue + "px";
                item3_clue_up.style.left = leftValue + "px";
                occupied.push(matrix[randY][x]);
                matrix2[randY][x] = "item3_clue_up";
            }else{
                let style = window.getComputedStyle(matrix[randY][x]);
                let topValue = parseInt(style.top, 10);
                let leftValue = parseInt(style.left, 10);
                // item3_clue_down.hidden = false;
                item3_clue_down.style.top = topValue + "px";
                item3_clue_down.style.left = leftValue + "px";
                occupied.push(matrix[randY][x]);
                matrix2[randY][x] = "item3_clue_down";
            }

            item3_emp_x = [];
            for(let i = 0; i < 5; i++){
                if(!occupied.includes(matrix[y][i])){
                    item3_emp_x.push(i);
                }
            }
            randomInd = Math.floor(Math.random() * item3_emp_x.length);
            let randX = item3_emp_x[randomInd];
            if(randX > x){
                let style = window.getComputedStyle(matrix[y][randX]);
                let topValue = parseInt(style.top, 10);
                let leftValue = parseInt(style.left, 10);
                // item3_clue_left.hidden = false;
                item3_clue_left.style.top = topValue + "px";
                item3_clue_left.style.left = leftValue + "px";
                occupied.push(matrix[y][randX]);
                matrix2[y][randX] = "item3_clue_left";
            }else{
                let style = window.getComputedStyle(matrix[y][randX]);
                let topValue = parseInt(style.top, 10);
                let leftValue = parseInt(style.left, 10);
                // item3_clue_right.hidden = false;
                item3_clue_right.style.top = topValue + "px";
                item3_clue_right.style.left = leftValue + "px";
                occupied.push(matrix[y][randX]);
                matrix2[y][randX] = "item3_clue_right";
            }
        }else if(i == 7){
            check = false;
            while(!check){
                x = getRandomInt(0, 4);
                y = getRandomInt(0, 4);
                if(!occupied.includes(matrix[y][x])){
                    check = true;
                }
            }
            // matrix[y][x].hidden = 'false';
            let style = window.getComputedStyle(matrix[y][x]);
            let topValue = parseInt(style.top, 10);
            let leftValue = parseInt(style.left, 10);
            // hole.hidden = false;
            hole.style.top = topValue + "px";
            hole.style.left = leftValue + "px";
            occupied.push(matrix[y][x]);
            matrix2[y][x] = 'hole';
        }
    }
}


function saveGameState() {
    const gameState = {
        game_state: game_state,
        start_screen: start_screen,
        game_screen: game_screen,
        win_screen: win_screen,
        lose_screen: lose_screen,
        start: start,
        win_button: win_button,
        lose_button: lose_button,
        win_comment: win_comment,
        lose_comment: lose_comment,
        pr1: pr1,
        pr2: pr2,
        pr3: pr3,
        mt0: mt0,
        mt1: mt1,
        mt2: mt2,
        mt3: mt3,
        mt4: mt4,
        mt5: mt5,
        mt6: mt6,
        mt7: mt7,
        mt8: mt8,
        mt9: mt9,
        mt10: mt10,
        mt11: mt11,
        mt12: mt12,
        mt13: mt13,
        mt14: mt14,
        mt15: mt15,
        mt16: mt16,
        mt17: mt17,
        mt18: mt18,
        mt19: mt19,
        mt20: mt20,
        mt21: mt21,
        mt22: mt22,
        mt23: mt23,
        mt24: mt24,
        matrix: matrix,
        oasis_pre1: oasis_pre1,
        oasis_pre2: oasis_pre2,
        oasis_pre3: oasis_pre3,
        oasis_pre4: oasis_pre4,
        oasis1: oasis1,
        oasis2: oasis2,
        oasis3: oasis3,
        drought: drought,
        hole: hole,
        item1_clue_up: item1_clue_up,
        item1_clue_down: item1_clue_down,
        item1_clue_left: item1_clue_left,
        item1_clue_right: item1_clue_right,
        item2_clue_up: item2_clue_up,
        item2_clue_down: item2_clue_down,
        item2_clue_left: item2_clue_left,
        item2_clue_right: item2_clue_right,
        item3_clue_up: item3_clue_up,
        item3_clue_down: item3_clue_down,
        item3_clue_left: item3_clue_left,
        item3_clue_right: item3_clue_right,
        item1: item1,
        item2: item2,
        item3: item3,
        urgu_name: urgu_name,
        remain_count: remain_count,
        upButton: upButton,
        downButton: downButton,
        leftButton: leftButton,
        rightButton: rightButton,
        digButton: digButton,
        action_comfirm: action_comfirm,
        player: player,
        p1_info: p1_info,
        p2_info: p2_info,
        p3_info: p3_info,
        p4_info: p4_info,
        water_num_p1: water_num_p1,
        action_num_p1: action_num_p1,
        p1_turn: p1_turn,
        water_num_p2: water_num_p2,
        action_num_p2: action_num_p2,
        p2_turn: p2_turn,
        water_num_p3: water_num_p3,
        action_num_p3: action_num_p3,
        p3_turn: p3_turn,
        water_num_p4: water_num_p4,
        action_num_p4: action_num_p4,
        p4_turn: p4_turn,
        playerNumber: playerNumber,
        playerNames: playerNames,
        waterNumber: waterNumber,
        timeNumber: timeNumber,
        playerTurn: playerTurn,
        playerColor: playerColor,
        water_num: water_num,
        time: time,
        interval: interval,
        player_posiY: player_posiY,
        player_posiX: player_posiX,
        player_posi: player_posi,
        current_player: current_player,
        current_color: current_color,
        actionCnt: actionCnt,
        isAnimating: isAnimating,
        item1_clue_count: item1_clue_count,
        item2_clue_count: item2_clue_count,
        item3_clue_count: item3_clue_count,
        item_cnt: item_cnt,
        occupied: occupied,
        index_random: index_random
    };

    localStorage.setItem('gameState', JSON.stringify(gameState));
}

function stateCheck() {
    const gameStateStr = localStorage.getItem('gameState');
    if (gameStateStr) {
        const gameState = JSON.parse(gameStateStr);
        game_state = gameState.game_state;
    }
}

function loadGameCheck() {
    const gameStateStr = localStorage.getItem('gameState');
    if (gameStateStr) {
        const gameState = JSON.parse(gameStateStr);
        game_state = gameState.game_state;
        start_screen = gameState.start_screen;
        game_screen = gameState.game_screen;
        win_screen = gameState.win_screen;
        lose_screen = gameState.lose_screen;
        start = gameState.start;
        win_button = gameState.win_button;
        lose_button = gameState.lose_button;
        win_comment = gameState.win_comment;
        lose_comment = gameState.lose_comment;
        pr1 = gameState.pr1;
        pr2 = gameState.pr2;
        pr3 = gameState.pr3;
        mt0 = gameState.mt0;
        mt1 = gameState.mt1;
        mt2 = gameState.mt2;
        mt3 = gameState.mt3;
        mt4 = gameState.mt4;
        mt5 = gameState.mt5;
        mt6 = gameState.mt6;
        mt7 = gameState.mt7;
        mt8 = gameState.mt8;
        mt9 = gameState.mt9;
        mt10 = gameState.mt10;
        mt11 = gameState.mt11;
        mt12 = gameState.mt12;
        mt13 = gameState.mt13;
        mt14 = gameState.mt14;
        mt15 = gameState.mt15;
        mt16 = gameState.mt16;
        mt17 = gameState.mt17;
        mt18 = gameState.mt18;
        mt19 = gameState.mt19;
        mt20 = gameState.mt20;
        mt21 = gameState.mt21;
        mt22 = gameState.mt22;
        mt23 = gameState.mt23;
        mt24 = gameState.mt24;
        matrix = gameState.matrix;
        oasis_pre1 = gameState.oasis_pre1;
        oasis_pre2 = gameState.oasis_pre2;
        oasis_pre3 = gameState.oasis_pre3;
        oasis_pre4 = gameState.oasis_pre4;
        oasis1 = gameState.oasis1;
        oasis2 = gameState.oasis2;
        oasis3 = gameState.oasis3;
        drought = gameState.drought;
        hole = gameState.hole;
        item1_clue_up = gameState.item1_clue_up;
        item1_clue_down = gameState.item1_clue_down;
        item1_clue_left = gameState.item1_clue_left;
        item1_clue_right = gameState.item1_clue_right;
        item2_clue_up = gameState.item2_clue_up;
        item2_clue_down = gameState.item2_clue_down;
        item2_clue_left = gameState.item2_clue_left;
        item2_clue_right = gameState.item2_clue_right;
        item3_clue_up = gameState.item3_clue_up;
        item3_clue_down = gameState.item3_clue_down;
        item3_clue_left = gameState.item3_clue_left;
        item3_clue_right = gameState.item3_clue_right;
        item1 = gameState.item1;
        item2 = gameState.item2;
        item3 = gameState.item3;
        urgu_name = gameState.urgu_name;
        remain_count = gameState.remain_count;
        upButton = gameState.upButton;
        downButton = gameState.downButton;
        leftButton = gameState.leftButton;
        rightButton = gameState.rightButton;
        digButton = gameState.digButton;
        action_comfirm = gameState.action_comfirm;
        player = gameState.player;
        p1_info = gameState.p1_info;
        p2_info = gameState.p2_info;
        p3_info = gameState.p3_info;
        p4_info = gameState.p4_info;
        water_num_p1 = gameState.water_num_p1;
        action_num_p1 = gameState.action_num_p1;
        p1_turn = gameState.p1_turn;
        water_num_p2 = gameState.water_num_p2;
        action_num_p2 = gameState.action_num_p2;
        p2_turn = gameState.p2_turn;
        water_num_p3 = gameState.water_num_p3;
        action_num_p3 = gameState.action_num_p3;
        p3_turn = gameState.p3_turn;
        water_num_p4 = gameState.water_num_p4;
        action_num_p4 = gameState.action_num_p4;
        p4_turn = gameState.p4_turn;
        playerNumber = gameState.playerNumber;
        playerNames = gameState.playerNames;
        waterNumber = gameState.waterNumber;
        timeNumber = gameState.timeNumber;
        playerTurn = gameState.playerTurn;
        playerColor = gameState.playerColor;
        water_num = gameState.water_num;
        time = gameState.time;
        interval = gameState.interval;
        player_posiY = gameState.player_posiY;
        player_posiX = gameState.player_posiX;
        player_posi = gameState.player_posi;
        current_player = gameState.current_player;
        current_color = gameState.current_color;
        actionCnt = gameState.actionCnt;
        isAnimating = gameState.isAnimating;
        item1_clue_count = gameState.item1_clue_count;
        item2_clue_count = gameState.item2_clue_count;
        item3_clue_count = gameState.item3_clue_count;
        item_cnt = gameState.item_cnt;
        occupied = gameState.occupied;
        index_random = gameState.index_random;
    }
}