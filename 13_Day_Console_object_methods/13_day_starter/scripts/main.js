// console.log(countries)
// alert('Open the console and check if the countries has been loaded')


// Exercise 1
console.table(countries)

// Exercise 2
console.table([countries])

//Exercise 3
for (const country of countries) {
    console.group(`Country: ${country.name}`);
    console.group('Basic Information');
    console.log(`Capital: ${country.capital}`);
    console.log(`Population: ${country.population}`);
    console.log(`Currency: ${country.currency}`);
    console.groupEnd(); // End of Basic Information group
  
    console.group('Languages Spoken');
    for (const language of country.languages) {
      console.log(language);
    }
    console.groupEnd(); // End of Languages Spoken group
  
    console.groupEnd(); // End of Country group
  }

                                // Exercise Level 2
// Exercise 1
console.assert(10 > 2 * 10, '10 is not greater than 2 times 10');

// Exercise 2
console.warn('This is a warning');

//Exercise 3
console.error('This is an error');




                                // Exercise Level 3
// Exercise 1
const largeArray = Array.from({ length: 1000000 }, (_, index) => index + 1);

// Measure the time taken by a while loop
console.time('while');
let i = 0;
while (i < largeArray.length) {
  i++;
}
console.timeEnd('while');

// Measure the time taken by a for loop
console.time('for');
for (let j = 0; j < largeArray.length; j++) {
  // Accessing elements: largeArray[j]
}
console.timeEnd('for');

// Measure the time taken by a for...of loop
console.time('for...of');
for (const item of largeArray) {
  // Accessing elements: item
}
console.timeEnd('for...of');

// Measure the time taken by a forEach loop
console.time('forEach');
largeArray.forEach(item => {
  // Accessing elements: item
});
console.timeEnd('forEach');


