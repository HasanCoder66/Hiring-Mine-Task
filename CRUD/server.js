import express from 'express';

const PORT = 6500;

const app = express.Router()

app.listen(PORT, ()=> {
    console.log(`server listen on this ${PORT}`)
})

