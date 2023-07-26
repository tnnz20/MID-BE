import * as ProductRepository from '../repositories/ProductRepository.js'

export function createProduct(title, price, url){
    return ProductRepository.Create(title, price, url)
}

