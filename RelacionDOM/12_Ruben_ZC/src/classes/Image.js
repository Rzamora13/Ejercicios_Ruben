export class Image {
    #id
    #name
    #url
    constructor(id, name, url){
        this.#name = name
        this.#url = url
        this.#id = id
    }

    getId(){
        return this.#id
    }

    getName(){
        return this.#name
    }
    
    getUrl(){
        return this.#url
    }

}