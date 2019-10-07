var Cat = function () {
    var healthyPoints = 100;
    this.pawns = 4;
    this.tail = 1;
    this.color = 'black';
    this.getHealthyPoints = function (){
        return healthyPoints;
    }
    this.meow = function () {
        healthyPoints -=0.5;
        console.log ('алиса хочет кушать');
    }
    this.sleep = function() {
        healthyPoints += 20;
        console.log ('Не мешать! алиса спит!');
    }
    this.eat = function() {
        healthyPoints +=100;
        console.log ('алиса поел и стал толстым!');
    }
    this.happines = function() {
        healthyPoints +=50;
        console.log ('Человек помучал алиса и ему стало весело!');
    }
    this.loneliness = function() {
        healthyPoints -=1;
        console.log ('алисе одинок!');
    }

    
}
var cat1 = new Cat();
cat1.happines ();
console.log(cat1.getHealthyPoints());