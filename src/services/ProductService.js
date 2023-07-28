import CustomError from '../utils/CustomError.js'
import * as ProductRepositories from '../repositories/ProductRepository.js'
import * as VideoServices from '../services/VideoService.js'

export function addProduct(title, price, urlProduct, urlThumb, videoId){
    if (!title || !price || !urlProduct || !urlThumb){
        throw new CustomError("There is empty data...", 400)
    }

    VideoServices.checkVideoId(videoId)
    const url = { urlProduct, urlThumb } 
    return ProductRepositories.Create(title, price, url, videoId)
}

export function getProducts(){
    return ProductRepositories.getProducts()
}

export function getProductById(productId){
    if(productId.length < 24){
        throw new CustomError('Invalid Product Id...', 400)
    }
    return ProductRepositories.getProductById(productId)
}

export function getProductByVideoId(videoId){
    VideoServices.checkVideoId(videoId)
    return ProductRepositories.getProductByVideoId(videoId)
}

export function sortProduct(isSort){
    switch(isSort){
        case "asc": 
            isSort = 1
            break
        case "desc":
            isSort = -1
            break
        default:
            throw new CustomError('Invalid payload, payload must either asc or desc...', 400)
            break
    }
    return ProductRepositories.sortProduct(isSort)
}

export function checkProduct(Product){
    if(!Product){
        throw new CustomError('Product not found...', 404)
    }
}

