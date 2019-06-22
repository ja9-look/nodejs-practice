const path = require('path')
const express = require('express')
const hbs = require('hbs')


// Define paths for Express config
const app = express()
const publicDir = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Set up handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Set up static directory to serve
app.use(express.static(publicDir))

app.get('', (req, res) => {
    res.render('index',{
    title: 'Weather App',
    name: 'Janine L'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Page',
        name: 'Janine L'
    })
})

app.get("/help", (req, res) => {
  res.render("help", {
    helpText: "This is some helpful text",
    title: "Help Page",
    message: "Welcome to the Help Page. How may we help you today?",
    name: "Janine L"
  });
});

app.get('/weather', (req, res) => {
    res.send([{
        forecast: 'this is the current forecast'
    }, {
        location: 'this is the current location'
    }]);
});

app.get('/help/*', (req, res) => {
    res.render("error", {
        title: "404",
        errorMessage: "Help article not found",
      name: "Janine L"
    });
});

app.get('*', (req, res) => {
    res.render("error", {
      title: "404",
      errorMessage: "My 404 page",
      name: "Janine L"
    });
});

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})

