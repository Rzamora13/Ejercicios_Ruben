import { encontrarMaxMin } from "./helpers/script";

//Test de la funcion
console.log(encontrarMaxMin([5, 10, 3, 8, 2, 7])); // { max: 10, min: 2 }
console.log(encontrarMaxMin([-10, -5, 0, 3, 7])); // { max: 7, min: -10 }
console.log(encontrarMaxMin([1])); // { max: 1, min: 1 }
console.log(encontrarMaxMin([])); // Error: El parámetro debe ser un array y que no este vacío.
console.log(encontrarMaxMin(3,4)); // Error: El parámetro debe ser un array y que no este vacío.