const SeasonRoutes = require('express').Router();
const { isAuth } = require("../../middlewares/auth.middleware");
const upload = require('../../middlewares/updateFile.middleware');

const {
    getAll,
    getOne,
    postOne,
    patchOne,
    deleteOne
} = require('./season.controller');

SeasonRoutes.get('/', getAll);
SeasonRoutes.get('/:id', getOne);
SeasonRoutes.post('/', [isAuth], upload.single('img'), postOne);
SeasonRoutes.patch('/:id', [isAuth], upload.single('img'), patchOne);
SeasonRoutes.delete('/:id', [isAuth], deleteOne);

module.exports = SeasonRoutes;