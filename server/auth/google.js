const router = require('express').Router()
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy
const {User} = require('../db/models')
module.exports = router

if (!process.env.GOOGLE_CLIENT_ID || !process.env.GOOGLE_CLIENT_SECRET) {
  console.log('Google client ID / secret not found. Skipping Google OAuth.')
} else {
  const googleConfig = {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
  }

  const strategy = new GoogleStrategy(
    googleConfig,
    (token, refreshToken, profile, done) => {
      console.log('PROFULE', profile, profile.emails[0].value)
      const googleId = profile.id
      const userName = profile.displayName
      const email = profile.emails[0].value

      User.findOrCreate({
        where: {googleId},
        defaults: {userName, email}
      })
        .then(([userName]) => done(null, userName))
        .catch(done)
    }
  )

  passport.use(strategy)

  router.get(
    '/',
    passport.authenticate('google', {
      scope: ['email', 'profile']
    })
  )

  router.get(
    '/callback',
    passport.authenticate('google', {
      successRedirect: '/home',
      failureRedirect: '/login'
    })
  )
}

// router.get('/logout', (req, res) => {
//   req.logout()
//   req.session.destroy()
//   res.redirect('/')
// })
