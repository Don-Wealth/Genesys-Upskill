// Create a function that will be able to convert figures from Fahrenheit to Celsius.
function fahrenheitToCelsius(fahrenheit) {
  let celsius = (fahrenheit - 32) * 5/9;
  return celsius;
}

let temperatureInFahrenheit = 50;
let temperatureInCelsius = fahrenheitToCelsius(temperatureInFahrenheit);

console.log(temperatureInFahrenheit + "°F is equal to " + temperatureInCelsius + "°C"); // fahToCel(10°C)


// Create a function that will calculate the average of numbers in an array.
function calculateAverage(numbers) {
    if (numbers.length === 0) {
        return 0;
    }

    let sum = 0;

    for (let i=0; i < numbers.length; i++) {
        sum += numbers[i]
    }

    let average = sum / numbers.length;

    return average;
}

let numbers = [10, 20, 30, 40, 50];
let result = calculateAverage(numbers);

console.log(result); //calculateAverage(30)

//Create a function that checks if a number, n is divisible by two numbers x and y. All inputs are positive, non-zero digits.