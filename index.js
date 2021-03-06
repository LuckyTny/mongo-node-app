const express = require('express')
const mongoose = require('mongoose')
const expHandlebars = require('express-handlebars')

const PORT = process.env.PORT || 3000

const app = express()

const hbs = expHandlebars.create({
    defaultLayout: 'main',
    extname: 'hbs'
})


async function start() {
    try {
        await mongoose.connect('', {
            useNewUrlParser: true,
            useFindAndModify: false,
        })
        app.listen(PORT, () => {
            console.log('Server has been started...')
        })
    }catch(e) {
        console.log(e)
    }
}

start()
