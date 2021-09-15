const averageExams = (valueExams)=>{
	const isValid = valueExams.every((value)=> typeof(value) == 'number');
	
	if(!isValid) throw new Error("Please input number");

	const total = valueExams.reduce((acc,curr)=> acc+curr,0);
	return total/valueExams.length;

};

const isPassExam = (valueExams, name)=>{
	const min = 75;
	const average = averageExams(valueExams);

	if(average > min){
		console.log(`${name} is passed`);
		return true;
	}
	else{
		console.log(`${name} is failed`);
		return false;
	}
};

module.exports ={averageExams, isPassExam};