console.log("Script Working..");

let celsius = documemt.getElementById('celsius');
let fahrenheit = documemt.getElementById('fahrenheit');
let result = documemt.getElementById('result');
let noValue = documemt.getElementById('noValue');
let noUnit = documemt.getElementById('noUnit');
let button = documemt.getElementById('convert');

function toCelsius(temp) {
    return (temp - 32) * (5/9);
}
function toFahrenheit(temp) {
    return temp * 9 / 5 + 32;
}

button.onclick = function(){
    let val = document.gelElementById('value').value;
    let ans;

    noValue.innerHTML = "";
    noUnit.innerHTML = "";

    if (val =='') {
        noValue.innerHTML ="*must provide a value"
    }

    val =Number(val);

    if(celsius.checked) {
        ans = toCelsius(val).toLocaleString(undefined,{style: 'unit', unit:'celsius', minimumFractionDigits:2,maximumFractionDigits:2})
    } else if (fahrenheit.checked) {
        ans = toFahrenheit(val).toLocaleString(undefined,{style: 'unit', unit:'fahrenheit', minimumFractionDigits:2,maximumFractionDigits:2})
    } else  {
        noUnit.innerHTML = '*must select a unit for conversion';   
    }

    if(ans == undefined) {
        result.innerHTML ="";
    } else {
        result.innerHTML = ans;
    }
}
