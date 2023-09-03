console.log(countries)
alert('Open the console and check if the countries has been loaded')

// Exercise 1
const text = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.';
const regex = /\b(\d+)\s+euro\b/g; 
let match;
let totalIncome = 0;

while ((match = regex.exec(text)) !== null) {
  const monthlyIncome = parseInt(match[1], 10);
  totalIncome += monthlyIncome;
}

const annualIncome = totalIncome * 12;

console.log(`Total Annual Income: ${annualIncome} euro`);

// Exercise 2
const points = ['-1', '2', '-4', '-3', '-1', '0', '4', '8'];
const pattern = /-?\d+/g;

const numbers = points.map(point => parseInt(point.match(pattern)[0]));

const sortedPoints = numbers.sort((a, b) => a - b);

const distance = sortedPoints[sortedPoints.length - 1] - sortedPoints[0];

console.log(`Sorted Points: ${sortedPoints}`);
console.log(`Distance between furthest particles: ${distance}`);

// Exercise 3
function is_valid_variable(variableName) {
    const pattern = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/;
    return pattern.test(variableName);
  }
  
  console.log(is_valid_variable('first_name'));    // True
  console.log(is_valid_variable('first-name'));    // False
  console.log(is_valid_variable('1first_name'));    // False
  console.log(is_valid_variable('firstname'));    // True

// 

