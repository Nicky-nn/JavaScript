const c = alert;
const ci = console.log; 
let perro = {
    nombre: "Pluto",
    edad: 3,
    color: "Negro",
    sexo: "macho",
    vacunas: true,
    correr()
    {
        ci(`${this.nombre} corre`); //Llamado al objeto por dentro
    }
}
let saltar = (`${perro.nombre} salta`)  //Llamado por Fuera
c(saltar);

let a = "Hola", b= "Mundo";
let MyObject ={a,b}

//ci(MyObject)

//********* Agregar y Eliminar***********//
/*
delete perro.edad   //elimina
perro.edad=3;   //Agregar
*/

/******Modificando Prototipos*******/
/*
    El ejemplo  que se  vera a continuacion serviria para autentificar valores

    \/Objeto \/ Prototipo\/ objeto a modificar
    String.prototype.length2='10';
    
*/

//***Agregando sub********//
/*
    Object.prototype.patas=4    //Agrgenado
    for(let pro in perro)   //Lo agregado lo sacas
    {
    if(perro.hasOwnProperty(pro))        
    ci(pro)}
*/

/**** MUTABILIDAD ****/

let perro2 =Object.assign({},perro)
/*//A partir de perro creamos perro2 => "perro2=perro" 
AL HACER ESTO NO ALTERAMOS EL OBJETO ORIGINAL
*/

//*** RECORRER UN OBJETO ****/
Object.entries(perro)
/*
    (6) [Array(2), Array(2), Array(2), Array(2), Array(2), Array(2)]
        0: (2) ["nombre", "Pluto"]
        1: (2) ["edad", 3]
        2: (2) ["color", "Negro"]
        3: (2) ["sexo", "macho"]
        4: (2) ["vacunas", true]
        5: (2) ["correr", ƒ]
        length: 6
    __proto__: Array(0)
*/
Object.keys(perro)
/*
(6) ["nombre", "edad", "color", "sexo", "vacunas", "correr"]
    0: "nombre"
    1: "edad"
    2: "color"
    3: "sexo"
    4: "vacunas"
    5: "correr"
    length: 6
__proto__: Array(0)
*/
Object.values(perro)
/*
(6) ["Pluto", 3, "Negro", "macho", true, ƒ]
    0: "Pluto"
    1: 3
    2: "Negro"
    3: "macho"
    4: true
    5: ƒ correr()
    length: 6
__proto__: Array(0)
*/








