const passport = require('passport');
const mongoose = require('mongoose');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');

const User = mongoose.model('users');

console.log('using google strategy');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((user, done) => {
    User.findById(user.id).then((user) => {
        done(null, user);
    });
});

passport.use(new GoogleStrategy(
    {
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback',
        proxy: true

    },
    async (accessToken, refreshToken, profile, done) => {
        const existingUser = User.findOne({ googleId: profile.id });
        if (existingUser) {
            done(null, existingUser);
        }
        else {
            const user = new User({ googleId: profile.id }).save();
            done(null, user);
        }
    }
)
);
