 // 11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible 
 //(hay que decir todos por los que es divisible)

  let num=prompt("Escriba un número");
  if(num%2==0||num%3==0||num%5==0||num%7==0){
    if(num%2==0){
        document.write("Es divisible por 2");
    }
    if(num%3==0){
        document.write("Es divisible por 3");
    }
    if(num%5==0){
        document.write("Es divisible por 5");
    }
    if(num%7==0){
        document.write("Es divisible por 7");
    }
  }else{
    document.write("No es divisible por 2, 3, 5 o 7");
  }
