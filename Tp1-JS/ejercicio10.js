 //10- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 
 //(sólo hay que comprobar si lo es por uno de los cuatro)

 let num=prompt("Escriba un número");
 if(num%2==0||num%3==0||num%5==0||num%7==0){
    document.write("El número es divisible por 2, 3, 5 o 7 ");
 }else{
    document.write("El número no es divisible por 2, 3, 5, o 7");
 }