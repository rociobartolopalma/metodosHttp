const express = require('express')

const app = express()

app.get('/', (req, res) =>{
    res.send('Hola GET')
})

/*FUNCIONALIDAD*/

app.post('/', (req, res) =>{
    res.send('Hola POST')
})

app.put('/', (req, res) =>{
    res.send('Hola PUT')
})

app.patch('/', (req, res) =>{
    res.send('Hola PATCH')
})

app.delete('/', (req, res) =>{
    res.send('Hola DELETE')
})

//http://localhost:3000/
app.listen(3000, () => {
    console.log('listenig on port 3000')
})