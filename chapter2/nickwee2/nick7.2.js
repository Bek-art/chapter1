
let Vehicle = function(x = 0, y = 0) {

    this.getAllParametrs = function(){
        
    }
    this.get = {
        position: function(){
            console.log('x : ' + x +'\n' + 'y : ' + y)
            return [x, y];
        }
    }

    this.move = {
        up: function(a=1) {
            y+=a;
            console.log('move up (y+' + a + ')');
        },
        down: function(a=1){
            y-=a;
            console.log('move down (y-' + a + ')');
        },
        right: function(a=1){
            x+=a;
            console.log('move right (x+' + a + ')');
        },
        left: function(a=1){
            x-=a;
            console.log('move left (y-' + a + ')');
        }
    }
}

let Tank = function(){
    Vehicle.call(this);

    let armory = 100;
    let armor = 100;

    this.get.armory = function(){
        console.log('Запас патронов: ' + armory);
        return armory;
    };
    this.get.armor = function(){
        console.log('Броня: ' + armor);
        return armor;
    };
    this.fire = function(){
        console.log('Огонь!')
        armory--;
    }
    this.damage = function(){
        console.log('По нам попали!!');
        armor-=10;
    }
}

let t34 = new Tank(20,25);
t34.get.armory();
t34.fire();
t34.get.armory();
t34.damage();
t34.get.armor();

let tanchik = new Tank(10, 10);
tanchik.get.armory();