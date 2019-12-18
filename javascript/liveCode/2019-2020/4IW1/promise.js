
const getStudents =(resolve, reject) => {
  setTimeout(() => {
    resolve([{name: "Charlichou", courses: [1, 2]}, {name: "Luc", courses: [3, 2]}]);
  }, 2000);
}

const getCourses =(resolve, reject) => {
  setTimeout(() => {
    resolve([{id: 1, name: "JS"}, {id: 2, name: "PHP"}, {id: 3, name: "COBOL"}]);
  }, 10000);
}

const timer = function(resolve, reject) {
  setTimeout(() => resolve("timeout"), 7000);
}
const getStudents = async () => {
  await new Promise(getStudents);
}

const mappedFunc = async () => {
  const students = await new Promise(getStudents);
  const courses = await new Promise(getCourses);

  return [students, courses];
}

mappedFunc.then(() => {});

Promise.race([
  Promise.all([new Promise(getStudents), new Promise(getCourses)])
  .then(result => {
    const students = result[0], courses = result[1];
    // mapping
    console.log("mapped");
  }),
  new Promise(timer)
])
.then(result => console.log(result));

Promise.race([
  Promise.all([getStudentsAsync, getCoursesAsync)])
  .then(result => {
    const students = result[0], courses = result[1];
    // mapping
    console.log("mapped");
  }),
  new Promise(timer)
])