const express = require ('express');
const app = express();
const path = require('path');

app.listen(3002, () => {
    console.log('servidor corriendo')
});

app.get('/' , (req,send) => {
    res.sendFile(path.resolve(__dirname , './views/index.html'))
});

app.use(express.static(path.resolve(__dirname , './public')));