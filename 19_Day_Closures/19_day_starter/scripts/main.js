// console.log(countries)
// alert('Open the console and check if the countries has been loaded')


// Exercise Level 1

// Exercise 1
function outerFunction() {
    let outerValue = 'I am from the outer function';
  
    function innerFunction() {
      console.log(outerValue);
    }
  
    // Return the inner function
    return innerFunction;
  }
  
  const closure = outerFunction();
  
  closure(); // Outputs: "I am from the outer function"
  
// Exercise Level 2
// Exercise 1

function outerFunction() {
    let outerValue = 'I am from the outer function';
  
    function firstInnerFunction() {
      console.log(outerValue + ' - First Inner Function');
    }
  
    function secondInnerFunction() {
      console.log(outerValue + ' - Second Inner Function');
    }
  
    function thirdInnerFunction() {
      console.log(outerValue + ' - Third Inner Function');
    }
  
    // Return an object with all three inner functions
    return {
      first: firstInnerFunction,
      second: secondInnerFunction,
      third: thirdInnerFunction,
    };
  }
  
  // Create a closure by calling the outer function
  const closure = outerFunction();
  
  // Call the inner functions to access the outer value
  closure.first();  // Outputs: "I am from the outer function - First Inner Function"
  closure.second(); // Outputs: "I am from the outer function - Second Inner Function"
  closure.third();  // Outputs: "I am from the outer function - Third Inner Function"
  


