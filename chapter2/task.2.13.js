var myPerson = {
    person : "John",
    description : "19",
    function()
    {
        return this.person + ", " + this.description;
    }
}
console.log(myPerson.function());    