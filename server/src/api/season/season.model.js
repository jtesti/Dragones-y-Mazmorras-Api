const mongoose = require('mongoose');
const seasonSchema = new mongoose.Schema(
    {
        number: { type: Number, required: true, trim: true },
        chapter: { type: String, required: true, trim: true },
        characters: [{ type: mongoose.Schema.Types.ObjectId, ref: "characters", required: false }]
    },
    {
        timestamps: true
    }
);

const Season = mongoose.model('seasons', seasonSchema);
module.exports = Season;