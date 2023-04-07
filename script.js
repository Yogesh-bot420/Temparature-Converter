const celsiusInput = document.getElementById("celsius-input");
const fahrenheitInput = document.getElementById("fahrenheit-input");
const convertBtn = document.getElementById("convert-btn");

function convertToFahrenheit(celsius) {
  return celsius * 1.8 + 32;
}

function convertToCelsius(fahrenheit) {
  return (fahrenheit - 32) * (5 / 9);
}

convertBtn.addEventListener("click", () => {
  const celsius = parseFloat(celsiusInput.value);
  if (isNaN(celsius)) {
    return;
  }
  const fahrenheit = convertToFahrenheit(celsius);
  fahrenheitInput.value = fahrenheit.toFixed(2);
});

fahrenheitInput.addEventListener("input", () => {
  const fahrenheit = parseFloat(fahrenheitInput.value);
  if (isNaN(fahrenheit)) {
    return;
  }
  const celsius = convertToCelsius(fahrenheit);
  celsiusInput.value = celsius.toFixed(2);
});
