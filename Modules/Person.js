const mongoose = require('mongoose')
// правим си схема/модел на базата, подава се обект за конфигуриране
const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
});


personSchema.methods.getInfo = function () {
    console.log(`Hello, my name is ${this.name} and i am ${this.age} year old!`);
    //използвасе анонимна функция, не може да се използва => заради this
}
// използване на методи, дефинираме метода getInfo, който автоматично се закрепва на модела Персон

personSchema.methods.getName = function () {
    console.log(`Maraba, my name is ${this.name}`);
}

personSchema.virtual('birthYear')
    .get(function() {
        return 2022-this.age;
        // взимаме текущата година и изваждаме годините
    })
// виртуално пропърти, което го няма в ДБ-то, не персистира в базата

module.exports = mongoose.model('Person', personSchema); 
// Person е модела
// ('Person', personSchema) подава се модела, после и схемата