/**
 * @author Rubén Zamora Castellano
 * @description Crea un componente de galería de imágenes que se genere
 * dinámicamente a partir de un array de URLs. Al hacer clic en una imagen,
 * debe abrirse un modal (lightbox) mostrando la imagen en tamaño
 * completo, con botones para navegar a la imagen anterior o siguiente en la
 * galería.
 * @concepts createElement, appendChild, manejo de eventos
 * click, manipulación de clases, navegación entre imágenes.
 */


import { renderGallery } from "./components/renderGallery";

const init = async => (
    renderGallery()
)

init()
