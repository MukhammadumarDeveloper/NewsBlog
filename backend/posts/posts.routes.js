const express = require('express');
const router = express.Router();

const postsModel = require('./posts.model');

router.route('/').get(async (req, res) => {
    try {
        let postList = await postsModel.find({});
        return res.status(200).send(postList);
    } catch (error) {
        return res.status(401).send("Uzir so'rov amalga oshmadi");
    }
});

router.route('/').post(async (req, res) => {
    try {
        await postsModel.create(req.body);
        return res.status(200).send("Maqola muvofaqqiyatli qo'shildi!");
    } catch (error) {
        return res.status(400).send(error);
    }
});

// Kategoriya bo'yicha qidirish
// http://localhost:3000/posts/reqbody: { kategory: "kategoriya" }

router.route('/:category').post(async (req, res) => {
    try {
        // let categorys = req.body.category;
        let result = await postsModel.find({ category: req.params.category });
        return res.status(200).send(result);
    } catch (error) {
        return res.status(400).send(error);
    }
});

router.route('/:postId').put(async (req, res) => {
    try {
        await postsModel.findByIdAndUpdate(req.params.postId, req.body);
        return res.status(200).send("Muvofaqqiyatli o'zgartirildi!");
    } catch (error) {
        return res.status(400).send(error);
    }
});

router.route('/:postId').delete(async (req, res) => {
    try {
        await postsModel.findByIdAndDelete(req.params.postId);
        return res.status(200).send("Muvofaqqiyatli o'chirildi!");
    } catch (error) {
        return res.status(400).send(error);
    }
});

module.exports = router;