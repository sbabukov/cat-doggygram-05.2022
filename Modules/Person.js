const mongoose = require('mongoose')
// правим си схема/модел на базата, подава се обект за конфигуриране
const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
});

personSchema.methods.getInfo = function () {
    console.log(`Hello, my name is ${this.name} and i am ${this.age} year old!`);
    //използвасе аноонимна функция, не може да се използва => заради this
}
// използване на методи, дефинираме метода getInfo, който автоматично се закрепва на модела Персон

personSchema.virtual('birthYear')
    .get(function() {
        // взимаме текущата година и изваждаме годините
    })
// виртуално пропърти

module.exports = mongoose.model('Person', personSchema); 
// Person е модела
// ('Person', personSchema) подава се модела, после и схемата