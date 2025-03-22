import data from '../data/data'

export const pedirDatos = () => {
    return new Promise ((resolve, reject) => {
        setTimeout( () =>{
            resolve(data)
        }, 500)
    })
}

export const pedirItemPorId = (id) => {
    return new Promise((resolve, reject) => {
        
        const item = data.find((el) => el.id === id)

        if (item) {
            resolve(item)
        }else {
            reject('No se encontró el producto')
        }
    })
}