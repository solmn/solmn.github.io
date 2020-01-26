(function () {
  "use strict";

  function workingWithProtoType() {
    console.log("WORKING WITH PROTOTYPE");
    let animal = {
      jumps: null
    };
    let rabbit = {
      __proto__: animal,
      jumps: true
    };
    console.log("animal:",animal);
    console.log("rabit:",rabbit);
    console.log("rabbit.jumps",rabbit.jumps ); // ? (1)

    console.log("delete rabbit.jumps;")
    delete rabbit.jumps;

    console.log("rabbit.jumps", rabbit.jumps ); // ? (2)
    console.log("delete animal.jumps;")
    delete animal.jumps;

    console.log("rabbit.jumps", rabbit.jumps ); // ? (3)
    console.log("====================================================================");
  }

  function searchingAlgorithm() {
    console.log("SEARCHING ALGORITHM");
    let head = {
      glasses: 1
    };

    let table = {
      pen: 3,
      __proto__: head
    };

    let bed = {
      sheet: 1,
      pillow: 2,
      __proto__: table
    };

    let pockets = {
      money: 2000,
      __proto__: bed
    };

    console.log( pockets.pen );
    console.log( bed.glasses );
    console.log( table.money );
    console.log("====================================================================");

  }

  function whereDoesItWrite() {
    console.log("WHERE DOES IT WRITE");
    let animal = {
     eat() {
        this.full = true;
        }
      };

    let rabbit = {
      __proto__: animal
    };

  console.log(rabbit.eat());
  console.log(rabbit.full);
  console.log(animal.full);
  }

  function hamster() {
    console.log("HAMATER");
    let hamster = {
        stomach: [],

        eat(food) {
          this.stomach.push(food);
        }
    };

  let speedy = {
    __proto__: hamster,
    stomach: []
  };

  let lazy = {
    __proto__: hamster,
    stomach: []
  };

  speedy.eat("apple");
  console.log( speedy.stomach );
  console.log( lazy.stomach );
  console.log("====================================================================");

  }
  function changingProtoType() {
    console.log("CHANGING PROTOTYPE");
    function Rabbit() {}
        Rabbit.prototype = {
          eats: true
        };

        let rabbit = new Rabbit();

        delete Rabbit.prototype.eats;

        console.log( rabbit.eats ); // ?
      console.log("====================================================================");

  }
  function createAnObjectWithTheSameConstructor() {
    console.log("CREATE AN OBJECT");
    function U() {}
    let u = new U();
    let obj2 = new u.constructor();
    console.log(obj2);
    console.log("====================================================================");

  }

  function diferFunc() {
    console.log("DEFER");
    Function.prototype.defer = function(ms) {
       setTimeout(this, ms);
    };

    function f() {
      console.log("Hello!");
    }

    f.defer(1000);
    console.log("====================================================================");
  }

  function decoreDifer() {
      Function.prototype.defer = function(ms) {
      let f = this;
      return function(...args) {
        setTimeout(() => f.apply(this, args), ms);
         }
      };

      let user = {
        name: "John",
        sayHi() {
          console.log(this.name);
        }
      }

      user.sayHi = user.sayHi.defer(1000);

      user.sayHi();
  }

  function exercise1(str, b) {
    console.log(" 1.Exercise 1");
    String.prototype.filter = function (banned) {
        let splitted = this.split(" ");
        return splitted.filter(s => s !== banned
    ).join(" ");
  };
  return str.filter(b);

  }

  function exercise2(array) {
    console.log(" \n 2. Exercise 2");
    Array.prototype.bubbleSort = function () {
        let length = this.length;
        for (let i = (length - 1); i >= 0; i--) {
            for (let j = (length - i); j > 0; j--) {
                if (this[j] < this[j - 1]) {
                    let tmp = this[j];
                    this[j] = this[j - 1];
                    this[j - 1] = tmp;
                }
            }
        }
        return this;
    }
   return array.bubbleSort();

  }

  function exercise3() {
      console.log(" \n 3. Exercise")
      console.log("\n .....................using function Constructor.....................................")

      function Person(name) {
          this.name = name;
      };
      const teacher = new Person("Dr. Keith Levi");
      Person.prototype.teach = function (subject) {
          return this.name + " is now teaching" + subject;
      }
      console.log(teacher.teach(" WAP"));
      // Object.Create
      console.log("\n .......................Using Object Prototype Aproach...............................")

      const person = function () {
          return {name: "Paul"}
      };
      const teach = Object.create(person());
      teach.name = "Dr. Keith Levi";
      teach.course = function (subject) {
          return this.name + " is now teaching " + subject
      };
      console.log(teach.course("WAP"));

      //4..a... Object prototype Aproach
      console.log("\n 4...................")
      console.log("\n .......................Using Object Prototype Aproach............................")
      const Persons = {
          name: "Unknown", age: 20, greeting: function () {
              return "Geeetings: my name is" + this.name + "and I am " + name.age + "years Old"
          },
          salute: function () {
              return "Good morning!, and in case I dont see you,good afternoon, good evening and good night!"
          }
      }
      const Student = Object.create(Persons);
      Student.major = "Unknown";
      Student.greeting = function () {
          return "Hey my name is " + this.name + " and I am studying " + this.major
      };
      Student.name = "Solomon Mehari";
      Student.major = "WAP";
      console.log(Student.greeting());
      const Professor = Object.create(Persons);
      Professor.department = "Unknown";
      Professor.salute = function () {
          return "Good day Good day,\n" +
              "my name is " + this.name + " and I am in the " + this.department + " department.";
      }

      Professor.name = "Dr. Keith Levi";
      Professor.department = "Computer Science";
      console.log(Professor.salute());
      const professor = Object.create(Professor);
      const student = Object.create(Student);
      console.log(professor.salute());
      console.log(student.greeting());
      // 4..b....function Constructor Aproach
      console.log(" \n ..........................using function Constructor aproach.....................")

      function Perrson(name, age) {
          this.name = name;
          this.age = age;
      }

      Perrson.prototype.greeting = function () {
          return "Geeetings: my name is" + this.name + "and I am " + name.age + "years Old";
      }
      Perrson.prototype.salute = function () {
          return "Good morning!, and in case I dont see you,good afternoon, good evening and good night!";
      }
      const Studet = new Perrson("Solomon", 26);
      Studet.major = "WAP";
      Studet.greeting = function () {
          return "Hey my name is " + this.name + " and I am studying " + this.major
      };
      console.log(Studet.greeting());
      const Profesor = new Perrson("Dr. Keith Levi", 56);
      Profesor.department = "Computer Science";
      Profesor.salute = function () {
          return "Good day Good day,\n" +
              "my name is " + this.name + " and I am in the " + this.department + " department.";
      };
      console.log(Profesor.salute());
      const profesor = Object.create(Profesor);
      const studet = Object.create(Studet);
      console.log(studet.greeting());
      console.log(profesor.salute());

  }
  workingWithProtoType();
  searchingAlgorithm();
  whereDoesItWrite();
  hamster();
  changingProtoType();
  createAnObjectWithTheSameConstructor();
  diferFunc();
  decoreDifer();
  describe("Banned", function() {

      context("This house is not nice! and 'not'", function() {
          it("This house is nice!", function() {
              assert.equal(exercise1("This house is not nice!", "not"), "This house is nice!");
          });
      });
      context("I don't like it", function() {
          it("I like it", function() {
              assert.equal(exercise1("I don't like it", "don't"), "I like it");
          });
      });

  });

  describe("Bubble", function() {

      context("[6,4,0, 3,-2,1] is  entered", function() {
          it(" [-2, 0, 1, 3, 4, 6]", function() {
              assert.equal(JSON.stringify(exercise2([6,4,0, 3,-2,1])), JSON.stringify([-2, 0, 1, 3, 4, 6]));
          });
      });
  });

})();
