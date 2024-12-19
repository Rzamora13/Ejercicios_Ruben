/**
 * @description Valida si un String es un email
 * @param {String} email 
 * @returns {Boolean}
 */

export const validatorEmail = (email) => {
    const validator = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return validator.test(email);
  };