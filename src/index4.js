import Alumno from './models/Alumno.js'; 

let alumno1 = new Alumno("Esteban Dido" , "22888444", 20);
let alumno2 = new Alumno("Matias Queroso", "28946255", 51);
let alumno3 = new Alumno();

alumno3.user = "Elba Calao";
alumno3.DNI = "32623391";
alumno3.edad = "12";

console.clear();

console.log(alumno1);
console.log(alumno2);
console.log(alumno3.toString());

