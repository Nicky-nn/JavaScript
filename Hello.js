let numero =3;
const a =5;
console.log(numero);
console.log(numero+1);
console.log(numero*2);
console.log(numero/3);
console.log(a);
let nombre=("Nick tiene "+numero +"años");
let nom = `Nick tiene ${numero}años`;
console.log(nombre);
let div=`
<div class="container">
    ${nombre}
    ${nom}
    </div>
`
document.body.innerHTML=div;
window.alert("Nick tiene "+numero+" Años");

let ed = parseInt(prompt('Introdusca su edad'),10);  //pasa en alerta lo que el usuario tiene que digitar
if(ed)
{
    let pr = ed>=18
    ?"Eres mayor de edad"//true

    :"Eres menor de Edad"//false
    alert(pr);
    
}
else
{
    alert("Ingrese datos Reales");    
}
/*if(ed>=18)
{
    alert("Eres mayor de edad");

}
else
{
    alert("Eres menor de edad");
}*/
     

 let num =5;
 num.toFixed(2);    //redonda de acuerdo tofixed

 //let textoanumero=parseInt(pr,10);// convertinimos el 10 por el decimal
 let numeroafloat=parseFloat(num);

 Math.floor(20.7);  //redondea hacia arriba
 Math.ceil(20.1);   //redondea hacia abajo
 Math.round(20.5);  //redondeo normal
 Math.random()*10;     //numero al azar
 Math.ceil(Math.random()*10)   //numero al azar del 1-10

 //PROPIEDADES STRINGE***Caracteristica
 "Nick".length;     //cuenta lo largo que es el string cantidada caracteres
 //METODO***Hacer
"  Hola    ".trim();     //Quita los espacios en blanco
"hola".toUpperCase();   //Convierte en mayusculas
"HOLA".toLowerCase();   //Convierte en minuscula
let re =prompt("Cual es la capital de Bolivia").toUpperCase().trim();//preguntamos y si es mayuscula y sin espacios
let me =re ==="SUCRE"
        ? alert("Yeah...Correcto")  
        : alert("nohh....Incorrecto")
"Hola Amigos".indexOf("0"); //Busca en el caracter la letra 0
"Hoooola Amigos".indexOf("0",2) //El 2 busca a segunda 0
"Hola".lastIndexOf("0");//pregunta desde ataras donde esta la letra 0
"http://ProductionNN/Blog".includes("Blog");    //Busca en todo el bog y devuelve un true o false(Boolean)
"http://ProductionNN/Blog".startsWith("https://");//Busca de principio
"http://ProductionNN/Blog".endsWith("Blog");    //Busca desde el final

//MANIPULAR STRING

"Hola Mundo".replace("Mundo","Nick");//Reemplaza el texto
"NickyCielo".split("");    //Separador
/*
"NickyCielo".split("y")
(2) ["Nick", "Cielo"]
*/
"Nick"[2];//posicion
"Nick".substring(4,8);    //desde la posicion (4) empieza con el texto // el 8 es el fin (opcional)
"Cielo Hola".substr(2,5)//cuenta por caracteres el 5 es cantidad de caracteres
"Nick".substr(-2)//entrae los ultimos dos digitos
"Hola Mundo".slice(-5,-2);  //empieza a contar desde atras respuesta :"Mun"


let answer = parseInt(prompt("Ingrese un numero del 1-7"),10);
switch (answer) 
{
    case 1:
        alert("Lunes");
        break;
    case 2:
        alert("Martes");
        break;
    case 3:
        alert("Miercoles");
        break;
    case 4:
        alert("Jueves");
        break;
    case 5:
        alert("Viernes");
        break;
    case 6:
        alert("Sabado");
        break;
    case 7:
        alert("Domingo");
        break;   

    default:
        //let n=answer.toString();    
        alert("No hay un dia con "+ answer);
        break;
}



//  CONDICIONES ESPECIALES  //  

/*for(i=1;i<10;i++)
{
    if(i%2==0) continue // impriminos todo menos multiplos de 2 5  
    console.log(i);  
}*/
let aux=5;
let ac = 0;
let b = 1; 
let auxiliar
/*for(let i=1; i <= 100 ; i++)
{
    if(i%2==0)
    {
        console.log(i);
        aux++;
    }
    
    if(aux>=5) break;
}*/

for(let i=1; i<= aux; i++)
{
    auxiliar = ac;
    ac = b; 
    b = auxiliar + ac; 
    console.log(ac); 
}
let password = "Nick";
let pass;
do 
{
    pass=prompt("Ingrese la Contraseña");
} while (pass !== password);