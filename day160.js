/* Mini project. Build a simple student grade book:
Object with student name and array of grades
Method to add a grade
Method to get average grade
Method to get highest grade
Method to get lowest grade
 */
const student = {
  name: "Noorsaba",
  grades: [85, 90, 78],

  // Adds a grade to the array
  addGrade: function (grade) {
    this.grades.push(grade);
  },

  // Calculates the average of all grades
  getAverage: function () {
    let sum = 0;
    for (const num of this.grades) {
      sum += num;
    }
    return sum / this.grades.length;
  },

  // Finds the highest grade
  getHighest: function () {
    return Math.max(...this.grades);
  },

  // Finds the lowest grade
  getLowest: function () {
    return Math.min(...this.grades);
  },
};

student.addGrade(95);

console.log(student.getAverage()); // Output: 87
console.log(student.getHighest()); // Output: 95
console.log(student.getLowest()); // Output: 78
