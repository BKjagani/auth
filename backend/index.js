const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config();
const port = process.env.PORT || 3006

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send("Hello")
})

app.listen(port, () => {
    console.log(`Your app is listening on http://localhost:${port}`)
})