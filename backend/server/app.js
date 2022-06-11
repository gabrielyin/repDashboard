const express = require('express');
const path = require('path')

const app = express();
const port = 3000;

app.use(express.static("./frontend/view"));
app.use(express.static("./frontend/view/css"));
app.use(express.static("./frontend/view/img"));
app.use(express.json());

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, '../../frontend/view/home.html'))
});

app.get('/minhaconta', (req, res) => {
    res.sendFile(path.join(__dirname, '../../frontend/view/conta.html'))
});

app.get('/commisoes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../frontend/view/commisoes.html'))
});

app.get('/recursos', (req, res) => {
    res.sendFile(path.join(__dirname, '../../frontend/view/recursos.html'))
});

app.listen(port, () => {
    console.log(`Servidor rodando no port ${port}`);
});