const express = require("express");
const app = express();
const db = require('./db');
const PORT = 3000;

// Register the view engine
app.use(express.urlencoded({ extended: true}));
app.set('view engine', 'ejs');

// Middleware - allows us to use req.body
app.use(express.json());

// Get - welcome route
app.get('/', async (req, res) => {
    res.send("Hello world! And welcome, of course!");
})

// Get - returns all the urls stored in the database.
app.get('/shorten', async (req, res) => {
    try {
        const result = await db.query("select * from urls");
        console.log(result.rows);
        res.status(200).json({ 
            status: "success",
            rowLength: result.rows.length,
            urls: result.rows
        });
    } 
    catch (error) {
        res.status(500).json({status: "failed"});
    }
})

// get - returns a single short url
app.get('shorten/:id', async (req, res) => {
    
})


// post - user submits an input (a url)
app.post('/shorten', (req, res) => {
 
})

/*
app.post('/shorten', (req, res) => {
    const input = req.body.input;
    console.log(input + "Cat");
    res.send(input + "Cat");
})
*/

// delete - removes a url from our database
app.delete('/shorten/:id', (req, res) => {

})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
