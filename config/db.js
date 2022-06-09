// connecting to DB

const mongoose = require('mongoose');

const uri = 'mongodb://localhost:27017/catagram';

mongoose.connect(uri);
// {useNewUrlParser: true, useUnifiedTopology: true} 
// преди е давала деприкейш уорнинг и е трябвало де се пише горното след (uri)

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
// това е добър начи в конзолата да излиза съобщение за грешка към връзването с ДБ
db.once('open', () => {
    console.log('DB connected!');
    // съобщава, че сме кънектнати към ДБ
});