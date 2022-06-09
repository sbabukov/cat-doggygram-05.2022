const mongoose = require('mongoose')

const catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    breed: String,
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Person'
        // ще е референция към друг модел, подаваме другия модел Пърсън
        // ще има релация към Person, един пърсън може да има многоо котки, една котка ще има само един пърсън
    }
});

module.exports = mongoose.model('Cat', catSchema);