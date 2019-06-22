const path = require('path')
const express = require('express')

const app = express()
const publicDir = path.join(__dirname, '../public')

app.set('view engine', 'hbs')
app.use(express.static(publicDir))


app.get('', (req, res) => {
    res.render('index',{
    title: 'Weather App',
    name: 'Janine L'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Page'
    })
})

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help Page",
    message: "Welcome to the Help Page. How may we help you today?"
  });
});

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

