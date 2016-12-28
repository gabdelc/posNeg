function calcular(){
    var num1 = document.getElementById("num_1");
    var num2 = document.getElementById("num_2");
    var salida = document.getElementById("salida");
    
    var numa = num1.value;
    var numb = num2.value;
    
    if (numa > 0 && numb > 0){
        salida.innerHTML = "0";
    }else{
        salida.innerHTML = "1";
    }
}
