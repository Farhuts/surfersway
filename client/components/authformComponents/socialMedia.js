import React from 'react'

const SocialMedia = () => {
  return (
    <div className="center" id="linkSocialMedia">
      <a href="/auth/facebook">
        <img
          className="linkSocialMedia"
          width="50"
          height="50"
          src="assets/002-facebook.png"
        />
      </a>
      <a href="/auth/google">
        <img
          className="linkSocialMedia"
          width="50"
          height="50"
          src="assets/google.png"
        />
      </a>
      <a href="/auth/twitter">
        <img
          className="linkSocialMedia"
          width="50"
          height="50"
          src="assets/001-twitter.png"
        />
      </a>
    </div>
  )
}

export default SocialMedia
