const students = [
  { name: "kyeongrok", score: 85 },
  { name: "jihyun", score: 95 },
  { name: "minsup", score: 76 },
];
function getDegree(score) {
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 60) {
    return "C";
  } else {
    return "F";
  }
}

students.forEach((grade) => {
  const result = `name: ${grade.name}, score: ${getDegree(grade.score)}`;
  console.log(result);
});
