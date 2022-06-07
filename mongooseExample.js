const mongoose = require('mongoose');

const uri = 'mongodb://localhost:27017/mongotest';

mongoose.connect(uri);
// {useNewUrlParser: true, useUnifiedTopology: true}
// преди е давала деприкейш уорнинг и е трябвало де се пише горното след (uri)

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
// това е добър начи в конзолата да излиза съобщение за грешка към връзването с ДБ
db.once('open', () => {
    console.log('DB connected!');
});
// съобщава, че сме кънектнати към ДБ



// правим си схема/модел на базата, подава се обект за конфигуриране
const personSchema = new mongoose.Schema({
    name: String,
    age: Number,

});

const Person = mongoose.model('Person', personSchema); 
// Person е модела
// ('Person', personSchema) подава се модела, после и схемата



let person = new Person({name: 'Sandokan', age: 10})
// създаване на пърсън Пешо по модела



// person.save((err, result) => {
//     if(err) {
//         return console.log(err);
//     };

//     console.log(result);
//     // result e обекта на текущия запис в ДБ
// });
// first variant
// с колбек, запазване на пърсън в базата

person.save()
.then(result => {
   console.log(result); 
});
// second variant
// promise 

// async function run() {
    
//     let result = await person.save();
//     console.log(result);
// }
// run()
// third variant
// async/await

