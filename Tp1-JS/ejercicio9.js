// 9.- Escribe un programa que pida una frase y escriba las vocales que aparecen

//opcion 1 

//let frase = prompt("Escriba una frase");
//frase = frase.toLowerCase();
//console.log(frase);
//for (let i = 0; i < frase.length; i++) {
//  if (
//    frase.substring(i, i + 1) == "a" ||
//    frase.substring(i, i + 1) == "e" ||
//    frase.substring(i, i + 1) == "i" ||
//    frase.substring(i, i + 1) == "o" ||
//    frase.substring(i, i + 1) == "u"
//  ) {
//    document.write(frase.substring(i, i + 1));
//  }
//}

//opcion 2

let frase=prompt("Escribe una frase");
frase=frase.toLowerCase();


for(let vocal=0; vocal<frase.length; vocal++){
if(
       frase.charAt(vocal)=="a"||
       frase.charAt(vocal)=="e"||
       frase.charAt(vocal)=="i"||
       frase.charAt(vocal)=="o"||
       frase.charAt(vocal)=="u"
   ){
       document.write(frase.charAt(vocal));
   }
}
