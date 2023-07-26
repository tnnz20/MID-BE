import * as ProductControllers from './../controllers/ProductController.js'

import { Router } from "express";
const ProductRouter = Router()


ProductRouter.route('/create').post(ProductControllers.createProduct)


export default ProductRouter