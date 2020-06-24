function Fruit(){
    this.x;
    this.y;

    this.location = function(){
        this.x = (Math.floor(Math.random() * rows -1)+ 1) * scale;
        this.y = (Math.floor(Math.random() * columns -1)+ 1) * scale;
    }

    this.drawFruit = function(){
        ctx.fillStyle = "#ff1a1a"
        ctx.fillRect(this.x, this.y, scale, scale);
    }
}