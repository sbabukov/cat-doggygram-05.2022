const Person = require('../Modules/Person');
const Cat = require('../Modules/Cat');
// рекуирваме и двата модела

function createCat(name, owner) {
    let person = new Person({name: owner, age: 50});
    // създаваме пърсън с името на собственика на котката
    person.save()
        .then(createdPerson => {
            let cat = new Cat({name, age: 50, breed: 'Persian', owner: createdPerson});
            // след като сме създали пърсъна, създаваме и котка
            // криейтнатия пърсън го слагаме като оунер на котката
            return cat.save();

        })
        .then(createdCat => {
            console.log(createdCat);
        })
};

module.exports = createCat;