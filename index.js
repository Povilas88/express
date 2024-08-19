import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    return res.send('Hello World!');
})

app.get('/about', (req, res) => {
    return res.send('About us page');
})

app.get('*', (req, res) => {
    return res.send('Page not found');
})

app.listen(port, () => {
    console.log(`App running on: http://localhost:${port}`);
})