const mongoose = require('mongoose');
const Person = require('./Modules/Person');

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



let person = new Person({name: 'Sandokan', age: 30})
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



// person.save()
// .then(result => {
//    console.log(result); 
// });
// second variant
// promise 



// async function run() {
    
//     let result = await person.save();
//     console.log(result);
// }
// run()
// third variant
// async/await


Person.find({})
.then((people) => {
    // console.log(people);
    // people.forEach(x => x.getInfo())
    // people.forEach(x => console.log(`I am born ${x.birthYear}`));
});
// взима всички записи от базата с промис варианта
// форичване и викане на метода от personSchema.methods.getInfo от файла Persons

// Person.findById('629f64099cfed5a4244f3802')
// .then(result => {
//     console.log(result);
// });
// намира по айди


// Person.updateOne({_id: '629f64099cfed5a4244f3802'}, {$set: {name: 'Sandokan', age: 100}})
//     .then(result => {
//         console.log(result);
//     });

    // ъпдейтва запис в базата, като го намира по id


    // Person.findByIdAndUpdate('629f64099cfed5a4244f3802', {$set: {name: 'Sando'}})
    // .then(res => {
    //     console.log(res);
    // });
    // find and update едновременно


    // Person.findByIdAndDelete('629f64099cfed5a4244f3802')
    // .then(res => {

    // });
    // намиране по id и изтриване на записа в ДБ