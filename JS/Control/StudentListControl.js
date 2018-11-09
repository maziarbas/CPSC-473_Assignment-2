// this is the control module which handles the student grade code here
window.onload = function() {
  document.getElementById("myBtn").addEventListener("click", function(event) {

    var selected = document.getElementById('lastName').value;

    target = [];

    for (var i = 0; i < studentList.length; i++) {
      var studentLastName = studentList[i].getLastName();
      if (studentLastName === selected) {
        target.push(studentList[i]);

      }
    }
    if (target === undefined || target.length == 0) {
      function myFunction() {
        alert("Last Name Does Not Exist");
      }
    }
    gradeListremover();
    studentListGenerator();
    event.preventDefault();

  });
}

function gradeDataSet(id) {
  targetGrades = [];
  for (var i = 0; i < gradeList.length; i++) {
    if (gradeList[i].getStudentId() == id) {
      targetGrades.push(gradeList[i]);
    }
  }
  gradeListGenerator();
}
