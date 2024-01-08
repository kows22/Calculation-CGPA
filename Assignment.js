class CgpaCalculation {
    constructor() {
        this.credits = [];
        this.points = [];
    }

    calculateAverage(...values) {
        return values.reduce((acc, val) => acc + val, 0) / values.length;
    }

    calculateGPA() {
        console.clear();
        console.log('-------------- GPA Calculating -----------------');

        const numSubjects = prompt('How many subjects do you want to calculate? ');

        console.log();
        for (let i = 0; i < numSubjects; i++) {
            const credit = prompt(`Enter the credit for subject ${i + 1}: `);
            const point = prompt(`Enter the point of subject ${i + 1}: `);

            this.credits.push(Number(credit));
            this.points.push(Number(point));

            console.log('-----------------------------------\n');
        }

        const totalCredit = this.credits.reduce((acc, val) => acc + val, 0);
        const totalPoints = this.credits.map((credit, index) => credit * this.points[index]).reduce((acc, val) => acc + val, 0);

        console.log(`Total GPA: ${totalPoints / totalCredit}.\n`);
        
        this.subMenu();
    }

    calculateCGPA() {
        console.clear();
        console.log('-------------- CGPA Calculating -----------------\n');

        const numSemesters = prompt('How many semester results do you want to input? ');

        const semesterResults = Array.from({ length: numSemesters }, (_, i) => {
            console.log();
            return prompt(`Enter Semester ${i + 1} Result (GPA): `);
        });

        const cgpa = this.calculateAverage(...semesterResults.map(Number));

        console.log(`******** Your CGPA is ${cgpa} **********\n`);
        
        this.subMenu();
    }

    subMenu() {
        const userInput = prompt('1. Calculate GPA\n2. Calculate CGPA\n3. Exit \n\nYour Input: ');

        switch (parseInt(userInput)) {
            case 1:
                this.calculateGPA();
                break;
            case 2:
                this.calculateCGPA();
                break;
            case 3:
                process.exit(0);
                break;
            default:
                console.log('\nWrong Input! Please Choose Again!');
                this.subMenu();
        }
    }

    mainMenu() {
        console.clear();
        console.log('MENU:');
        console.log('1. Calculate GPA');
        console.log('2. Calculate CGPA');
        
        const userInput = prompt('Enter your choice: ');

        switch (parseInt(userInput)) {
            case 1:
                this.calculateGPA();
                break;
            case 2:
                this.calculateCGPA();
                break;
            default:
                console.log('Wrong input, Try again!\n');
                this.mainMenu();
                break;
        }
    }
}

const cgpaCalculation = new CgpaCalculation();
cgpaCalculation.mainMenu();
