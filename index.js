const stock = {
	beans: 0,
	water: 10
}

const checkStock = new Promise((resolve, reject)=>
	{
		if(stock.water>150 && stock.beans >90)
			resolve("Stok cukup");
		else
			reject("Stok tidak cukup");
});

const successMake = (resolved)=>{console.log(resolved);}
const failMake = (rejected)=>{console.log(rejected);}

checkStock.then(successMake, failMake);