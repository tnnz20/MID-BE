import Product from '../models/Products.js'

export function Create(title, price, url) {
    const newProduct = new Product({
        title, 
        price, 
        url
    })
    return newProduct.save();
}

