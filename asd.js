// let declaration = /;а-я]/gi;
// let str = "bekцацуа";
// let result = str.match(declararion);

// console.log(result);

//  if (result === null) console.log("все верно")
//  else console.log("вводите тoлько латиницу")




// //Nick task`s lesson 5.1
//  var str = 'Twas the night before Xmas...';
// var newstr = str.replace(/xmas/i, 'Christmas');
// console.log(newstr); // Twas the night before Christmas.


//Nick task`s lesson 5.2
// function reverse(value) {
//     value = value.toLowerCase();
//     var rev = value.split("") .reverse("") .join("");
//     if(rev === value) {
//         return "Palindrome";
//     } else {
//         return "Not palindrome";
//     }
// }

// console.log(reverse("5"));




// Sam, [30.09.19 11:56]
// Lecture: OOP

// let speak = function() {
//     console.log(this.name + " told " + this.sound);
// }

// function Animal(name, age, sound) {
//     this.name = name;
//     this.age = age;
//     this.sound = sound;
//     this.bark = speak;
// }

// Animal.prototype.bark = speak;

// let dog = new Animal("Haska", 7, "gaf");
// let cat = new Animal("Murzik", 4, "miyau" );
// let cow = new Animal("Burka", 3, "muu");

// dog.bark();



// This is working in ES6

// class Cat {
//     miu() {
//         console.log('Miu miu miu!');
//     }

//     sleep() {
//         console.log('Do not touch me!!!');
//     }

//     eat() {
//         console.log('Niam');
//     }
// }

// const cat1 = new Cat();
// cat1.miu();

// const cat2 = new Cat();
// cat2.sleep();



// This is working in ES5


var Animal = function() {
    this.run = function() {
        console.log('Running fast');
    }
}

this.eat = function() {
    console.log('Niam');
}

var Goat = function() {
    Animal.call(this);

    this.say = function() {
        console.log('Beeeee')
    }
}

var Cat = function() {
    Animal.call(this);
    var healthyPoint = 100;

    var swallow = function() {
        console.log('whooo')
    }
    this.pawns = 4;
    this.tail = 1;
    this.color = 'black';


    this.getHealthyPoints = function() {
        return healthyPoint;
    }

    this.miu = function() {
        healthyPoint -= 0.5;
        console.log('Miu miu!');
    };
    this.sleep = function() {
        healthyPoint += 20;
        console.log('Do not touch me!!!');
    };
    this.eat = function() {
        swallow();
        healthyPoint += 100;
        console.log('Niam');
    }
    return this;
}

var cat1 = new Cat();
cat1.run();
cat1.eat();
var goat1 = new Goat();
goat1.run();
goat1.eat();
goat1.say();




// cat1.eat();
// cat1.color = 'White';
// console.log(cat1.getHealthyPoints());
// console.log(cat1);
  
