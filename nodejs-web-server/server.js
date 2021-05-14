const http = require('http');

const listener = (request, response)=>{
	response.setHeader("Content-Type", "text/html");

	response.statuscode=200;
	switch(request.method){
		case "GET":
			response.end("<h1>Halo, HTTP GET server!</h1>");
			break;
		case "PUT":
			response.end("<h1>Halo, HTTP PUT server!</h1>");
			break;
		case "POST":
			let body =[];

			request.on('data',(chunk)=>{
				body.push(chunk);
			});


			request.on('end', ()=>{
				body = Buffer.concat(body).toString();
				response.end(`Halo, ${JSON.parse(body).name}`);
			});
			break;
		case "DELETE":
			response.end("<h1>Halo, HTTP DELETE server!</h1>");
			break;
		default:
			response.end("<h1>BAD REQUEST!!</h1>");
			break;
	}
	
}


const server = http.createServer(listener);

const port = 5000;
const host= 'localhost';

server.listen(port, host, ()=>{
	console.log(`Server sedang berjalan pada http://${host}:${port}`);
});