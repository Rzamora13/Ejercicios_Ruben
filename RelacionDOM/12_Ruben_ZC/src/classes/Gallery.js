import { Image } from "./Image"

export class Gallery {
    #images
    #urls
    constructor(urls){
        this.#urls = urls
        this.#images = []
    }

    async fetchImages(){
        const response = await fetch(this.#urls)
        if(!response.ok){
            throw new Error("No se a encontrado")
        }
        const result = await response.json()
        result.map((image) =>{
            this.#images.push(new Image(image.id, image.name, image.url))
        })
    }

    getImages(){
        return this.#images
    }
}