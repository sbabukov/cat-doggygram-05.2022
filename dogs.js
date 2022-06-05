const fs = require('fs');
const dogsData = require('./dogsDB.json')

const dogs = dogsData.slice();

function addDog(name) {
    
    dogs.push(name);
    fs.writeFile('./dogsDB.json', JSON.stringify(dogs), (err) => {
        
    // масива (dogs) трябва да се обърне в стринг чрез JSON.stringify(cats) за да може да го запишем във текстовия файла

        if(err) {
            console.log('Some error' + err);
            return
        }
        console.log(`Successful dog ${name} write `);
    });
};
// функцията добавяне на кучета, 


function getAllDogs() {
    return dogs.slice();
    // връщаме нова референция на масива от кучетата

};
// функцията взимане на всички кучета, 




module.exports = {
    addDog,
    getAllDogs
};