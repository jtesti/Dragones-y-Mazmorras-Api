const mongoose = require('mongoose');
const characterSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, trim: true },
        work: { type: String, required: true, trim: true },
        img: { type: String, trim: true, required: false }
    },
    {
        timestamps: true
    }
);

const Character = mongoose.model('characters', characterSchema);
module.exports = Character;