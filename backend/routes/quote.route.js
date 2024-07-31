import express from "express"
const router = express.Router()
import { postquote, getquote } from "../controllers/quote.controller.js"


router.post('/postquote', postquote)
router.get('/getquote', getquote)

export default router;