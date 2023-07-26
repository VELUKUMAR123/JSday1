const person = {};           //1

person.name = 'John';
person.age = 30;
person.city = "New york";

console.log(person); // 2
delete person.age
console.log(person);  //3
person.job ="Engineer";
console.log(person); //4
person.city ="San francisco";
console.log(person); //5


