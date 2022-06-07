// това примерно, когато ще се ползва нейтив монго

const mongodb = require('mongodb');
// взимаме монгоДБ драйвера

const MongoClient = mongodb.MongoClient;
// взимаме клиента MongoClient от mongodb.MongoClient
// с клиента правим връзка с ДБ-то. С Монгуз става по-лесно връзката с ДБ

const uri = 'mongodb://localhost:27017'
// адреса на койтоо искаме да се вържем

const client = new MongoClient(uri);
//  правим нова инстанция на клиента и подаваме нашия кънекшън стринг

// първи начин
// client.connect()
// .then(res => {
//     const db = client.db('catgram');
//     const cats = db.collection('cats');
//     return cats.findOne({});
    
// })
// .then(res => {
//     console.log(res);
// })

// втори начин
// client.connect(err => {
//     if (err) {
//         console.log(err);
//         return
//     };
//     let db = client.db('catgram')
//     // на DB му подаваме базата, към коятоо искаме да се кънектнем

//     let catsCollection = db.collection('cats');
//     // взимаме нашата колекция от базата
//     catsCollection.findOne({name: 'Garry'}, (err, result) => {
//         // {name: 'Garry'} това в скобите е като филтър какво да ни върне, в случая котката Гари, ако оставим празни скоби ще върне първата котка, защото няма критерии за филтрация

//         if (err) {
//             console.log(err);
//             return;
//         };
//             console.log(result);
//             });
// });
// това горното е по-трядния начин за кънектване

// трети начин
async function run() {
    await client.connect()
    
    const db = client.db('catgram');
    const cats = db.collection('cats');


    let firstCat = await cats.findOne({});
    console.log(firstCat);
}

run()