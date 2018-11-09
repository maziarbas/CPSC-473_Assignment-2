// This file defines the course constructor and builds some objects
function Grade(cName, grade, sId, cId) {
  this.cName = cName;
  this.sId = sId;
  this.grade = grade;
  this.cId = cId

  this.getStudentId = function() {
    return this.sId;
  }

  this.getCourseid = function() {
    return this.cId;
  }

  this.courseInfo = function() {
    return this.cName + " " + this.grade;
  }
}

// defining dummy objects for grade5
var grade1 = new Grade("Math", "A+", 880001, 103);
var grade2 = new Grade("Physics", "A", 880001, 104);
var grade3 = new Grade("Art", "C", 880001, 105);
var grade4 = new Grade("Art", "A", 880002, 105);
var grade5 = new Grade("Art", "B", 880003, 105);
var grade6 = new Grade("Art", "A-", 880004, 105);
var grade7 = new Grade("Art", "B-", 880005, 105);
var grade8 = new Grade("Art", "A+", 880006, 105);
var grade9 = new Grade("Math", "B", 880002, 103);
var grade10 = new Grade("Math", "A", 880003, 103);
var grade11 = new Grade("Math", "B-", 880005, 103);
var grade12 = new Grade("Math", "A-", 880006, 103);
var grade13 = new Grade("Physics", "A-", 880002, 104);
var grade14 = new Grade("Physics", "A-", 880003, 104);
var grade15 = new Grade("Physics", "B-", 880004, 104);
var grade16 = new Grade("Physics", "C-", 880005, 104);

// Adding grades back to the array
gradeList = [grade1, grade2, grade3, grade4, grade5, grade6, grade7,
  grade8, grade9, grade10, grade11, grade12, grade13, grade14, grade15, grade16
];
