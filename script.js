let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let input3 = document.getElementById("input3");

input1.addEventListener('input', function celsiusConvert(){
    input2.value= parseFloat(input1.value)*9/5+32;
    input3.value = parseFloat(input1.value) + 273.15;
    console.log(input3.value);
});
input2.addEventListener('input', function fahrenhaitConvert(){
    input1.value = (parseFloat(input2.value)-32)*5/9;
    input3.value = (parseFloat(input2.value)-32)*5/9 + 273.15;
});
input3.addEventListener('input', function kelvinConvert(){
    input1.value = parseFloat(input3.value) - 273.15;
    input2.value = (parseFloat(input3.value) - 273.15)*9/5+32;
});
