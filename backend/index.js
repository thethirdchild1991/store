const express = require('express')
const morgan = require('morgan')
const app = express()
const port = 5000

app.use(morgan('tiny'))

app.get('/', (req, res) => res.send('Hi Denis') )

app.listen( port, () => {
    console.log('Server Started')
})