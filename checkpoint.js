// Importante: No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
// código dentro de las funciones ya definidas.


function soloNumeros(array) {
  // La funcion llamada 'soloNumeros' recibe como argumento un arreglo de enteros y strings llamado 'array'.
  // Debe devolver un arreglo con solo los enteros.
  // Ej: 
  // soloNumeros([1, 'Henry', 2]) debe retornar [1, 2]

  // Tu código aca:
  
  var soloenteros = [];
  for (var i = 0; i < array.length; i++) {
    if (typeof(array[i])=="number") { 
//       soloenteros[i] = array[i];
       soloenteros.push(array[i]);
    }; 
  }
 return soloenteros;
}  



function sumaTodos(array) {
  // La funcion llamada 'sumaTodos' recibe como argumento un array con dos numeros
  // y debe devolver la suma total entre todos los numeros dentro de ese rango
  // ej:
  // sumaTodos([1,3]) => 1 + 2 + 3 = 6
  // Nota: Los numeros estan ordenados de menor a mayor.

  // Tu código aca:
     var inicio = array[0]
     var fin = array[1]
      var suma = 0

  for (let i = inicio; i <= fin; i++){
    suma += i;

  }
  return suma  
} 


function checkInventario(inventario, item) {
  // La funcion 'checkInventario' recibe como argumento un array de objetos llamado 'inventario' y el nombre de un item llamado 'item'
  // Cada objeto tiene una propiedad 'nombre' y 'cantidad'.
  // La funcion debe devolver la cantidad de items que hay.
  // Si el item no existe la funcion tiene que devolver 0 (cero).
  // Ej:
  // var inventario = [
  //   {
  //     nombre: 'tenedor',
  //     cantidad: 6
  //   },
  //   {
  //     nombre: 'cuchara',
  //     cantidad: 4,
  //   },
  // ]
  // checkInventario(inventario, 'tenedor') devuelve => 6

  // Tu código aca:
   {
    return inventario.find((e)=> e.nombre === item )?.cantidad || 0;
}

var inventario = [
   {    nombre: 'tenedor',
       cantidad: 6
     },
    {
       nombre: 'cuchara',
       cantidad: 4,
     },
];
console.log(checkInventario(inventario, 'tenedor')); //6
console.log(checkInventario(inventario, 'vaso')); //0
}

function numeroSimetrico(num) {
  // La funcion llamada 'numeroSimetrico' recibe como argumento un numero entero 'num'
  // Esta devuelve true o false dependiendo de si el número es simétrico o no. 
  // Un número es simétrico cuando es igual a su reverso.
  // Ej:
  // numeroSimetrico(11711) devuelve true

  // Tu código:
   const num1 = 11711;
   const num2 = 12711;
  {
  return ""+num === (""+num).split("").reverse().join("")
}

console.log(numeroSimetrico(num1))
console.log(numeroSimetrico(num2))
}

function index() {
  // Escribi una función encontraIndex en el prototipo de Arrays,
  // que recibe un elemento.
  // La function tiene que devolver el indice (index) del primer elemento que coincida con el pasado como parametro dentro del array.
  // Si el elemento se repite dentro del Array, este devuelve el indice del Primer elemento.
  // Si no existe ese elemento la funcion debe devolver -1
  // NO USAR LA FUNCION indexOf DE LOS ARREGLOS.
  // ej:
  // var numeros = [5, 6, 4, 65, 8, 4]
  // numeros.encontraIndex(4) debe devolver 2.
  // ya que el numero 4 se encuentra en la posicion 2 dentro del array.
  // numeros.encontraIndex(23) debe devolver -1 ya que ese elemento no existe en ese array.

  // Tu código aca:
  Array.prototype.encontraIndex = function(num) {
  for(let i = 0; i < this.length; i++){
    if(this[i] === num) {
      return i
    }
  }
  return -1
}
}

function crearClasePersona() {
  // Crear una clase para construir objeto de tipo Persona.
  // el constructor debe recibir:
  // nombre (string) , edad (integer) , hobbies (array de strings) , amigos (array de objetos)
  // Esta funcion debe retonar la clase Persona.
        
  class Persona {
    constructor(nombre, edad, hobbies, amigos) {
      this.nombre = nombre
        this.edad = edad
        this.hobbies = hobbies
        this.amigos= amigos

    }

    addFriend(nombre, edad) {
      // el metodo addFriend recibe un string nombre y un entero edad y debe agregar un objeto:
      // { nombre: nombre, edad: edad} al arreglo de amigos de la persona.
      // no debe retornar nada.
    
         let amigo = { nombre, edad }
    this.amigos.push(amigo)
    
  
    }

    addHobby(hobby) {
      // este método debe agregar un hobby (hobby) al arreglo de hobbies de la persona.
      // no debe retornar nada.
       this.hobbies.push(hobby);
    }
    getFriends() {
      // Escribe una función que retorne un arreglo con sólo los nombres del arreglo de amigos
      // de la persona.
      // Ej:
      //  // retorna ['toni', 'Leo', 'Manu']
     return this.amigos.map(amigo => amigo.nombre)
  }
    getHobbies() {
      // Escribe una función que retorne un arreglo con los hobbies de la persona
      // Ej:
      // persona.getHobbies() // retorna ['correr', 'dormir', 'nadar']

      return this.hobbies.map(hobbies => hobbies)
 
    }

    getPromedioEdad() {
      // Escribe una función que retorne el promedio de edad de los amigos de una persona
      // ej, si la persona tuviera estos amigos:
      // {
      //   amigos: [{
      //     nombre: 'toni',++++
      //     edad: 33,
      //   }, {
      //     nombre: 'Emi',
      //     edad: 25
      //   }]
      // }
      // persona.getPromedioEdad() // retorna 29
       var edad= 0
      for(let i =0; i<this.amigos.length; i++) {

        edad += this.amigos[i].edad

      }

      var cantidad = this.amigos.length

      var promedio= edad/cantidad;
      
      return promedio 
    }
  }
  return Persona;
}



function cuantosRepetidos(array, elemento) {
  // La funcion llamada 'cuantosRepetidos' recibe como argumento un array de arrays llamado 'array' y un string llamado 'elemento'
  // Cada subarray contiene strings.
  // Debe devolver la cantidad de veces que 'elemento' se repite dentro de los subarrays.
  // Ej:
  // cuantosRepetidos([['manzana', 'naranja'],['sandia', 'pera'],['uva', 'manzana']], 'manzana') debe retornar 2
  // ya que 'manzana' se repite 2 veces.
  // Nota: Podes usar for loops anidados.

  // Tu código aca:
arr = [['manzana', 'naranja'],['sandia', 'pera'],['uva', 'manzana']];
 {//Aquí le llamo elemento
    var contador = 0;
    for (var i = 0; i < array.length; i++) {
        for(item of array[i]){/*Aquí le llamo item para no pisar la variable,
 además hago el loop sobre array[i]!*/
            if(item === elemento){
                contador++;
            }
        }
    }
    return contador;
}
console.log(cuantosRepetidos(arr, 'manzana'));
}

// No modifiques nada debajo de esta linea
//

module.exports = {
  soloNumeros,
  sumaTodos,
  checkInventario,
  numeroSimetrico,
  cuantosRepetidos,
  crearClasePersona,
  index
}
