const express = require('express');

const app = express()
const PORT = 3200

app.get('/', (req, res) => {
    res.set('Content-Type', 'application/json');
    res.status(200).json({ message: "API is running" })
})

app.get('/health', (req, res) => {
    res.set('Content-Type', 'application/json');
    res.status(200).json({ message: "healthy" })
})

app.get('/me', (req, res) => {
    res.set('Content-Type', 'application/json');
    res.status(200).json({
        "name": "Philip Oluwaseun Aliu",
        "email": "aliup45@gmail.com",
        "github": "https://github.com/Feeleep-lgtm"
    })
})


app.listen(PORT, () => {
    console.log("app is listening");

})