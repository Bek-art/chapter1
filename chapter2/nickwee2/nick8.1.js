    var Vihicle = function(x,y){
        this.position = {
            x,
            y
        };
    }
    Vihicle.prototype.move = function(){
        this.position.x += 1;
        this.position.y += 1;

        console.log(`My position is: x - ${this.position.x}; y - ${this.position.y};`);
    }
var Vihicle1 = new Vihicle(1, 2)
console.log(Vihicle1);
console.log(Vihicle1.__proto__);





