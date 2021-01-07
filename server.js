require('dotenv').config()

//////////////////////////////////
////     JWT DEMO          //////
////////////////////////////////
const express = require('express')
const logger = require('morgan')
const mongoose = require('mongoose')
const usersRoutes = require('./routes')

const app = express()

//////////////////////////////////////////////////////////
////    configure and connect to db server         //////
////////////////////////////////////////////////////////
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/auth'
const PORT = process.env.PORT || 3001

mongoose.set('useCreateIndex', true)
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
	console.log(err || `Connected to MongoDB.`)
})

//////////////////////////////////
////   register middleware //////
////////////////////////////////
app.use(express.static(`${__dirname}/client/build`))
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

//////////////////////////////////
////     api catalogue     //////
////////////////////////////////
app.get('/api', (req, res) => {
	res.json({message: "API root"})
})

app.use('/api/users', usersRoutes)

app.use('*', (req, res) => {
	res.sendFile(`${__dirname}/client/build/index.html`)
})

app.use('*', (req, res) => {
	res.sendFile(`${__dirname}/client/src/pages/recipeSearch/index.html`)
})
//////////////////////////////////
////     start app server  //////
////////////////////////////////

let http = require('http');
 
let handleRequest = (request, response) => {
    response.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    response.write('Hi There!');
    response.end();
};
 
http.createServer(handleRequest).listen(8000);

app.listen(PORT, (err) => {
	console.log(err || `Server running on port ${PORT}.`)
})
