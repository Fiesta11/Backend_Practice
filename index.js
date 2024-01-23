require('dotenv').config()
const express = require('express')
const app = express()

const port = 3000

app.get('/' , (req ,res) => {
    res.send('Hello World');
})

app.get('/twitter' , (req , res) => {
    res.send('Hello Twiitter')
})

app.get('/login' , (req ,res) => {
    res.send('<h1> Welcome to My website </h1>')
})



app.listen(process.env.PORT , ()=>{
    console.log(`Server is Running on ${port}`);
})