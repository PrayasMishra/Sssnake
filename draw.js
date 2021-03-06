const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
//console.log(canvas)
const scale = 10
const rows = canvas.height/scale;
const columns = canvas.width/scale;
var snake;

(function setUp(){
    snake = new Snake();
    fruit = new Fruit();
    fruit.location();
    //console.log(fruit);

    window.setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        fruit.drawFruit();
        snake.update();
        snake.draw();

        if (snake.eat(fruit)) {
            fruit.location();
        }

        snake.collision();
        document.querySelector('.score').innerText = snake.totalEaten;
    }, 250);
}());

window.addEventListener('keydown', ((evt) => {
    const direction = evt.key.replace('Arrow', '');
    //console.log(direction);
    snake.chngDirection(direction);    
}))