
let variable="hola";
var variable2="mundo";
const miConstante="!!!!";  

console.log(variable + " " + variable2 +  miConstante);

let persona={

    nombre:"Ana",
    apellido:"Lopez",
    curso: 2,
    esEstudiante:true,
}

let persona2={
    nombre:"Juan",
    apellido:"Perez",
    curso: 1,
    esEstudiante:true,
}
console.log("ALUMNO: " + persona.nombre);
console.log("curso: " + persona.curso);
console.log("PERSONA " + persona);

let listaDeNumeros=[10,20,30,40,50];

console.log("Lista de numeros: " + listaDeNumeros);
console.log("Primer numero: " + listaDeNumeros[0]);

//== comparacion  : valor
let sonIguales=  79 == "79"; 

//=== comparacion estricta : valor + tipo de dato
let sonIguales2=  79 === "79"; 
console.log("sonIguales: " + sonIguales);
console.log("sonIguales2: " + sonIguales2);

// operadores logicos AND (&&)  OR (||) NOT (!)
 let ambosSonEstudiantes= (persona.esEstudiante==true) && (persona2.esEstudiante==true);
 console.log("sonEstudiantes: " + ambosSonEstudiantes);

 // para cambiar el valor de una propiedad de un objeto
 persona2.curso=2;

 // agregar una nueva propiedad a un objeto
 persona.email="mail@gmail.com";
 console.log("email: " + persona.email);

// eliminar una propiedad de un objeto
 delete persona.email;
 console.log("email: " + persona.email);

 // agregamos funciones
let mascota={
    tipo:"perro",
    raza:"dogo",
    edad:7,
    color:"blanco",
    veterinario:{
        nombre:"Carlos",
        telefono:"12345678"
    },
    ladrar: ()=>{console.log("guau guau");}
}

mascota.ladrar();

// Object.keys()  devuelve un array con las claves de un objeto
console.log(Object.keys(mascota)); 

// Object.keys()  devuelve un array con los valores de un objeto
console.log(Object.values(mascota)); 

// Object.entries()  devuelve un array con los pares atributo-valor  de un objeto
console.log(Object.entries(mascota)); 

// arrays de objetos
let listaAlumnos=[
    {nombre: "Juan", apellido:"Perez"},
    {nombre: "Maria", apellido:"Gomez"},
    {nombre: "Teresa", apellido:"Gonzalez"},
]
console.log("Lista de Alumnos: " + listaAlumnos);

let paises=["Argentina", "Brasil", "Chile", "Uruguay", "Paraguay", "Bolivia", "Colombia"];

console.log("Paises: " + paises);

// largo del array
console.log("Cantidad de paises: " + paises.length);
console.log("Cantidad Alumnos: " + listaAlumnos.length);

// metodos
paises.shift(); // elimina el primer elemento
console.log("paises: " + paises);

// unshift agrega un elemento al inicio
paises.unshift("Argentina"); // agrega un elemento al inicio

paises.pop(); // elimina el ultimo elemento

// push agrega un elemento al final
paises.push("Ecuador"); // agrega un elemento al final

console.log("paises: " + paises);

//includes verifica si un elemento existe dentro del array
console.log("esta Brasil? " + paises.includes("Brasil"));

// indexOf posición de un elemento dentro del array
console.log("Posicion de Chile: " + paises.indexOf("Chile"));

//  convierte el array en string
console.log(paises.toString()); // convierte el array en string

console.log(paises.join(" | ")); // convierte el array en string con un separador

// unir dos arrays
let europa=["España", "Francia", "Italia", "Alemania"];
paises= paises.concat(europa); // concatena dos arrays
console.log("paises: " + paises);

// funciones nombradas

function bienvenida(){
    console.log("Bienvenidos ");
}
bienvenida();

function saludar(nombre){
    console.log("Hola " + nombre);
}
saludar("Ana");

function sumar(a,b){
    return a+b;
}

// funciones anonimas
console.log(
    ()=>console.log("Funcion anonima")
)

console.log( 
    (a,b)=> a+b
 );

 let sumar1= (a,b)=> a+b;

 console.log("Suma: " + sumar1(10,20));

// funcion de multiplicar anonima asignada a una variable
const multiplicar= function(a,b){return a*b};

console.log("Multiplicacion: " + multiplicar(10,20));

function mostrarPaises(paises){
    for(i=0; i<paises.length; i++){
        console.log("Pais: " + paises[i]);
    }
}
mostrarPaises(paises);

// dom trabajando con el arbol de elementos

let titulo=  document.getElementById("titulo");

titulo.innerText="Hola Mundo Modificado con JavaScript";



