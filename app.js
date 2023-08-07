const nom="Caso uno::";
const nombre='Hola';
const nombreuno='Mundo';

if(true){
   var nombredos="Regis Munez";
}

console.log(nom+nombre+' '+nombreuno);
console.log(`${nom} ${nombredos}` );

//caso dos  destructoires

const dos={
    nombres:"regis",
    apellido:"munez",
    tipo:"UPEA",
    getNombre(){
        return `${this.nombres} ${this.apellido} ${this.tipo}`
    }
}

const{nombres,apellido,tipo}=dos;
console.log(nombres,apellido,tipo);

//caso tres
const node=['postman','github','nodemon','visual code'];
console.log(h1=node[1]);

//caso cuatro 1
function sumar(a,b){
return a+b;
}
console.log(sumar(2,3));
//casp cuatro 2
const sumare=(a,b)=>{
    return a+b;
}
console.log(sumare(45,3));
//caso cuatro 3
const sumarr =(a,b)=>a+b;
console.log(sumarr(45,5));

