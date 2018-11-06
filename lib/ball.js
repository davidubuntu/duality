// BALL CONSTRUCTOR
function Ball(game, row, column,value,radius,ballSpace,xBoard,yBoard) {
    this.game = game;
    this.ballSpace = ballSpace;
    this.value = value; //Ball white or black (0,1)
    this.ctx = this.game.ctx; 
    this.x = xBoard + column * this.ballSpace;
    this.y = yBoard + row * this.ballSpace;
    this.radius = radius;
}


Ball.prototype.toggleValue = function(){
    (this.value ===0)?this.value =1:this.value =0;
}

Ball.prototype.draw = function(){
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    if(this.value ===1){
        this.ctx.fillStyle = 'rgb(0 , 0, 1)';
        this.ctx.fill();
        this.ctx.lineWidth = 0;
    }else{
        this.ctx.fillStyle = 'rgb(198 , 200, 201)';//gray
        this.ctx.fill();
        this.ctx.lineWidth = 0;
    }
}


