const express = require('express')
const hbs = require('hbs');
require('dotenv').config()
const app = express()
const port = process.env.PORT

//hanldebars


hbs.registerPartials(__dirname + '/views/partials', function (err) {});


app.set('view engine', 'hbs');
// Servir contenido estático
app.use(express.static('public'))
//
// app.get('/', function (req, res) {
//   res.send('Home Page')
// })

app.get('/', function (req, res) {
  res.render('home', {
    nombre: 'Karen Herrera',
    titulo: 'Curso-node'
  })
})

app.get('/generic', function (req, res) {
  res.render('generic', {

  })
})

app.get('/elements', function (req, res) {
  res.render('elements', {

  })
})

app.get('*', function (req, res) {
  res.sendFile(__dirname + '/public/404.html')
})

app.listen(port,()=> {
  console.log(`Example app listening at http://localhost:${port}`)
})