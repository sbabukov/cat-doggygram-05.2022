const fs = require('fs');
const catsdata = require('./cats.json')

const cats = catsdata.slice();
// чрез catsdata.slice() правим копие на catsdata за да не го прецакаме

function add(name) {
    if (name) {

        cats.push(name);
        fs.writeFile('./cats.json', JSON.stringify(cats), (err) => {
            // масива (cats) трябва да се обърне в стринг чрез JSON.stringify(cats) за да може да го запишем във текстовия файл
            
            if (err) {
                console.log('Some error' + err);
                return;
            }
            console.log(`Successful cat ${name} write `);
        });
        // когато добавиш котка, искаме наново да се презапише cats.json с новата котка
    };

};
// функция за добавяне на cat към горния масив cats

function getAll() {
    return cats.slice();
    // връщаме нова референция на масива от котаците
};




module.exports = {
    add,
    getAll
};