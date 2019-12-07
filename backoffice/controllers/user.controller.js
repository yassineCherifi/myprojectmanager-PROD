const mongoose = require('mongoose');
const User = mongoose.model('User');
const passport = require('passport');
const _ = require('lodash');

const userNotFoundMsg = 'Utilisateur non trouvé';

/**
 * Register a new user.
 */
module.exports.register = (req, res, next) => {
    const user = new User();
    user.name = req.body.name;
    user.email = req.body.email;
    user.password = req.body.password;
    user.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            if (err.code === 11000)
                res.status(442).send(['L\'email existe déja !']);
            else
                next(err);
        }
    });
};

/**
 * Login a user.
 */
module.exports.authenticate = (req, res) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) res.status(400).json(err);
        else
        if (user) {
            const token = user.generateJwt();
            res.cookie('token', token, { maxAge: 3600 * 60 * 1000,httpOnly: true});
            res.status(200).json({ 'token': token });
        }
        else res.status(404).json(info);
    })(req, res);
};

/**
 * Logout the current user.
 */
module.exports.logout = (req, res) => {
    res.clearCookie('token');
    res.status(200).json({success: 'Logout with success !' });
};

/**
 * Grant access to the dashboard.
 */
module.exports.userDashboard = (req, res) => {
    User.findOne({ _id: req._id }, (err, user) => {
        if (!user) res.status(404).json({status: false, message: userNotFoundMsg});
        else res.status(200).json({status: true , user: _.pick(user,['_id','name','email'])});
    });
};

/**
 * Get the user list.
 */
module.exports.getUsers = (req, res) => {
    User.find({},'name email',(err, users) => {
        if (!users) res.status(404).json({status: false, message: userNotFoundMsg});
        else res.status(200).json({users:users});
    });
};

/**
 * Modify a user.
 */
module.exports.modifyUser = (req, res, next) => {
    console.log(req.params);
    User.findOne({_id : req.params.idUser},(err, user) => {
        if (!user) res.status(404).json({status: false, message: userNotFoundMsg});

        user.name = req.body.Name;
        user.email = req.body.email;
        user.password = req.body.password;
        user.save((err, doc) => {
            if (!err)
                res.send(doc);
            else {
                if (err.code === 11000)
                    res.status(442).send(['L\'email existe déjà !']);
                else
                    next(err);
            }
        });
    });
};
