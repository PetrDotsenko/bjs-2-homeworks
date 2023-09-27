function Student(name, gender, age) {
    this.name = name; 
    this.gender = gender; 
    this.age = age;
    this.marks = [];  
}
let student1 = new Student("Maks", "male", "17");
let student2 = new Student("Gena", "male", "18");
let student3 = new Student("Masha", "female", "15");

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}


Student.prototype.addMarks = function (...marks) {
  if(this.hasOwnProperty('marks')) {
    this.marks.push(...marks);
  }
}



Student.prototype.getAverage = function () {
  if(this.hasOwnProperty('marks') && this.marks.length !== 0) {
    let sum = 0; 
    for (let i = 0; i < this.marks.length; i += 1) { 
    sum += this.marks[i];
    }
    return sum / this.marks.length; 
  } else {
    return 0;
  }
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}
