const fs = require('fs');
const path = require('path');

const readStream = fs.createReadStream(path.resolve(__dirname,'todo.txt'), {highWaterMark:15});
const writable = fs.createWriteStream('out.txt');

readStream.on('readable', ()=>{
	try{
		writable.write(`${readStream.read()}\n`);

		
	}
	catch(e){
		console.log(e.message);
	}
});

readStream.on('end',()=>{console.log("Done");});


