document.addEventListener("DOMContentLoaded", function () {
    const convertButton = document.getElementById("convertButton");
    const temperatureInput = document.getElementById("temperatureInput");
    const unitSelect = document.getElementById("unitSelect");
    const resultElement = document.getElementById("result");

    convertButton.addEventListener("click", function () {
        const temperature = parseFloat(temperatureInput.value);

        if (isNaN(temperature)) {
            resultElement.textContent = "Please enter a valid number.";
            return;
        }

        const selectedUnit = unitSelect.value;
        let convertedTemperature = 0;
        let resultUnit = "";

        if (selectedUnit === "celsius") {
            convertedTemperature = (temperature - 32) * (5 / 9);
            resultUnit = "Celsius";
        } else if (selectedUnit === "fahrenheit") {
            convertedTemperature = (temperature * 9/5) + 32;
            resultUnit = "Fahrenheit";
        } else if (selectedUnit === "kelvin") {
            convertedTemperature = temperature + 273.15;
            resultUnit = "Kelvin";
        }

        resultElement.textContent = `Converted Temperature: ${convertedTemperature.toFixed(2)} ${resultUnit}`;
    });
});
