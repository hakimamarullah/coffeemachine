const initialMemoryUsage = process.memoryUsage().heapUsed;
const yourName = process.argv[2];
const environment = process.env.NODE_ENV;

for(let i=0; i<=10000; i++){

}

const currentMemory = process.memoryUsage().heapUsed;

console.log(`Hai ${yourName}`);
console.log(`Mode env: ${environment}`);
console.log(`Memory Usage from ${initialMemoryUsage} to ${currentMemory}`);
