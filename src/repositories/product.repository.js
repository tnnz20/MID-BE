import Product from '../models/product.model.js';

export function createNewProduct(request) {
    return Product.create(request);
}

export function getProducts() {
    return Product.find({}, { __v: 0 });
}

export function getProductById(productId) {
    return Product.findById(productId, { __v: 0 });
}

export function getProductByVideoId(videoId) {
    return Product.find({ videoId: videoId }, { __v: 0 });
}

export function countTotalProduct() {
    return Product.countDocuments();
}
