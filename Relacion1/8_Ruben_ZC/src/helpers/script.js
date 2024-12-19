/**
 * @author Rubén Zamora Castellano
 * @description Define una función llamada encontrarMaxMin que tome un array de números arr y devuelva un
   objeto con las propiedades max y min , que contengan el valor máximo y mínimo del array,
   respectivamente.
 * @param {Array<number>} arr - Array de números
 * @returns {Object} - Objeto con las propiedades max y min
 */

export const encontrarMaxMin = (arr) => {
    if (!Array.isArray(arr) || arr.length === 0) {
        throw new Error('El parámetro debe ser un array y que no este vacío.');
    }

    let max = arr[0];
    let min = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }

        if (arr[i] < min) {
            min = arr[i];
        }
    }

    return { max, min };
};