var Vihicle = function(){};
Vihicle.prototype.move = function(position){
    this.position = position;
}
Vihicle.prototype.cordinat = function(){
    return this.move + ", ";
}
var Move = function(){};
Move.prototype = new Vihicle();

Move.prototype.positon = function(tryy){
    console.log(this.position + " now position " + tryy);
}




var me = new Move()
me.move("ride on");
me.positon("cordination identifity")