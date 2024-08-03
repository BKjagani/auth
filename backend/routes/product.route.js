import { postproduct, getproduct } from "../controllers/product.controller.js";
import express from 'express'
const router = express.Router()
import upload from "../middleware/upload.file.js"

router.post('/postproduct',upload, postproduct)

router.get('/getproduct', getproduct)

export default router;