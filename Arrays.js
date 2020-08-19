const c = alert
const ci = console.log

let ar = ['Hola','Cielo',"Como","Estas"];

//c(ar[0]);

//  Desestructuracion   //

let[a1,a2,a3,a4]=ar;    //igualamos valores en una linea

//  Agregar y Quitar   //

ar.push("Te quiero")//agregar
ar.pop();           //Quitar

ar.unshift("Nick Dice") //Agrega al inicio de la fila
ar.shift()              //Elimina el primer elemento 

//splice(locacion,cuantos elemntos elimiminamos,"agregar","ahregar"...)

ar.splice(1,0,"Bonita")

ar.slice(2,4);  //  No modifica el Array original

const revertText = string => string.split("").reverse().join("")

let ab = ["A","Z","Q","B","2","1"];
ab.sort()   //Ordena de orden alfabetico 
ab.sort().reverse()

let numbers=[2,5,8,4,7,8,0,1,8]
numbers.sort((a,b)=> a-b)   //Algoritmo que pregunta quien es mayor 

numbers.join(",")   //separa de acuerdo a lo requerido

//  Unir Arrays //
let num = [2,8,4,8,8,2,1,4,8,2,0,0,5145644,461]
numbers.concat(num)


//  Encontrar Posicion     //

num.indexOf(8)

num.find( num =>  num > 100)    //primer valos mayor a 100 
//5145644
//finidex lo mismo solo que esta vez muetra el indice

c(ar[2]);

//Eliminar Duplicados   //
new Set(num)

const removeDuplicates = arr => [...new Set(arr)]   //Remueve duplicados

/*
let num3=[2,5,4,8,7,8,10,1]
undefined
Math.min(num3)
NaN
Math.min(...num3)
1
*/

let arr = ["a","b","c","d"]
for(let i = 0; i <arr.length;i++)
{
    ci(arr[i])
}

/*
let novia = ["Cielo","Camacho","Cornejo"]
undefined
for(let n of novia){
    ci(n)
}
VM2609:2 Cielo
VM2609:2 Camacho
VM2609:2 Cornejo

novia.forEach((el,i) => { 
    ci(el)
    ci(i)
})
VM3283:2 Cielo
VM3283:3 0
VM3283:2 Camacho
VM3283:3 1
VM3283:2 Cornejo
VM3283:3 2


let array = []
undefined
numbers.forEach(el => {
    array.push(el*el)
})



//Busqueda //

some uno cumple
every todos cumplen
novia (3) ["Cielo", "Camacho", "Cornejo"]
novia.some(el => el ==="Cielo")

novia
(3) ["Cielo", "Camacho", "Cornejo"]
novia.every(el => el.length >= 4)


 */

/*num3
(8) [2, 5, 4, 8, 7, 8, 10, 1]
num3.map(e => e*e)
(8) [4, 25, 16, 64, 49, 64, 100, 1]
let e = num3.map(e => e*e)
undefined
e
(8) [4, 25, 16, 64, 49, 64, 100, 1]



//Filtra
num3.filter(e => e>5)
(4) [8, 7, 8, 10]


let suma= num3.reduce((a,b)=>a+b)
undefined
suma
45
*/





