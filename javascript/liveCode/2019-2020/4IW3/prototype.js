

const obj = {
  p1: "foo",
  m1: function() {
    console.log('fifi')
    console.log(this.p1);
  },
  m2() {
    console.log('tutu');
  },
  m3: () => {
    console.log('m3');
  }
};
//obj.m1();
//obj.m3();

const Student = function(name) {
    //privé
    const sname = name;
    const getName = () => sname;
    //privilégié
    this.displayName = () => {
      console.log(sname);
    }
    //publique
    this.sayHello = function(){
      console.log("hello");
    }
};
const stud1 = new Student("Riri");

Student.prototype.whereIam = () => "in the kitchen";
stud1.displayName();
//stud1.getName();
console.log(stud1.whereIam());