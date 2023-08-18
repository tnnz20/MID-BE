import * as ProductServices from './../services/product.service.js';

export async function addProduct(req, res, next) {
    try {
        const videoId = req.params.videoId;
        const request = req.body;
        const newProduct = await ProductServices.addProduct(videoId, request);
        res.status(201).json({
            message: 'Product was added successfully...',
            data: newProduct,
        });
    } catch (error) {
        next(error);
    }
}

export async function getProducts(req, res, next) {
    try {
        const products = await ProductServices.getProducts();
        res.status(200).json({
            message: 'Products was retrieve successfully...',
            count: products.length,
            data: products,
        });
    } catch (error) {
        next(error);
    }
}

export async function getProductById(req, res, next) {
    try {
        const productId = req.params.productId;
        const product = await ProductServices.getProductById(productId);
        res.status(200).json({
            message: 'Product was retrieve successfully...',
            count: product.length,
            data: product,
        });
    } catch (error) {
        next(error);
    }
}

export async function getProductByVideoId(req, res, next) {
    try {
        const videoId = req.params.videoId;
        const product = await ProductServices.getProductByVideoId(videoId);

        res.status(200).json({
            message: 'Product was retrieve successfully...',
            count: product.length,
            data: product,
        });
    } catch (error) {
        next(error);
    }
}
