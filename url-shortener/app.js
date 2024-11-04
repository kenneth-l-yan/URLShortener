const express = require("express");
const app = express();
const PORT = 3000;


// Register the view engine
app.use(express.urlencoded({ extended: true}));
app.set('view engine', 'ejs');



app.get('/', (req, res) => {
    res.redirect('/hello');
})

app.get('/hello', (req, res) => {
    res.send("Hello world! And welcome, of course!");
})

app.get('/shorten', (req, res) => {
    res.render('index');
})

app.post('/shorten', (req, res) => {
    const input = req.body.input;
    console.log(input + "Cat");
    res.send(input + "Cat");
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
