import { ordenarArray } from "./helpers/script";

// Test de la función

const arr1 = [5, 2, 9, 1, 7];
const arr2 = [];
const arr3 = [-1, -2, -3, -4, -5];
const arr4 = [1, "g", 3, 4, 5];

console.log(ordenarArray(arr1)); // [9, 7, 5, 2, 1]
console.log(ordenarArray(arr2)); // []
console.log(ordenarArray(arr3)); // [-1, -2, -3, -4, -5]
console.log(ordenarArray(arr4)); // Error: El argumento debe ser un array de números