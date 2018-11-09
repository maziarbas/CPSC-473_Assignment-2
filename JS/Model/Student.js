// This file defines the student constructor and builds some objects
function Student(fName,lName,id){
  this.fName=fName;
  this.lName=lName;
  this.id=id;


  this.getId=function(){ return this.id};
  this.getLastName=function(){return this.lName};

  this.getFullName=function(){return this.fName + " "+ this.lName};
}

var student1 = new Student("Farnaz","Bastani",880001);
var student2 = new Student("Maziar","Bastani",880002);
var student3 = new Student("Mehrad","Bastani",880003);
var student4 = new Student("James","Caplan",880004);
var student5 = new Student("John","Boucher",880005);
var student6 = new Student("Jogn","Caplan",880006);


studentList=[student1,student2,student3,student4,student5,student6];
