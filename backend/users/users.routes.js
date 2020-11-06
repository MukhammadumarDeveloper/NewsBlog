const express = require('express');
const router = express.Router();

const UsersModel = require('./users.model');

router.route('/').get(async (req, res) => {
    try {
        let usersList = await UsersModel.find({});
        return res.status(200).send(usersList);
    } catch (error) {
        return res.status(401).send("Uzir malumotlar bazasida xatolik yuz berdi");
    }
});

router.route('/').post(async (req, res) => {
    try {
        await UsersModel.create(req.body);
        return res.status(200).send('User muvofaqqiyatli qoshildi!');
    } catch (error) {
        return res.status(400).send("Userni qo'shishda xatolik yuz berdi");
    }
});

router.route('/login').post(async (req, res) => {
    try {
        let user = await UsersModel.findOne({ username: req.body.username, password: req.body.password });
        if(user) return res.status(200).send(true);
        else return res.status(200).send(false);
    } catch (error) {
        return res.status(400).send(error);
    }
})

router.route('/:userId').put(async (req, res) => {
    try {
        await UsersModel.findByIdAndUpdate(req.params.userId, req.body);
        return res.status(200).send("Muvofaqqiyatli o'zgartirildi!");
    } catch (error) {
        return res.status(400).send("Userni o'zgartirishda xatolik yuz berdi!");
    }
});

router.route('/:userId').delete(async (req, res) => {
    try {
        await UsersModel.findByIdAndDelete(req.params.userId);
        return res.status(200).send("Muvofaqqiyatli o'chirildi!");
    } catch (error) {
        return res.status(400).send("Userni o'chirishda xatolik yuz berdi!");
    }
});

module.exports = router;