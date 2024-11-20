const express = require("express");
const app = express();
const dotenv = require('dotenv');
const db = require('./db');
const PORT = process.env.PORT || 3000;

// Register the view engine
app.use(express.urlencoded({ extended: true}));
app.set('view engine', 'ejs');

// Middleware - allows us to use req.body
app.use(express.json());

// Get - welcome route
app.get('/', async (req, res) => {
    res.send("Hello world! And welcome, of course!");
})

// GET - returns all the urls stored in the database.
app.get('/shorten', async (req, res) => {
    try {
        const result = await db.query("SELECT * FROM urls");
        console.log(result.rows);
        res.status(200).json({ 
            data: {
                numberOfUrls: result.rows.length,
                urls: result.rows
            }
        });
    } 
    catch (error) {
        res.status(500).json({
            message: "failed"
        });
    }
})

// GET - returns a single short url
app.get('/shorten/:id', async (req, res) => {
    try {
        // increment clicks
        const updateClicks = await db.query(`UPDATE urls SET clicks = clicks + 1 WHERE id = $1`, [req.params.id]);
        // store the row
        const result = await db.query(`SELECT * FROM urls WHERE id = $1`, [req.params.id]);

        res.status(200).json({
            data: {
                url: result.rows[0],
            }
        })
    } 
    catch (error) {
        res.json(error);
    }
})

// POST - user submits an input (a url) and we add it to the database
app.post('/shorten', async (req, res) => {
    try {
        const userInput = req.body.longurl;


        const results = await db.query(`INSERT INTO urls (longurl, shorturl, clicks) VALUES ('${req.body.longurl}', 'something', 0)`)
       
    } 
    catch (error) {
        
    }
})


// DELETE - removes a url from our database
app.delete('/shorten/:id', (req, res) => {

})

// Tells express which port to listen on 
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
