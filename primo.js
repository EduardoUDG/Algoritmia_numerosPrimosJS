
// Numeros primos
/*
* Numeros Enteros
* Solo tienen DOS DIVISORES: El numero 1  y ellos mismos
* El resultado al dividir tiene que ser numero entero

? EL UNICO numero que es (par y primo) es el == 2
*/

// ! Ejemplo

// * Primo
// 2 / 2 = 1 
// 2 / 1 = 2 

// * Primo
// 3 / 3 = 1 
// 3 / 1 = 3 

// !Este ya no es primo (Porque tiene más de dos divisores)
// 4 / 4 = 1 
// 4 / 1 = 4 
// 4 / 2 = 2

// * Primo
// 5 / 5 = 1 
// 5 / 1 = 5 


// let numero = 1;
const numeroPrimo = (num) => {
    console.time('loop'); 
    // let num = null;
    
    let x = 1;
    let contador = 0;
    
    while(x<=num){
        
        if(num%x==0){
            contador += 1;
        }
        x += 1;
    }
    
    if (contador == 2) {
        console.log(`El numero ${num} SI es primo`); 
    } else {
        console.log(`El numero ${num} NO es primo`);
    }
    console.timeEnd('loop'); 
}


const segundoPrimo = (num) => {
    console.time('loop'); 
    
    let flag = true;

    for (let i = 2; i <= Math.sqrt(num) && flag ; i++) {
        if (num%i==0) {
            flag = false;
        }
    }    

    console.log( flag ? `${num} Si es primo` : `${num} No es primo` );
    console.timeEnd('loop'); 
}


segundoPrimo(1);
numeroPrimo(1);


/* 
1.Declaramos una variable "x" y la igualamos a 1
2.Declaramos otra variable "contador" y la igualamos a cero
3.Declaramos la variable "numero"
4.Pedimos el valor de la variable "numero"
5.Creamos una iteracion, con la condicional "x" menor o igual a "numero"
6.Dentro de la iteracion, escribimos el condicional (numero MOD == 0) en casi de ser V, contador aumenta +1
7.X aumenta +1
*/