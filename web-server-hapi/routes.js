const routes = [
	{
		method:'GET',
		path: '/',
		handler: (request, h)=>{
			return "Homepage";
		}
	},
	{
		method:'*',
		path: '/',
		handler: (request, h)=>{
			return `Method ${request.method} for this path return nothing`;
		}
	},
	{
		method:'GET',
		path: '/about',
		handler: (request, h)=>{
			return "About Page";
		}
	},
	{
		method:'GET',
		path: '/hello/{username?}',
		handler: (request, h)=>{
		const { username="Stranger" } = request.params;
			return `Hello, ${username}`;
		}
	},
	{
		method:'*',
		path: '/about',
		handler: (request, h)=>{
			return `Method ${request.method} for this path return nothing`;
		}
	},
	{
		method:"*",
		path: "/{any*}",
		handler: (request, h)=>{
			return `Page Not Found`;
		}
	}

];

module.exports = routes;