const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

const postsRoutes = require('./posts/posts.routes');
const usersRoutes = require('./users/users.routes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb://localhost:27017/newsblog", { useNewUrlParser: "true" });
mongoose.connection.on("error", (err) => { console.log(err); });
mongoose.connection.on("connected", (err, res) => {
    console.log("monggose is connected");
});

app.use(cors());

app.use('/posts', postsRoutes);
app.use('/users', usersRoutes);

app.listen(3000, () => {
    console.log("Nodeserver ishlayapti 3000 chi portda");
});