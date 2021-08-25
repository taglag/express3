import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT = 3001;
console.log('starting app...');
app.get('/', (req, res) =>{
    res.get('home', context);
})
app.listen( PORT, () =>{
    console.log('Server running port ' + PORT);
})