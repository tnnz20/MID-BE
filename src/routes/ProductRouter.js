import * as ProductControllers from './../controllers/ProductController.js'

import { Router } from "express";
const ProductRouter = Router()


ProductRouter.route('/')
    .post(ProductControllers.addProduct)
    .get(ProductControllers.getProducts)

ProductRouter.route('/product/:productId').get(ProductControllers.getProductById)

ProductRouter.route('/:videoId/product').get(ProductControllers.getProductByVideoId)


export default ProductRouter