const mongoose = require('mongoose');

const HomeSchema = new mongoose.Schema({

    titulo: { type: String, required: true },

    descricao: String

}, { bufferTimeoutMS: 20000 });


const HomeModel = mongoose.model('Home', HomeSchema);

module.exports = HomeModel;
