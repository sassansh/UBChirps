const express = require('express')
const app = express();

app.listen(process.env.PORT || 8000)

// ROUTES:
app.all('/', (req, res) => {
    res.send('UBC Chirp Chirp')
})