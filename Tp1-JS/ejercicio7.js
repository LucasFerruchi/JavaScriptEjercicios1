// 7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.

let num1 = prompt ("Escriba un número");
let num2 = prompt ("Escriba otro número");
let num3 = prompt("Escriba otro número");
if (num1>num2 && num1>num3){
    document.write("el número mayor es "+num1);
    
}else if(num2>num3){
    document.write("El número mayor es "+num2);
}else{
    document.write("El número mayor es "+num3);
};
