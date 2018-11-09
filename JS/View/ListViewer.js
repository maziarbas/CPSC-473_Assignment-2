// this JS is part of the view module for

// this function generates the html part for student list
function studentListGenerator() {
  var ul = document.getElementById("studentList");

  // As long as <ul> has a child node, remove it
  while (ul.hasChildNodes()) {
    ul.removeChild(ul.firstChild);
  }

  for (var i = 0; i < target.length; i++) {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(target[i].getFullName()));
    li.setAttribute("id", target[i].getId());
    li.setAttribute("onclick", "gradeDataSet(" + target[i].getId() + ")"); // added line
    ul.appendChild(li);
  }
}

// this function generates the html part for grade list
function gradeListGenerator() {
  var ul2 = document.getElementById("gradeList");

  // As long as <ul> has a child node, remove it
  while (ul2.hasChildNodes()) {
    ul2.removeChild(ul2.firstChild);
  }

  for (var i = 0; i < targetGrades.length; i++) {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(targetGrades[i].courseInfo()));
    li.setAttribute("id", targetGrades[i].getCourseid());

    ul2.appendChild(li);
  }
}

// this function deletes the old generated html part for grade list
function gradeListremover() {
  var ul2 = document.getElementById("gradeList");

  // As long as <ul> has a child node, remove it
  while (ul2.hasChildNodes()) {
    ul2.removeChild(ul2.firstChild);

  }
}
