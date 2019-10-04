const mongoose = require('mongoose');
const { Schema } = mongoose;



const UsuarioSchema = new Schema({

    id: { type: String, required: true},
    name: { type: String, required: true},
    pass: { type: String, required: true},
    info: { type: String, required: true},

})

module.exports = mongoose.model('Usuario', UsuarioSchema);