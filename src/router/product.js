import express from "express"
import { add, getAll, getOne, remove, update } from "../controllers/product"

const router = express.Router()

router.get("/products",getAll)
router.get("/products/:id",getOne)
router.post("/products",add)
router.patch("/products/:id",update)
router.delete("/products/:id",remove)
export default router