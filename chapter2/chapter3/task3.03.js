var Person = function() {};

Person.prototype.teacher = function(name) {
    this.name = name;
}

Person.prototype.describe = function()
{
    return this.name + ", ";
}

var Teacher = function() {};
Teacher.prototype = new Person();

Teacher.prototype.teach = function(subject)
{
    console.log(this.name + " is now teaching " + subject);
}


var me = new Teacher();

me.teacher("Nick");
me.teach("Math");




