const User = require('../models/User');

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.render('users', { users });
    } catch (err) {
        res.status(500).send('Server Error');
    }
};

exports.createUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const newUser = new User({ name, email, password });
        await newUser.save();
        res.redirect('/users');
    } catch (err) {
        res.status(500).send('Server Error');
    }
};

exports.createUser =  (req,res,next) =>{
    const bodydata = {
        name : req.body.name,
        email :  req.body.email,
        password :  req.body.password
    }
    const data =  User(bodydata);
    data.save();
    console.log('record added.');
}
