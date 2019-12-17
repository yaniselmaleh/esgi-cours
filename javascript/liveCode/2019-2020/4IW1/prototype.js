
const obj = {
  p1: "foo",
  m1() {
    console.log(this.p1);
  },
  m2: () => {return {
    p1: 4
  }}
}

obj.m1();
console.log(obj.m2());

const Student = function (name) {
  const sname = name;

  this.displayName = () => {
    console.log(sname); 
    sayHello();
  }

  const sayHello = () => console.log('hello');
}

Student.prototype.whereIAm = function() {
  this.displayName();
  console.log('in the kitchen');
}
const stud1 = new Student("toto");
//stud1.displayName();
stud1.whereIAm();
stud1.__proto__.whereIAm = function() {
  this.displayName();
  console.log('in the bedroom');
}
stud1.whereIAm();

const stud2 = new Student("toto");
stud2.whereIAm();