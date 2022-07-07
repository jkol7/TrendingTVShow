
const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/style.css', (req, res) => {
    res.sendFile(__dirname + '/style.css')
})

app.get('/index.js', (req, res) => {
    res.sendFile(__dirname + '/index.js')
})

app.use('/images', express.static(__dirname + '/images'))

const PORT = 3001
app.listen(process.env.PORT || PORT, () => {})