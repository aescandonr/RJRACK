class Tarea2{
   perfecto(num){
      let sumaDivisores = 0;
      for (let i = 1; i < num; i++) {
      if (num % i == 0) {
      sumaDivisores += i;
  }
  }
    return sumaDivisores == num;
  }
  sumaNumerosPerfectos(serie){
      serie = [6, 5, 25, 24, 28];
      let sumaPerfectos = 0;
      for (let i = 0; i < serie.length; i++) {
          if (this.perfecto(serie[i])) {
          sumaPerfectos += serie[i];
  }
  }
  let $resp= document.getElementById("resp");
  $resp.textContent= `La serie es: ${serie} \n La suma de los números perfectos es: ${sumaPerfectos}`
  return sumaPerfectos;

  }
  primo(numero){
   for (let i = 2; i <= Math.sqrt(numero); i++) {
       if (numero % i === 0) {
       return false;
       }
   }
   return true && numero !== 1;
}
numPrimos(){
   let $resp=document.getElementById("resp")
   let serie = [6, 5, 25, 7, 28];
   let primos = [];
   for (let i = 0; i < serie.length; i++) {
   if (this.primo(serie[i])) {
       primos.push(serie[i]);
   }
   }
   $resp.textContent=`La serie es: ${serie}\n Los números primos son: ${primos}` 
   return primos;
}
 factorial(num){
    let resul=1, c=1
        for(c;c<=num;c++){
            resul=resul*c
        }
     return resul
 }
 factonum(){
    let num1=parseInt(document.getElementById("num1").value)
    let $resp=document.getElementById("resp")
    let fac=this.factorial(num1)
    $resp.textContent=`El factorial de ${num1} es: ${fac}`
 }
 factorialarre(){
   let $resp=document.getElementById("resp")
        let arreglo = [3, 2, 4];
        let factoriales = [];
        for (let i = 0; i < arreglo.length; i++) {
        let resultado = 1;
       resultado*=this.factorial(arreglo[i])
        factoriales.push(resultado);
        }
    $resp.textContent = `El arreglo es: ${arreglo}\nLos factoriales del arreglo: ${factoriales}`;
    return factoriales.join(",");
 }
 limpiar(){
    let d=document
    d.getElementById('num1').value=""
    d.getElementById('num2').value=""
    d.getElementById('resp').textContent=""
 }
 retornarArreglo() {
   let numero = parseInt(document.getElementById("num1").value);
   let numerostring= numero.toString();
   let $resp = document.getElementById("resp");
   let digitos = [], i=0;
   for(i = numerostring.length - 1; i>=0; i--){
       digitos.push(parseInt(numerostring[i]));
   }
   $resp.textContent=`[${digitos}]`
   return digitos;
}
sumaDeDigitos(){
   let numero =parseInt(document.getElementById("num1").value);
   let digitos = this.retornarArreglo(numero)
   let $resp = document.getElementById("resp");
   let suma =0, i=0
   for(i; i< digitos.length;i++){
       suma+=digitos[i]
   }
   $resp.textContent= `La suma de los dígitos es: ${suma}`;
   return suma;
}
digitosPares(){
    let numero =document.getElementById("num1").value;
    let digitos = this.retornarArreglo(numero)
    let pares=[], i=0;
    let $resp = document.getElementById("resp");
    for(i; i<digitos.length;i++){
        if(digitos[i] % 2 === 0){
            pares.push(digitos[i]);
        }
    }
    $resp.textContent=`Los dígitos pares son: ${pares.reverse()}`
    return pares;
}
primerDigito(){
    let numero =document.getElementById("num1").value;
    let digitos = this.retornarArreglo(numero).reverse()
    let $resp = document.getElementById("resp");
    $resp.textContent= `El primer dígito es: ${digitos[0]}`
    return digitos[0];
}
ulDigito(){
    let numero =document.getElementById("num1").value;
        let digitos = this.retornarArreglo(numero).reverse()
        let $resp = document.getElementById("resp");
        $resp.textContent=`El último dígito es: ${digitos[digitos.length-1]}`
        return digitos[digitos.length - 1];
 }
baseexponente(){
    let base= parseInt(document.getElementById("num1").value);
    let exponente= parseInt(document.getElementById("num2").value);
    let i=0, resp;
    for(i; i< exponente; i++){
        resp = base**exponente;
    }
    document.getElementById("resp").textContent= resp;
    return resp;
}
exponentePropio() {
    const numeros = [4, 3, 2, 5];
    const resultados = [];
    for (let i = 0; i < numeros.length; i++) {
    const base = numeros[i];
    const exponente = numeros[i];
    let resultado = 1;
    for (let j = 0; j < exponente; j++) {
    resultado= base**numeros[i];
}
resultados.push(resultado);
}
const resultadoFinal = resultados.join(", ");
document.getElementById("resp").textContent = `El arreglo es:\n${numeros}\n La potencia de cada número del arreglo es:\n${resultadoFinal}`;
return resultadoFinal;
}
tablaMultiplicar(){
    let d = document;
    let base = d.getElementById("num1").value;
    base = parseFloat(base);
    let i = 1;
    let tabla = "";
    for (i; i <= 12; i++) {
    tabla += `${base}x${i}=` + base * i + "\n"
    d.getElementById("resp").textContent =`Tabla de multiplicar del ${base} \n${tabla}`;
}
}
divisoresValorInicial(){
    let valorInicial= parseInt(document.getElementById("num2").value);
    let numero = parseInt(document.getElementById("num1").value);
    let $resp = document.getElementById("resp");
    let divisores = [];
    for (let i = valorInicial; i < numero; i++) {
    if (numero % i === 0) {
        divisores.push(i);
    }
    }
    $resp.textContent = divisores;
    return divisores;
}
sumaDivisores(){
    let numero = parseInt(document.getElementById("num1").value);
    let valorInicial = parseInt(document.getElementById("num2").value);
    let divisores = this.divisoresValorInicial(numero, valorInicial);
    let suma = 0;
    for (let i = 0; i < divisores.length; i++) {
    suma += divisores[i];
}
    let $resp = document.getElementById("resp");
    $resp.textContent =`La suma de los divisores de ${numero} y ${valorInicial} es: [${suma}]`;
    return suma;
}
numerosRango(num1, num2) {
    let resultado = [];
    for (let i = num1; i < num2; i++) {
    resultado.push(i);
    }
    return resultado;
}
arregloRango() {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let $resp = document.getElementById("resp");
    let resp = this.numerosRango(num1, num2);
    $resp.textContent =`[${resp}]`;
}
}
let ejer=new Tarea2()
ejer.ultdig()
ejer.retornarArreglo()
ejer.sumaDeDigitos()
ejer.factorialarre()
ejer.limpiar()
ejer.sumaNumerosPerfectos()
ejer.numPrimos()
ejer.factonum()
ejer.digitosPares()
ejer.primerDigito()
ejer.baseexponente()
ejer.exponentePropio()
ejer.tablaMultiplicar()
ejer.divisoresValorInicial()
ejer.sumaDivisores()
ejer.arregloRango()