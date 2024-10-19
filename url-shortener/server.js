const express = require("express");
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true}));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.send("Welcome!");
})

app.get('/hello', (req, res) => {
    res.send("Hello world!");
})

app.get('/shorten', (req, res) => {
    res.render('index');
})

app.post('/shorten', (req, res) => {
    const input = req.body.input;
    console.log(input + "Cat");
    res.send(input + "Cat");
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
