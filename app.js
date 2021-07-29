const express = require ('express');
const path = require ('path');
const app = express();
const port = process.env.PORT || 3000

const publicPath = path.join (__dirname, '/public');
const viewsPath = path.join (__dirname, '/views');

app.listen(port, () => {
    console.log ('El servidor esta funcionando en el url http://localhost:3000')
});

app.get ('/', (req, res) => {
    res.sendFile(viewsPath + '/home.html');
});
app.get ('/home', (req, res) => {
    res.sendFile(viewsPath + '/home.html');
});
app.get ('/crear-cuenta', (req, res) => {
    res.sendFile(viewsPath + '/register.html');
});
app.get ('/login', (req, res) => {
    res.sendFile(viewsPath + '/login.html');
});

app.use (express.static(publicPath));