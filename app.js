var express = require('express');
var app = express();

app.get('/', (req, res) => {
	res.send('Welcome!');
});

app.get('/login', (req, res) => {
	res.send('Login please!');
});

app.listen(3000, function(){
	console.log('Connected 3000 port!');
});