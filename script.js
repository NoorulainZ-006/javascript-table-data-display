const course_Data = [
  { course_name: "Programming Fundamentals", obtained_marks: 80, total_marks: 100 },
  { course_name: "Database Systems", obtained_marks: 84, total_marks: 100 },
  { course_name: "Discrete Structures", obtained_marks: 74, total_marks: 100 },
  { course_name: "Computer Networks", obtained_marks: 82, total_marks: 100 },
  { course_name: "Software Engineering", obtained_marks: 92, total_marks: 100 },
];

let CourseData = course_Data.map((c) => {
  let percent = Math.round((c.obtained_marks / c.total_marks) * 100);
  let grade =
    percent >= 90 ? "A+" :
    percent >= 80 ? "A-" :
    percent >= 75 ? "B+" :
    percent >= 70 ? "B" : "C";
  let remarks =
    percent >= 90 ? "Excellent" :
    percent >= 80 ? "Very Good" :
    percent >= 70 ? "Satisfactory" :
    "Needs Improvement";

  return `<tr>
    <td>${c.course_name}</td>
    <td>${percent}%</td>
    <td>${grade}</td>
    <td>${remarks}</td>
  </tr>`;
});

document.getElementById("output").innerHTML = `
<thead>
  <tr>
    <th>Course Name</th>
    <th>Percentage</th>
    <th>Grade</th>
    <th>Remarks</th>
  </tr>
</thead>
<tbody>
  ${CourseData.join("")}
</tbody>`;
