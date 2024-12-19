/**
 * @author Rubén Zamora Castellano
 * @description Crea un formulario con un campo de email. Valida en tiempo 
 * real si el usuario ha introducido un correo válido (con formato correcto de
 * email). Si el email no es válido, muestra un mensaje de error dinámico bajo
 * el campo de texto.
 * @concepts input, addEventListener, regex, createElement, appendChild, remove.
 */

import { renderForm } from "./components/renderForm";

const init = async => (
    renderForm()
)

init()
