const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

//snake
var snake = [];
var tmp = 0;
for(var i = 0; i < 5; i++){
    snake[i] = {
        w: 25,
        h: 25,
        x: canvas.width/2-35 + tmp,
        y: canvas.height/2, 
        dx: 25,
        dy: 0
    };
    tmp = tmp - snake[i].w;
}

function drawSnake(){
    for(var j = 0; j < 5; j++){
        context.fillStyle = 'red';
        context.fillRect(snake[j].x, snake[j].y, snake[j].w, snake[j].h);
    }
}

function clear(){
    context.clearRect(0, 0, canvas.width, canvas.height);
}

function MovPos() {
    var xPrev, yPrev, xNow, yNow ;
    for(var i = 0; i < 5; i++){
        if(i === 0){
            xPrev = snake[i].x;
            yPrev = snake[i].y;
            snake[i].x += snake[i].dx;
            snake[i].y += snake[i].dy;
            
        }
        else{
            xNow = snake[i].x;
            yNow = snake[i].y;
            snake[i].x = xPrev;
            snake[i].y = yPrev;
            xPrev = xNow;
            yPrev = yNow;
        }
    }
    detectWalls();
  }
  function detectWalls() {
    // Left wall
    if (snake[0].x <= 0) {
        snake[0].dx = 0;
    }
  
    // Right Wall
    if (snake[0].x + snake[0].w >= canvas.width) {
        snake[0].dx = 0;
    }
    if (snake[0].y <= 0) {
        snake[0].dy = 0;
      }
    if (snake[0].y + snake[0].h >= canvas.height) {
        snake[0].dy = 0;
    }  
}

function movement(){
    clear();
    drawSnake();
    MovPos();
}

setInterval(movement, 1000);

function moveRight() {
    snake[0].dx = 25;
    snake[0].dy = 0;
}
  
function moveLeft() {
    snake[0].dx = -25;
    snake[0].dy = 0;
}
function moveUp() {
    snake[0].dx = 0;
    snake[0].dy = -25;
}
  
function moveDown() {
    snake[0].dx = 0;
    snake[0].dy = 25;
}

function keyDown(e) {
    if (e.key === 'ArrowRight' || e.key === 'Right') {
        if(snake[0].dx != -25 ){
            moveRight();
        }
    } else if (e.key === 'ArrowLeft' || e.key === 'Left') {
        if(snake[0].dx != 25){
            moveLeft();
        }
    }
    else if (e.key === 'ArrowUp' || e.key === 'Up') {
        if(snake[0].dy != 25 ){
            moveUp();
        }
    }
    else if (e.key === 'ArrowDown' || e.key === 'Down') {
        if(snake[0].dy != -25 ){
            moveDown();
        }
    }
}

document.addEventListener('keydown', keyDown);