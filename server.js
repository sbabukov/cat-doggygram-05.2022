const express = require('express');
const {engine} = require('express-handlebars');
const bodyParser = require('body-parser');

const cats = require('./cats');
const dogs = require('./dogs');

const port = 5000
const app = express();
// правим инстанция на експреса и го изпълняваме, което е нашият апликейшън

const checkCatIdMiddleware = require('./middlewares/middleware')
// рекуайрва мидълуера за проверка на ID-то

const logger = require('./middlewares/loggerMiddlewarre')



// app.use(checkCatIdMiddleware);
// мидълуера може да изнесе глобално за целия аpp, още преди да стигне до раутовете, ще мине през него

app.use(logger);
app.use('/static', express.static('public'));

app.use(bodyParser.urlencoded({extended: false}));
// регистрираме за използване боди-парсера. Опшъните на urlencoded са от документацията

app.engine('hbs', engine({
    extname: 'hbs'
}));
// това (extname: 'hbs')се слага в обекта, за може main файла на хендълсбара да бъде с файл разширение 'hbs'

app.set('view engine', 'hbs');


app.get('/', (req, res) => {

    let name = 'Navcho';

    res.render('home', {name});
    // по подразбиране си търси layout
    
});

app.get('/download', (req, res) => {
    res.download('./public/index.html')
    // сваля даден файл от дадена папка
    // не се слага res.end() защото res.download само прекратява заявката
   
    // res.sendFile('./public/index.html', {root:__dirname})
});

// app.get('/sendfile', (req, res) => {
//     // res.sendFile(__dirname + '/views/home.html')

//     res.sendFile('./views/home.html', {root:__dirname})
//     // може така, или както е по-горе
//     // отваря файла в браузера
// });



// app.get('/cats/:catId?', checkCatIdMiddleware,  (req, res) => {
//     // console.log(req.params);
//     res.send(`You are looking at profile of name ${req.params.catId}`) 
//     // checkCatIdMiddleware e мидълуер, който проверява дали след /cats/ има добавен нещо
//     // знака ? в раута '/cats/:catId?' означава, че може да го има или няма
// });

app.get('/cats', (req, res) => {
    res.render('cats', {cats: cats.getAll()});
    // рендерира cats и му подава като списък масива cats.getAll
});

app.post('/cats', (req, res) => {
    // console.log(req.body);
    let catName = req.body.cat;
    // взимаме името на въведената котка от бодито на формата
    cats.add(catName)
    
    res.redirect('/cats')
});

app.get('/dogs', (req, res) => {
    res.render('dogs', {dogs: dogs.getAllDogs()});
});

app.post('/dogs', (req, res) => {
    let dogName = req.body.dog
    dogs.addDog(dogName);

    res.redirect('/dogs');
});
  


// app.put('/cats/:id', (req, res) => {
//     console.log(`Update cat ${req.path}`);
// });


app.listen(port, () => {
    console.log(`Server is running on port ${port}` );
});