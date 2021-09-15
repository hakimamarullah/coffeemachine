const {averageExams, isPassExam} = require("../gradeCalculations");

test("It should return exact value",()=>{
	const scores =  [80, 100, 100, 80];

	expect(averageExams(scores)).toEqual(90);});

test("It should return true",()=>{
	const scores =  [80, 100, 100, 80];

	expect(isPassExam(scores,"Nisdar")).toBeTruthy();});