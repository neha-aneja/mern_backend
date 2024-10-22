const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();
const port = process.env.PORT || 3003;

const static_path = path.join(__dirname, '../public');
const template_path = path.join(__dirname, '../templates/views');
const partials_path = path.join(__dirname, '../templates/partials');

app.use(express.static(static_path));
app.set('view engine', 'hbs');
app.set('views', template_path);
hbs.registerPartials(partials_path);

require("./db/conn");
const Register = require("./models/registerAction");
const {json} = require("express");

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.listen(port, () => {
    console.log(`server is running at port no. ${port}`);
});

app.get('/', (req, res) => {
    // res.send('hey there !!!')
    res.render('index');
});

app.get('/register', (req, res) => {
    // res.send('hey there !!!')
    res.render('register');
});

app.post('/register', async (req, res) => {
try {
// const pswd = req.body.password;
// const cpswd = req.body.confirmPassword;

// if(pswd === cpswd) {
const registerData = new Register({
    fullname: req.body.fullname,
    email: req.body.email,
    gender: req.body.gender,
    password: req.body.password,
    // confirmpassword: req.body.confirmpassword
})

const registered = await registerData.save();
res.status(201).render('index');
// } else {
//     res.send("passwords are not matching");
// }
} catch (error) {
    res.status(400).send(error);
}
})