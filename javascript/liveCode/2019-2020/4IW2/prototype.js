const obj = {
  p1: "foo",
  m1: () => {
    console.log(this.p1);
  },
  m1A: () => {
    return {prop1: true};
  },
  m1B: () => ({
    prop1: true
  }),
  m2: function() {
    console.log(this.p1)

    return false;
  },
  m3() {
    console.log(4);
  }
};
obj.__proto__.m5 =() => console.log("foo");
//console.log(obj.m1());
//console.log(obj.m2());
//console.log(obj.m5());

function Student(name) {
  var sname = name;

  this.getName = () => sname;
}

const stud1 = new Student("toto");
console.log(stud1.getName());
Student.prototype.sayHello = function() { this.getName()};
Student.prototype.sayHelloName = function() { 
  const func = () => this.getName()
  console.log("hello" + func());
};
Student.prototype = Object.assign(Student.prototype, {
  test: () => console.log('test')
});
const stud2 = new Student("titi");
console.log(stud1.__proto__);
console.log(stud1.prototype);
console.log(Student.prototype);
//stud2.sayHelloName();
//stud1.sayHelloName();


function test(test, test2, test4) {
  console.log(arguments);
}

test("toto", 1);
console.log(test);