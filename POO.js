//  FUNCIONES   //  
//          Parametro\/   
const saludar = (people, sex='m') => 
{
    let saludo = sex === "m"
        ? "Bienvenido"
        : "Bienvenida"  
    return `${saludo} a Production NN ${people}`    
}
//    Argumento \/
alert(saludar("Nick"));
alert(saludar("Russell"));
alert(saludar("Cielo", "f"));

/*function saludar (people, sex, age) 
{
    let saludo = sex == "m"
        ? "Bienvenido"
        : "Bienvenida"  
    return `${saludo} a Production NN ${people} de ${age} años`    
}*/

/*const sumar=(a,b,c) => a+b+c;
let a1=parseInt(prompt("Ingrese el número a sumar"),10);
let b1=parseInt(prompt("Ingrese el número a sumar"),10);
let c1=parseInt(prompt("Ingrese el número a sumar"),10);
alert(sumar(a1,b1,c1));

const sumarTodos=(...numeros) =>    //... Enviamos n parametros a pasar
{
    let resultado =0;
    for(let i=0; i< numeros.length; i++)
    {
        resultado += numeros[i];
    }
    return resultado
}
alert(sumarTodos(1,2,3,4,5,6,7,8,9,10))*/

//  CIUDADANO DE PRIMERA CLASE  //

const c = alert
const ci=console.log
/*
const mul =(a,b) => (a*b)

let edad =c(mul(3,4));
let edad2=c(mul(mul(3,4),2));
let edad3=c(mul(edad2,2));

edad2=mul(mul(3,4),2);
edad3=mul(edad2,2);

ci(edad2);
ci(edad3);

// closures //  

const restar = x => y => x-y

c(restar(10)(5));*/

/*let doSomething = x => y => x*y
let a=doSomething(2)(2) //4
let b=doSomething(3)    //y=>3*y
c(doSomething(a)(b(3))) //4*6*/

//  Funcion ImPura    //
/*let a="Hola";

const hello = persona =>
{
    a=a+" "+persona;
    return a   
}
ci(hello("Nick"));
ci(a);*/

//  Funcion Pura    //
/*let a="Hola";

const hello =(saludo,persona) => `${saludo} ${persona}`

ci(hello(a,"Nick"));
ci(a);*/

//  Funciones AutoInvocadas //
let a="Hola";

const hello =((saludo,persona) => `${saludo} ${persona}`)(a,"Nick")
ci(hello);

//  Funciones Autonombradas y anonimas  //  
/*setTimeout(() =>    ///espera un nivel de tiempo
{
    c("Hola NN");
},3000)*/


//  Closures    //

/*const aumentar = ((numero=0) => (numero++, c(numero)))
const incrementar = aumentar*/
/*function aumentar()
{
    let numero = 0;
    return function()
    {
        numero++;
        c(numero);
    }
}
const incrementar=aumentar()
incrementar();
incrementar();
incrementar();
incrementar();
incrementar();
incrementar();*/

let user =
{
    nombre: "Nick", edad: 18, getEdad()
    {
        c(this.edad)
    }
}
user.getEdad()
