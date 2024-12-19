/**
 * @author Rubén Zamora Castellano
 * @description Dado un array de números desordenados, usa sort para ordenarlos de mayor a menor.
 * @param {Array} arr - Array de números desordenados
 * @returns {Array} - Array ordenado de mayor a menor
 */

export const ordenarArray = (arr) => {
  if (!Array.isArray(arr) || arr.some(isNaN)) {
    throw new Error("El argumento debe ser un array de números");
  }
  return arr.sort((a, b) => b - a);
};