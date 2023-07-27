import * as ProductControllers from './../controllers/ProductController.js'

import { Router } from "express";
const ProductRouter = Router()


ProductRouter.route('/').post(ProductControllers.addProduct)


export default ProductRouter