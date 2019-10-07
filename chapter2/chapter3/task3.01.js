function Person(firstName, description) {
   
    this.firstName = firstName;
    this.description = description;

   
    this.fullName = function() {
        return this.firstName + ", " + this.description;
    }
}

var myPerson = new Person("John", "19");
console.log(myPerson.fullName());         