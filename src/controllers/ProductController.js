import * as ProductServices from './../services/ProductService.js'

export async function addProduct (req, res, next){
    try {
        const {title, price, urlProduct, urlThumb} = req.body
        const newProduct = await ProductServices.addProduct(
            title,
            price,
            urlProduct,
            urlThumb
        )
        res.status(201).json({
            message: 'Product was added successfully...',
            data: newProduct
        });
    } catch (error) {
        next(error)
    }
}