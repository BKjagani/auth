import express from 'express'
const router = express.Router()
import {postcategory, getcategory} from "../controllers/category.controller.js"



router.post('/postcategory', postcategory)

router.get('/getcategory', getcategory)



export default router;