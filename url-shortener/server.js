import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();
import { query } from "./db/index.js";
import { nanoid } from "nanoid";
import urlExist from "url-exist";

// Register the view engine
// app.set('view engine', 'ejs');

// middleware

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// Get - welcome route
app.get('/', async (req, res) => {
    res.send("Hello world! And welcome, of course!");
})

// GET - returns all the urls stored in the database.
app.get('/shorten', async (req, res) => {
    try {
        const result = await query("SELECT * FROM urls");
        res.status(200).json({ 
            data: {
                urls: result.rows
            }
        });
    } 
    catch (error) {
        res.status(500).json({
            message: "Error",
            error: error
        });
    }
})

// GET - get single url
app.get('/:urlId', async (req, res) => {
    try {
        console.log(req.params);
        const result = await query(`select * from urls where urls.shorturl = '${req.params.urlId}'`);
        if(result.rows.length > 0) {
            await query(`update urls set clicks = clicks + 1 where shorturl = '${req.params.urlId}';`);
            res.redirect(result.rows[0].longurl);
        } else {
            res.status(404).json({message: "ShortID not found"});
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Error"});
    }
})

// POST - user submits an input (a url) and we add it to the database
/* Input format:
{
    "input": "https://www.apple.com"
}
*/
app.post('/shorten', async (req, res) => {
        const longInput = req.body.input;
        const valid = await urlExist(longInput);

        if (valid) {
            try {
                const shortUrl = nanoid(5);
                console.log(shortUrl);
                await query(`insert into urls (longurl, shorturl, clicks) values ('${longInput}', '${shortUrl}', 0);`);
                res.status(201).json({ success: true, shortUrl});
            } catch (error) {
                console.log(error);
                res.status(500).json({ success: false, error});
            }
        } else {
            res.status(400).json( {success: false, message: "Not valid URL"});
        }
})


// DELETE - removes a url from our database
app.delete('/shorten/:id', (req, res) => {

})

// Tells express which port to listen on 
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
