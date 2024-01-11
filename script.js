class CgpaCalculation {
    constructor() {
        this.name = '';
        this.regNo = '';
        this.subjects = [];
        this.credits = [];
        this.points = [];
    }

    calculateAverage(...values) {
        return values.reduce((acc, val) => acc + val, 0) / values.length;
    }

    getInput() {
        this.name = document.getElementById('name').value;
        this.regNo = document.getElementById('regNo').value;
    }

    calculateGPA() {
        this.getInput();
        console.clear();
        console.log('-------------- GPA Calculating -----------------');

        const numSubjects = document.getElementById('numSubjects').value;

        this.subjects = [];
        this.credits = [];
        this.points = [];

        for (let i = 0; i < numSubjects; i++) {
            const subjectName = prompt(`Enter the name of subject ${i + 1}:`);
            const credit = prompt(`Enter the credit for ${subjectName}:`);
            const point = prompt(`Enter the point of ${subjectName}:`);

            this.subjects.push(subjectName);
            this.credits.push(Number(credit));
            this.points.push(Number(point));
        }

        const totalCredit = this.credits.reduce((acc, val) => acc + val, 0);
        const totalPoints = this.credits.map((credit, index) => credit * this.points[index]).reduce((acc, val) => acc + val, 0);

        const output = document.getElementById('output');
        output.innerHTML = `${this.name} (${this.regNo}) - Total GPA: ${totalPoints / totalCredit}`;
    }

    calculateCGPA() {
        this.getInput();
        console.clear();
        console.log('-------------- CGPA Calculating -----------------');

        const numSemesters = document.getElementById('numSemesters').value;

        const semesterResults = [];

        for (let i = 0; i < numSemesters; i++) {
            const result = prompt(`Enter Semester ${i + 1} Result (GPA):`);
            semesterResults.push(Number(result));
        }

        const cgpa = this.calculateAverage(...semesterResults);

        const output = document.getElementById('output');
        output.innerHTML = `${this.name} (${this.regNo}) - ******** Your CGPA is ${cgpa} **********`;
    }
}

const cgpaCalculation = new CgpaCalculation();
