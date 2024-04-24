const celciusInput = document.querySelector('.section-celcius textarea');
const farenheitInput = document.querySelector('.section-farenheit textarea');
const resultInput = document.querySelector('.section-result textarea');
const convertButton = document.getElementById('button-convert');
const resetButton = document.getElementById('button-reset');
const reverseButton = document.getElementById('button-reverse');

convertButton.addEventListener('click', convertToFarenheit);
resetButton.addEventListener('click', resetInputs);
reverseButton.addEventListener('click', reverseConversion);


function convertToFarenheit() {
    const celcius = parseFloat(celciusInput.value);
    if (isNaN(celcius)) {
        alert('Silakan masukkan angka yang valid dalam Celcius');
        return;
    }
    const farenheit = (celcius * 9/5) + 32;
    farenheitInput.value = farenheit.toFixed(2);
    resultInput.value = `(${celcius}°C * 9/5) + 32 = ${farenheit.toFixed(2)}°F`;
}

function resetInputs() {
    celciusInput.value = '';
    farenheitInput.value = '';
    resultInput.value = '';
}

function reverseConversion() {
    const farenheit = parseFloat(farenheitInput.value);
    if (isNaN(farenheit)) {
        alert('Silakan masukkan angka yang valid dalam Fahrenheit');
        return;
    }
    const celcius = (farenheit - 32) * 5/9;
    celciusInput.value = celcius.toFixed(2);
    resultInput.value = `(${farenheit}°F - 32) * 5/9 = ${celcius.toFixed(2)}°C`;
}

