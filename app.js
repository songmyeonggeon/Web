const express = require('express')
const app = express()
const port = 3000

const path = require('path')

app.use(express.static(path.join(__dirname, 'img')));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'Main.html'));
});
app.get('/Activitys.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'Activitys.html'))
})
app.get('/Introduce.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'introduce.html'));
});
app.get('/Hi.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'Hi.html'));
});
app.get('/Location.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'Location.html'));
});
app.get('/Calculator.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'Calculator.html'));
});
app.get('/Menu.css', (req, res) => {
    res.sendFile(path.join(__dirname, 'Menu.css'));
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})