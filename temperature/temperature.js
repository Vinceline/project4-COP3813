// Wait for the DOM content to be fully loaded before executing
window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
   // Get references to the input fields and the convert button
   const cInput = document.getElementById('cInput');
   const fInput = document.getElementById('fInput');
   const convertButton = document.getElementById('convertButton');
   const errorMessage = document.getElementById('errorMessage');
   const weatherImage = document.getElementById('weatherImage');

   // Add click event listener to the convert button
   convertButton.addEventListener('click', handleClick);

   // Input event listeners to clear the opposing input field
   cInput.addEventListener('input', function () {
      fInput.value = ''; // Clear Fahrenheit input
      handleInputValidation(cInput.value);
   });

   fInput.addEventListener('input', function () {
      cInput.value = ''; // Clear Celsius input
      handleInputValidation(fInput.value);
   });
}

function handleInputValidation(inputValue) {
   const errorMessage = document.getElementById('errorMessage');

   if (isNaN(parseFloat(inputValue))) {
      errorMessage.textContent = `${inputValue} is not a number`;
      updateTemperatureImage(null); // Clear image when input is invalid
   } else {
      errorMessage.textContent = '';
      updateTemperatureImage(parseFloat(inputValue));
   }
}

function updateTemperatureImage(degreesFahrenheit) {
   const weatherImage = document.getElementById('weatherImage');
   let imageName = '';

   if (degreesFahrenheit === null) {
      weatherImage.src = ''; // Clear image source if temperature is invalid
      return;
   }

   if (degreesFahrenheit < 32) {
      imageName = 'cold.png';
   } else if (degreesFahrenheit >= 32 && degreesFahrenheit <= 50) {
      imageName = 'cool.png';
   } else {
      imageName = 'warm.png';
   }

   weatherImage.src = `images/${imageName}`;
}

// Conversion functions
function convertCtoF(degreesCelsius) {
   return parseFloat(degreesCelsius * 9 / 5 + 32);
}

function convertFtoC(degreesFahrenheit) {
   return parseFloat((degreesFahrenheit - 32) * 5 / 9);
}

function handleClick() {
   // Get the input values
   const celsiusValue = parseFloat(document.getElementById('cInput').value);
   const fahrenheitValue = parseFloat(document.getElementById('fInput').value);

   // Check which input has a value and convert accordingly
   if (!isNaN(celsiusValue)) {
      const convertedF = convertCtoF(celsiusValue);
      document.getElementById('fInput').value = convertedF; // Display converted value
      updateTemperatureImage(convertedF);
   } else if (!isNaN(fahrenheitValue)) {
      const convertedC = convertFtoC(fahrenheitValue);
      document.getElementById('cInput').value = convertedC; // Display converted value
      updateTemperatureImage(fahrenheitValue);
   } else {
      alert("Please enter a valid number in one of the fields.");
   }
}
