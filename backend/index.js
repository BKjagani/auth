import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()
const app = express()
const port = process.env.PORT || 3006
import main from './db.js'


app.use(express.json())
app.use(cors())

main()
app.get('/', (req, res) => {
    res.send("Hello")
})

app.listen(port, () => {
    console.log(`Your app is listening on http://localhost:${port}`)
})