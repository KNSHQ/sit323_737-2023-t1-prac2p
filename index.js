const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
	res.send('Welcome to SIT774! This page was served dynamically from the express server.');
});

app.listen(3000, () => {
	console.log(`Web server running at: http://localhost:3000`)
	console.log("Type Ctrl+C to shut down the web server")
});