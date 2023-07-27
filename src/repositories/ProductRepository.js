import Product from '../models/Products.js'

export function Create(title, price, url, videoId) {
    const newProduct = new Product({
        title, 
        price, 
        url,
        videoId
    })
    return newProduct.save();
}

export function getProducts(){
    return Product.find({}, {__v:0})
}

export function getProductById(productId){
    return Product.findById(productId, {__v:0})
}

export function getProductByVideoId(videoId){
    return Product.find({"videoId":videoId})
}

export function sortProduct(isSort){
    return Product.find().sort({price:isSort})
}

