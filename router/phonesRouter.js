import express from 'express';

export const phonesRouter = express.Router();

phonesRouter
    .route('/')
    .get((req, res) => {
        return res.send('GET: phones');
    })
    .post((req, res) => {
        return res.send('Post: phones');
    })
    .put((req, res) => {
        return res.send('Put: phones');
    })
    .delete((req, res) => {
        return res.send('Delete: phones');
    });
