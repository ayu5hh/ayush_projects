console.log("Welcome to Temp. - Cnvertor")

let celsiusInput = document.getElementById('celsius');
let fahrenheitInput = document.getElementById('fahrenheit');

celsiusInput.addEventListener('input',function(){
    let ctemp = parseFloat(celsiusInput.value);
    let ftemp = (ctemp*(9/5)) + 32;

    fahrenheitInput.value = ftemp;
})

fahrenheitInput.addEventListener('input',function(){
    let ftemp = parseFloat(fahrenheitInput.value);
    let ctemp = (ftemp - 32) * (5/9);

    celsiusInput.value = ctemp;
})
