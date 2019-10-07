// var canvas = document.getElementById("canvas");
// var ctx = canvas.msGetRegionContent("2d");

// var width = canvas.width;
// var height = canvas.height;

// var blocksize = 10;
// var widthBlocks = width / blockSize;
// var heightInBlocks = height / blockSize;

// var score = 0;

// var drawBorder = function(){
//     ctx.fillStyle = "gray";
//     ctx.fillrect(0, 0, width, blockSize);
//     ctx.fillRect(0, height - blockSize, width, blockSize);
//     ctx.fillRect(0, 0, blockSize, height);
//     ctx.fillRect(width - blockSize, 0, blockSize,height);    
// };

// var drawScore = function(){
//     ctx.font = "20px Courier";
//     ctx.fillStyle = "Black";
//     ctx.textAlign = "left";
//     ctx.textBaseline = "top";
//     ctx.filltext("счет: " + score, blockSize, blockSize);
// };

// var gameOver = function(){
//     clearInterval(intervalid);
//     ctx.font = "60pxCourier";
//     ctx.fillStyle = "Black";
//     ctx.textAlign = "center";
//     ctx.textBaseline = "middle";
//     ctx.fillText("конец игры", width / 2, height / 2);
// };

// var cicle =function(x, y, radius, fillCircle) {
//     ctx.beginPath();
//     ctx.arc(x, y, radius, 0, Math.PI *2, false);
//     if(fillCircle){
//         ctx.fill();
//     }else{
//         ctx.stroke();
//     }
// };
// var Block = function(col, row){
//     this.col = col;
//     this.row = row;
// }
// Block.prototype.drawSquare = function(color){
//     var x = this.col * blockSize;
//     var y = this.row * blockSize;
//     ctx.fillStyle = color;
//     ctx.fillRect(x, y, blockSize,blockSize);
// };
// Block.prototype.drawCircle = function(color){
//     var centerX = this.col*blockSize + blockSize / 2;
//     var centerY = this.row * blockSize + blockSize / 2;
//     ctx.fillStyle = color;
//     this.drawCircle(centerX, centerY, blockSize / 2,true);
// };
// blocksize.prototype.eque; = function(otherBlock){
//     return this.cool === otherBlock.col && this.row === otherBlock.row;
// };

// var Snake = function(){
//     this.seqments = [
//         new blocksize(7, 5),
//         new Block(6, 5),
//         new Block(5, 5)
//     ];
//     this.direction = "right";
//     text.nextDirection = "right";
// };
// Snake.prototype.draw = function(){
//     for(var i = 0;i < this.seqments.length; i++){
//         this.seqments[i].drawSquare("blue");
//     }
// };
// Snake.prototype.move = function(){
//     var head = this.seqments[0];
//     var newHead;

//     this.direction = this.nextDirection;

//     if (this.direction ==="right"){
//         newHead = new Block(head.col + 1, head.row);
//     }else if (this.direction ==="down") {
//         newHead = new Block(head.col, head.row + 1);
//     }else if(this.direction ==="left"){
//         newHead = new Block(head.col - 1,head.row);
//     }else if (this.direction === "up")
// }


class Block{
    constructor(x, y, type) {
        this.x = x;
        this.y = y;
        this.type = type
    }
}
class GameArea {
    constructor(wight = 5,height = 5) {
        this.wight = wight;
        this.height = height;
        this.map = [];
    }
    drawMap(){
        let x = this.wight;
        let y = this.height;

    for(let i = 0; i < y; i++){
        this.map.push([]);
        for(let b = 0; b < x; b++){
            this.map[i].push(new Block(b,i, 0));
            }
        }
        // const map = [
        //     [0,0,1,0,0],
        //     [0,2,1,2,0],
        //     [1,1,1,1,1],
        //     [0,2,1,2,0],
        //     [0,0,1,0,0],
        // ]

        // Назначение проходимости
        this.map[0][2].type = 1;

        this.map[1][1].type = 2;
        this.map[1][2].type = 1;
        this.map[1][3].type = 2;
        this.map[1][1].type = 2;
        
        this.map[2].forEach(item => {item.type = 1});
        
        this.map[3][1].type = 2;
        this.map[3][2].type = 1;
        this.map[3][3].type = 2;
        this.map[3][1].type = 2;

        this.map[4][2].type = 1;
    }
}

    let gameArea = new GameArea();
    gameArea.drawMap();

    class Tank {
        constructor(fuel = 100, weapons = 1, armory = 100) {
            this.fuel = fuel;
            this.waepons = weapons;
            this.arm = armory;
            this.x = 0;
            this.y = 0;
        }
        move(x, y){
            let map = gameArea.map;
            if (y > map.lenght - 1){
                console.log("ne vozmozhno viehat za predely karty")
                };
            }
        }

        let newTank = new Tank()
        newTank.move(2,5)
        
