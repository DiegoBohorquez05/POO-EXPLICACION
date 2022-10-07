// FUNCIONES DENTRO DE OBJETOS

// const usuario={
//     nombre:'Juan',
//     apellido:'Bohorquez',

//     saludar:function(){
//         return `Hola mi nombre es ${this.nombre} ${this.apellido}`
//     }

// }

// console.log(usuario.saludar())


//-------------------------------------------------------



//CON VALIDACION

// const cuenta={
//     numero:0001235123,
//     saldo:10000,

//     depositar:function(valor){
//         this.saldo=this.saldo+valor
//     },

//     retirar:function(valor){
//         this.saldo=this.saldo-valor
//         if(valor>this.saldo){
//             console.log('No tiene fondos suficientes para retirar')
//             console.log(`Saldo actual de ${this.saldo}`)
//         }
//     }
// }


// function persona(nombre,apellido,edad){
//     this.nombre=nombre,
//     this.apellido=apellido,
//     this.edad=edad,

//     function mostrar(){
//         return this.nombre+ ' '+this.apellido
//     }
// }

// const persona1=new persona('Pepito','Perez',15)



//-------------------------------------------------------



// class persona{
//     #id=''
//     constructor(nombre,apellido){
//         this.nombre=nombre,
//         this.apellido=apellido
//     }

//     get (){
//         return this.#id
//     }

//     set (nuevo_id){
//         return this.#id=nuevo_id
//     }

//     saludar(){
//         return `Hola me llamo ${this.nombre}`
//     }
// }

// let pedro=new persona ('Pedro','ROdrigo')




//-------------------------------------------------------


//REVISAR

// nombre=prompt(`Digite su nombre`)
// apellido=prompt(`Digite su apellido`)


// class persona{
//     constructor(nombre,apellido){
//         this.nombre=nombre
//         this.apellido=apellido
//     }
// }

// if(persona.nombre==='Juan' && persona.apellido==='Bohorquez'){
//     alert(`Bienvenido ${nombre} ${apellido}`);
// }else{
//     alert(`No bienvenido`)
// }



//---------------------------------------------------------

// class Persona{
//     constructor(nombre,apellido){
//         this.nombre=nombre
//         this.apellido=apellido
//     }
// }

// const Pepe=new Persona('Pepe','Mujico')
// const Guillermo=new Persona('Guillermo','Mujio')

// //PARA AGREGAR PONER: Guillermo.papa='Pepe'


//---------------------------------------------------------


// const company={
//     nombre:'Itech',
//     empleados:[]
// }

// //PARA AGREGAR AL ARREGLO EMPLEADOS PONER: company.empleados.push='Guillermo'


//---------------------------------------------------------


//ENCAPSULACION

// function Compañia(nombre){
//     let empleados=[] //Esto no se puede ver a menos que se tenga una funcion para acceder
//     this.nombre=nombre

//     this.getElemento=function(){
//         return empleados
//     }
// }

// const compañia1=new Compañia('CocaCola')
// const compañia2=new Compañia('Pepsi')


//---------------------------------------------------------


//HERENCIA

// function Persona(){
//     this.nombre=''
//     this.apellido=''
// }

// function Programador(){
//     this.lenguajes=''
// }

// PARA CREAR UN PROGRAMADOR CON HERENCIA NOMBRE Y APELLIDO:     const programador1= new Programador()                   Programador1.nombre='Juan'                             Programador1.apellido='Bohorquez'                        Programador1.lenguajes='JS'


//---------------------------------------------------------


// class Persona{
//     constructor(nombre,apellido){
//         this.nombre=nombre
//         this.apellido=apellido    
//     }
// }

// class Programador extends Persona{
//     constructor(lenguaje,nombre,apellido){
//         super(nombre,apellido)
//         this.lenguaje=lenguaje
//     }
// }