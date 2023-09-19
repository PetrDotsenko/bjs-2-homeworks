function Student(name, gender, age) {
    this.name = name; 
    this.gender = gender; 
    this.age = age;
    this.marks = [];  
}
new Student("Maks", "male", "17");
new Student("Gena", "male", "18");
new Student("Masha", "female", "15");

Student.prototype.setSubject = function (subjectName) {
  //по инструкции к домашнему заданию весь пункт два уже был выполнен
}

Student.prototype.addMarks = function (...marks) {
    if (marks in Student) {
    addMarks(...marksToAdd).push.Student.marks;
    }
}

Student.prototype.getAverage = function () {
  
}

Student.prototype.exclude = function (reason) {
  
}
