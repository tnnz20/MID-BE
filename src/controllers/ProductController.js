import * as ProductServices from './../services/ProductService.js'

export async function createProduct (req, res, next){
    try {
        const {title, price, url} = req.body

        console.log(url)
        const newProduct = await ProductServices.createProduct(
            title,
            price,
            url
        )
        res.status(201).json({
            message: 'Product has benn successfully created...',
            data: newProduct
        });
    } catch (error) {
        next(error)
    }
}