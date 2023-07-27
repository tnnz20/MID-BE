import * as ProductServices from './../services/ProductService.js'

export async function addProduct(req, res, next){
    try {
        const {title, price, urlProduct, urlThumb, videoId} = req.body
        const newProduct = await ProductServices.addProduct(
            title,
            price,
            urlProduct,
            urlThumb,
            videoId
        )
        res.status(201).json({
            message: 'Product was added successfully...',
            data: newProduct
        });
    } catch (error) {
        next(error)
    }
}

export async function getProducts(req, res, next){
    try {
        const querySort = req.query.sort
        if (querySort){
            const ProductSorted = await ProductServices.sortProduct(querySort)
            res.status(200).json({
                message: 'Products was retrieve successfully...',
                count: ProductSorted.length,
                data: ProductSorted
            })
        }
        const Products = await ProductServices.getProducts()
        res.status(200).json({
            message: 'Products was retrieve successfully...',
            count: Products.length,
            data: Products
        })
    } catch (error) {
        next(error)
    }

}

export async function getProductById(req, res, next){
    try {
        const productId = req.params.productId
        const Product = await ProductServices.getProductById(productId)
        res.status(200).json({
            message: 'Product was retrieve successfully...',
            data: Product
        })   
    } catch (error) {
        next(error)
    }
}

export async function getProductByVideoId(req, res, next){
    try {
        const videoId = req.params.videoId
        const Product = await ProductServices.getProductByVideoId(videoId)
        res.status(200).json({
            message: 'Product was retrieve successfully...',
            data: Product
        })
    } catch (error) {
        next(error)
    }
}