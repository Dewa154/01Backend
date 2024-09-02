require('dotenv').config()

const express = require('express')

// import express from 'express'

const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
  res.send('dewananddotcom')
})

app.get('/login', (req, res) => {
  res.send('<h1>Please login at Chai Aur Code</h1>')
})

app.get('/youtube', (req, res) => {
  res.send('<h2>Chai Aur Code</h2>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}
    
  http://localhost:${port}`)
})