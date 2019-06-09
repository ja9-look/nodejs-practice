const express = require('express')
const app = express()

app.get('', (req, res) => {
    res.send('<h1>Hello Express</h1>')
})

app.get('/help', (req, res) => {
    res.send([{
        name: 'Janine',
        age: 23
    }, {
        name: 'Sarah',
        age: 27
    }])
})

app.get('/about', (req,res) => {
    res.send('<h1>This is the about page</h1>')
})

app.get('/weather', (req, res) => {
    res.send([{
        forecast: 'this is the current forecast'
    }, {
        location: 'this is the current location'
    }])
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})

