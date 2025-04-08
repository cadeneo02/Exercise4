// Returns a Promise that resolves with array of numbers
function getNumbers() {
    return new Promise((resolve, reject) => {
      const numbers = [3, 6, 9, 12, 15];
      console.log("Step 1: Original numbers:", numbers);
      resolve(numbers);
    });
  }
  
  // Takes array and returns a Promise that resolves with each number doubled
  function doubleNumbers(numbers) {
    return new Promise((resolve, reject) => {
      if (!Array.isArray(numbers)) {
        reject("Input to doubleNumbers must be an array.");
        return;
      }
      const doubled = numbers.map(num => num * 2);
      console.log("Step 2: Doubled numbers:", doubled);
      resolve(doubled);
    });
  }
  
  // Takes array and returns a Promise that resolves with sum of numbers
  function sumNumbers(numbers) {
    return new Promise((resolve, reject) => {
      if (!Array.isArray(numbers)) {
        reject("Input to sumNumbers must be an array.");
        return;
      }
      const sum = numbers.reduce((total, num) => total + num, 0);
      console.log("Step 3: Sum of numbers:", sum);
      resolve(sum);
    });
  }
  
  // Chain the promises together with error
  getNumbers()
    .then(doubleNumbers)
    .then(sumNumbers)
    .then(finalResult => {
      console.log("Final Number:", finalResult);
    })
    .catch(error => {
      console.error("Error", error);
    });  