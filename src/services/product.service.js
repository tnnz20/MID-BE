import * as ProductRepositories from '../repositories/product.repository.js';
import ResponseError from '../error/response-error.js';
import validate from '../validations/validation.js';
import * as productValidation from '../validations/product-validation.js';
import { getVideoById } from '../repositories/video.repository.js';

async function checkProductIsNotEmpty() {
    const totalProduct = await ProductRepositories.countTotalProduct();
    if (totalProduct === 0) {
        throw new ResponseError(404, 'Collection product still empty');
    }
}

export async function addProduct(videoId, request) {
    const video = await getVideoById(videoId);
    if (!video) {
        throw new ResponseError(404, 'Video not found...');
    }

    request.videoId = videoId;

    const product = validate(productValidation.addProductValidation, request);

    return ProductRepositories.createNewProduct(product);
}

export async function getProducts() {
    checkProductIsNotEmpty();

    return await ProductRepositories.getProducts();
}

export async function getProductById(productId) {
    checkProductIsNotEmpty();

    productId = validate(productValidation.getProductIdValidation, productId);

    const product = await ProductRepositories.getProductById(productId);

    if (!product) {
        throw new ResponseError(404, 'Product not found...');
    }

    return product;
}

export async function getProductByVideoId(videoId) {
    checkProductIsNotEmpty();

    const video = await getVideoById(videoId);

    if (!video) {
        throw new ResponseError(404, 'Video not found...');
    }
    videoId = video._id;
    const product = await ProductRepositories.getProductByVideoId(videoId);

    if (product.length === 0) {
        throw new ResponseError(404, 'Product not found...');
    }

    return product;
}
