function Human(name,age){
    this.name=name;
    this.age=age;
}
Human.prototype.getNameAndAge=function(){
    return `Name is : ${this.name} And Age is : ${this.age}`;
}
function Man(name,age){
    Human.call(this,name,age);
}

let HumanObject=Object.create(Human)
Man.prototype=HumanObject.prototype;
let data =new Man("Aniket",22);
console.log(data.getNameAndAge());