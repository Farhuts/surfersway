const router = require('express').Router()
const passport = require('passport')
const TwitterStrategy = require('passport-twitter')
const {User} = require('../db/models')
module.exports = router

if (!process.env.TWITTER_CLIENT_ID || !process.env.TWITTER_CLIENT_SECRET) {
  console.log('TWITTER client ID / secret not found. Skipping TWITTER OAuth.')
} else {
  const twitterConfig = {
    clientID: process.env.TWITTER_CLIENT_ID,
    clientSecret: process.env.TWITTER_CLIENT_SECRET,
    callbackURL: process.env.TWITTER_CALLBACK
  }

  const strategy = new TwitterStrategy(
    twitterConfig,
    (token, refreshToken, profile, done) => {
      console.log('PROFULE', profile, profile)
      // const googleId = profile.id
      // const userName = profile.displayName
      // const email = profile.emails[0].value

      //   User.findOrCreate({
      //     where: {googleId},
      //     defaults: {userName, email}
      //   })
      //     .then(([userName]) => done(null, userName))
      //     .catch(done)
    }
  )

  passport.use(strategy)

  router.get(
    '/',
    passport.authenticate('twitter', {
      scope: ['email', 'profile']
    })
  )

  router.get(
    '/callback',
    passport.authenticate('twitter', {
      successRedirect: '/home',
      failureRedirect: '/login'
    })
  )
}
