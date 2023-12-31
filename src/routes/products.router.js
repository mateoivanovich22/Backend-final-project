import { Router } from "express";

import { showProducts, createProduct, updateProduct, deleteProduct, getCreateProduct } from "../controllers/products.controller.js";
import { notFoundURL , privateRoute} from "../utils.js";

const router = Router();

router.get("/", showProducts);

router.get('/createProduct', privateRoute, getCreateProduct);

router.post("/createProduct", privateRoute , createProduct)

router.put("/:pid",updateProduct)

router.delete("/:pid", deleteProduct)

router.all('*', notFoundURL)

export default router;


/*
{
    "title": "selva",
    "price": 34,
    "code": 344,
    "description": "feas",
    "category": "galles",
    "stock": 22
}
*/