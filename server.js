const express = require('express');
const port = 5000
const app = express();
// правим инстанция на експреса и го изпълняваме, което е нашият апликейшън

const checkCatIdMiddleware = require('./middlewares/middleware')
// рекуайрва мидълуера за проверка на ID-то

const cats = [];

// app.get('/', (req, res) => {
//     console.log('Hello from console');

//     res.send('Hello world');
// });

app.get('/download', (req, res) => {
    res.download('./views/home.html')
    // сваля даден файл от дадена папка
});

app.get('/sendfile', (req, res) => {
    // res.sendFile(__dirname + '/views/home.html')

    res.sendFile('./views/home.html', {root:__dirname})
    // може така, или както е по-горе
    // отваря файла в браузера
});



app.get('/cats/:catId?', checkCatIdMiddleware, (req, res) => {
    // console.log(req.params);
    res.send(`You are looking at profile of name ${req.params.catId}`) 
    // checkCatIdMiddleware e мидълуер, който проверява дали след /cats/ има добавен нещо
    // знака ? в раута '/cats/:catId?' означава, че може да го има или няма

});

app.post('/cats', (req, res) => {
    console.log('Create cat');
    
    res.status(201).send('Cat created');
});

  


// app.put('/cats/:id', (req, res) => {
//     console.log(`Update cat ${req.path}`);
// });


app.listen(port, () => {
    console.log(`Server is running on port ${port}` );
});