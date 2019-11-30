const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');

const User = mongoose.model('User');

passport.use(
    new localStrategy({ usernameField: 'email' },
        (username, password, done) => {
            User.findOne({ email: username }, (err, user) => {
                if (err)
                    return done(err);
                else if (!user)
                    return done(null, false, { message: 'L\'adresse mail n\'existe pas' });
                else
                if (!user.verifyPassword(password))
                    return done(null, false, { message: 'Le mot de passe est incorrect' });
                else
                    return done(null, user);
            });
        })
);
