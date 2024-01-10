///new & this with class prototype start
class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eat() {
    console.log("Student is eating!");
  }
  sleep() {
    console.log("Student is sleeping!");
  }
}

const parves = new Student("Parves", 27);
console.log(parves.name);
console.log(parves.age);

parves.eat();
parves.sleep();
///new & this with class prototype end

///new & this start
///////////// if we create object with a constructior using "new" keyword then object.create() and return object is not needed. and the function will use "this" keyword.

function PersonNew(name, age) {
  //   let person = Object.create(PersonNew.prototype);
  this.name = name;
  this.age = age;

  //   return person;
}

PersonNew.prototype = {
  eat() {
    console.log("Person is eating!");
  },
  sleep() {
    console.log("Person is sleeping!");
  },
};

const sakib = new PersonNew("Sakib", 24);
const rabbi = new PersonNew("Rabbi", 25);
console.log(sakib.name);
console.log(rabbi.age);
sakib.sleep();
///new & this end

///Prototype keyword start
/////////// Here we're using actutal prototyping with .prototype

function Person(name, age) {
  let person = Object.create(Person.prototype);
  person.name = name;
  person.age = age;

  return person;
}

Person.prototype = {
  eat() {
    console.log("Person is eating!");
  },
  sleep() {
    console.log("Person is sleeping!");
  },
};

const sakib = Person("Sakib", 24);
const rabbi = Person("Rabbi", 25);
console.log(sakib.name);
console.log(rabbi.age);
sakib.eat();

///Prototype keyword end

///Prototype with Object.create() keyword start
/////////// This is a manual prototype creation without new keyword

function Person(name, age) {
  let person = Object.create(personMethod);
  person.name = name;
  person.age = age;

  return person;
}

const personMethod = {
  eat() {
    console.log("Person is eating!");
  },
  sleep() {
    console.log("Person is sleeping!");
  },
};

const sakib = Person("Sakib", 24);
const rabbi = Person("Rabbi", 25);
console.log(sakib.name);
console.log(rabbi.age);
sakib.eat();

///Prototype with Object.create() keyword end
