const express = require('express');
const app = express();
const port = 3000;

// Home
app.get('/', (req, res) => res.redirect('/news'));

// Journey 1: Get News Link
app.get('/news', (req, res) => {
    res.send('<h1>Daily News</h1><p>Today in NYC: Sun is shining.</p><a href="/news/article-1">Read More</a>');
});

// Journey 2: View Nearby Restaurants
app.get('/restaurants', (req, res) => {
    res.send('<h1>Nearby Restaurants</h1><ul><li>Pizza Palace - 1.3 miles</li><li>Sushi Central - 0.5 miles</li></ul>');
});

app.listen(port, () => console.log(`Web App listening at http://localhost:${port}`));
