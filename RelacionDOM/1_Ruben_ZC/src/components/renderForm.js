import { validatorEmail } from "../helpers/validatorEmail"

const validatorHandler = (e) =>{
    e.preventDefault()
    const form = document.getElementById('form')
    const email = document.getElementById('email')
    const p = document.createElement('p')
    form.appendChild(p)

    if(validatorEmail(email.value)){
        p.textContent = 'Este email SI es valido'
        p.style.color = 'green'
    }else{
        p.textContent = 'Este email NO es valido'
        p.style.color = 'red' 
    }
    
    setTimeout(() => {
        p.remove()
        e.target.reset()
    }, 3000);
}


export function renderForm(){
    const app = document.getElementById('app')
    const header = document.createElement('header')
    const footer = document.createElement('footer')
    const title = document.createElement('h1')
    title.textContent = 'Relacion de Ejercicos DOM'

    const enunciado = document.createElement('p')
    enunciado.textContent = 'Crea un formulario con un campo de email. Valida en tiempo real si el usuario ha introducido un correo válido (con formato correcto de email). Si el email no es válido, muestra un mensaje de error dinámico bajo el campo de texto.'
    enunciado.style.width = 'auto'

    const autor = document.createElement('h4')
    autor.textContent = 'Realizado por: Rubén Zamora Castellano'  

    const form = document.createElement('form')
    form.id = 'form'
  
    const label = document.createElement('label')
    label.textContent = 'Correo Electronico: '
  
    const input = document.createElement('input')
    input.id = 'email'
    input.type = 'text'
    input.placeholder = 'example@example.com'
    input.required = 'required'
  
    const button = document.createElement('button')
    button.type = 'submit'
    button.textContent = 'Validar'

    form.addEventListener('submit', validatorHandler)
 
    app.appendChild(header)
    header.appendChild(title)
    header.appendChild(enunciado)

    app.appendChild(form)
    form.appendChild(label)
    form.appendChild(input)
    form.appendChild(button)

    app.appendChild(footer)
    footer.appendChild(autor)
  }
  