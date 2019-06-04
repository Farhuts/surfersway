const router = require('express').Router()
const passport = require('passport')
const FacebookStrategy = require('passport-facebook').Strategy
const {User} = require('../db/models')
module.exports = router

if (!process.env.FACEBOOK_CLIENT_ID || !process.env.FACEBOOK_CLIENT_SECRET) {
  console.log('Google client ID / secret not found. Skipping Google OAuth.')
} else {
  const facebookConfig = {
    clientID: process.env.FACEBOOK_CLIENT_ID,
    clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    callbackURL: process.env.FACEBOOK_CALLBACK,
    profileFields: ['id', 'displayName', 'email']
  }

  const strategy = new FacebookStrategy(
    facebookConfig,
    (token, refreshToken, profile, done) => {
      console.log('PROFULE', profile)
      const facebookId = profile.id
      const userName = profile.displayName
      const email = profile.emails[0].value

      User.findOrCreate({
        where: {facebookId},
        defaults: {userName, email}
      })
        .then(([userName]) => done(null, userName))
        .catch(done)
    }
  )

  passport.use(strategy)

  router.get(
    '/',
    passport.authenticate('facebook', {
      authType: 'rerequest',
      scope: ['public_profile', 'email']
    })
  )

  router.get(
    '/callback',
    passport.authenticate('facebook', {
      successRedirect: '/home',
      failureRedirect: '/login'
    })
  )
}
