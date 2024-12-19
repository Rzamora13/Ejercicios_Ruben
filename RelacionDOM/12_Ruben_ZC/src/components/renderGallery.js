import { Gallery } from '../classes/Gallery'

const urls = `${import.meta.env.VITE_URL}${import.meta.env.VITE_PORT}/images`
const gallery = new Gallery(urls)

/**
 * @description LightboxHandler oculta todo el contenido y crea contenido para mostrar una sola
 * imagen en grande con botones uno para pasar a la siguiente imagen otro a la anterior y otro
 * para cerrar el LightboxHandler y vuelve a mostrarse el contenido ocultado anteriormente.
 * @param {Array} images 
 * @param {Number} index 
 */

function LightboxHandler(images, index) {
  const header = document.querySelector('.header')
  header.style.display = 'none'
  const main = document.querySelector('.main')
  main.style.display = 'none'
  const footer = document.querySelector('.footer')
  footer.style.display = 'none'

  const app = document.getElementById('app')
  const aside = document.createElement('aside')

  const img = document.createElement('img')
  img.src = images[index].getUrl()
  img.alt = images[index].getName()
  img.style.width = '25%'

  const close = document.createElement('button')
  close.textContent = 'Cerrar'
  close.addEventListener('click', () => 
    { 
      img.remove()
      aside.remove() 
      header.style.display = ''
      main.style.display = 'flex'
      footer.style.display = ''
    })

  const before = document.createElement('button')
  before.textContent = 'Anterior'
  before.addEventListener('click', () => {
    const newIndex = (index - 1 + images.length) % images.length
    updateLightbox(images, newIndex, img)
    index = newIndex
  })

  const after = document.createElement('button')
  after.textContent = 'Siguiente'
  after.addEventListener('click', () => {
    const newIndex = (index + 1) % images.length
    updateLightbox(images, newIndex, img)
    index = newIndex
  })

  app.appendChild(img)
  aside.appendChild(close)
  aside.appendChild(before)
  aside.appendChild(after)
  app.appendChild(aside)
}

/**
 * @description updateLightbox actualiza la informacion de la etiqueta img
 * cada vez que le damos a la anterior o a la siguiente imagen.
 * @param {Array} images 
 * @param {Number} index 
 * @param {Etiqueta} img 
 */
function updateLightbox(images, index, img) {
  img.src = images[index].getUrl()
  img.alt = images[index].getName()
}

export async function renderGallery() {
  const app = document.getElementById('app')
  const header = document.createElement('header')
  header.className = 'header'
  const main = document.createElement('main')
  main.className = 'main'
  main.style.display = 'flex'
  const footer = document.createElement('footer')
  footer.className = 'footer'

  const title = document.createElement('h1')
  title.textContent = 'Relacion de Ejercicos DOM'

  const enunciado = document.createElement('p')
  enunciado.textContent = 'Crea un componente de galería de imágenes que se genere dinámicamente a partir de un array de URLs. Al hacer clic en una imagen, debe abrirse un modal (lightbox) mostrando la imagen en tamaño completo, con botones para navegar a la imagen anterior o siguiente en la galería.'
  enunciado.style.width = 'auto'

  try {
    await gallery.fetchImages();
    const images = gallery.getImages()

    if (images.length > 0) {
      images.forEach((image, index) => {
        const section = document.createElement('section')
        section.style.border = '2px solid black'
        section.style.borderRadius = '10px'
        section.style.padding = '10px'
        section.style.margin = '10px'

        const p = document.createElement('p')
        p.textContent = `${image.getName()}`

        const img = document.createElement('img');
        img.src = image.getUrl()
        img.alt = image.getName()
        img.style.width = '50px'

        img.addEventListener('click', () => LightboxHandler(images, index))

        section.appendChild(p)
        section.appendChild(img)
        main.appendChild(section)
      });
    } else {
      main.innerHTML += '<p>No hay imágenes disponibles.</p>'
    }
  } catch (error) {
    main.innerHTML += `<p>Error al cargar las imágenes: ${error.message}</p>`
  }

  const autor = document.createElement('h4')
  autor.textContent = 'Realizado por: Rubén Zamora Castellano'

  app.appendChild(header)
  header.appendChild(title)
  header.appendChild(enunciado)

  app.appendChild(main)

  app.appendChild(footer)
  footer.appendChild(autor)
}