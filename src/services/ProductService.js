import CustomError from '../utils/CustomError.js'
import * as ProductRepositories from '../repositories/ProductRepository.js'

export function addProduct(title, price, urlProduct, urlThumb, videoId){
    if (!title || !price || !urlProduct || !urlThumb){
        throw new CustomError("There is empty data...", 400)
    }

    const url = [{ urlProduct, urlThumb } ]
    return ProductRepositories.Create(title, price, url, videoId)
}

export function getProducts(){
    return ProductRepositories.getProducts()
}

export function getProductById(productId){
    return ProductRepositories.getProductById(productId)
}

export function getProductByVideoId(videoId){
    return ProductRepositories.getProductByVideoId(videoId)
}

export function sortProduct(isSort){
    return ProductRepositories.sortProduct(isSort === "asc" ? 1 : -1)
}

