const express = require('express');
const app = express()
const path = require('path')
const mongoose = require('mongoose');

const Product = require('./models/product');
mongoose.connect('mongodb://localhost:27017/farmStand', { useNewUrlParser: true })
    .then(() => {
        console.log('Connection Open')
    })
    .catch(err => {
        console.log(err)
    })

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');

app.get('/products', async (req, res) => {
    const products = await Product.find({})

    console.log(products)
    res.render('products/index', { products })
})
app.get('/products/:id', async (req, res) => {
    const { id } = req.params;
    const foundProd = await Product.findById(id)

    res.render('products/show', { foundProd })
})

app.listen(3000, () => {

    console.log('Listening on port 3000')
})

