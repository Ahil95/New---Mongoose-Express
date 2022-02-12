const mongoose = require('mongoose');

const Product = require('./models/product');
mongoose.connect('mongodb://localhost:27017/farmStand', { useNewUrlParser: true })
    .then(() => {
        console.log('Connection Open')
    })
    .catch(err => {
        console.log(err)
    })
// const p = new Product({
//     Name: 'Orange',
//     price: 2.6,
//     categoru: 'fruit'
// })
// p.save().then(p => {
//     console.log(p)
// })
//     .catch(e => {
//         console.log(e)
//     })

const seedProducts = [
    {
        name: 'Organic Melon',
        price: 4.99,
        category: 'fruit'
    },
    {
        name: 'Organic Celery',
        price: 3.6,
        category: 'vegetable'
    },
    {
        name: 'Organic Whole Milk',
        price: 2.69,
        category: 'Diary'
    }
]

Product.insertMany(seedProducts)
    .then(res => {
        console.log(res)
    })
    .catch(e => {
        console.log(e)
    })