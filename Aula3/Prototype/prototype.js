function Animal(name) {
    this.name = name;
  }
  
  Animal.prototype.sayName = function() {
    console.log("Meu nome é " + this.name);
  };
  
  function Dog(name, breed) {
    Animal.call(this, name);
    this.breed = breed;
  }
  
  Dog.prototype = Object.create(Animal.prototype);
  Dog.prototype.constructor = Dog;
  
  Dog.prototype.bark = function() {
    console.log("Woof!");
  };
  
  var animal = new Animal("Animal");
  var dog = new Dog("Buddy", "Golden Retriever");
  
  animal.sayName(); 
  dog.sayName(); 
  dog.bark(); 
  