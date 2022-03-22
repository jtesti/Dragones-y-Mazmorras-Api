const Season = require('./season.model');
const { deleteImgCloudinary } = require('../../middlewares/deleteFile.middleware');


const getAll = async (req, res, next) => {
    try {
        const seasons = await Season.find().populate('characters');
        res.status(200).json(seasons);
    } catch (error) {
        return next(error)
    }
}

const getOne = async (req, res, next) => {
    try {
        const { id } = req.params;
        const season = await Season.findById(id).populate('characters');
        res.status(200).json(season);
    } catch (error) {
        return next(error)
    }
}

const postOne = async (req, res, next) => {
    try {
        const season = new Season();
        season.number = req.body.number;
        season.chapter = req.body.chapter;
        season.characters = req.body.characters;
        if (req.file) season.img = req.file.path
        const seasonDB = await season.save();
        return res.status(201).json(seasonDB)
    } catch (error) {
        return next(error)
    }
}

const patchOne = async (req, res, next) => {
    try {
        const { id } = req.params;
        const season = new Season();
        season.number = req.body.number;
        season.chapter = req.body.chapter;
        season.characters = req.body.characters;
        if (req.file) season.img = req.file.path
        season._id = id;
        const updateSeason = await Season.findByIdAndUpdate(id, season);
        return res.status(200).json(updateSeason);
    } catch (error) {
        return next(error);
    }
}

const deleteOne = async (req, res, next) => {
    try {
        const { id } = req.params;
        const season = await Season.findByIdAndDelete(id);
        if (season.img) deleteImgCloudinary(season.img)
        return res.status(200).json(season);
    } catch (error) {
        return next(error);
    }
}

module.exports = {
    getAll,
    getOne,
    postOne,
    patchOne,
    deleteOne
}