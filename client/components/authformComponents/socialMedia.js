import React from 'react'

const SocialMedia = () => {
  return (
    <div className="center" id="linkSocialMedia">
      <div className="icon">
        <a href="/auth/facebook">
          <p className="iconP">f</p>
        </a>
      </div>
      <div className="icon">
        <a href="/auth/google">
          <p className="iconP">G+</p>
        </a>
      </div>
      <div className="icon">
        <a href="/auth/twitter">
          <p className="iconP">in</p>
        </a>
      </div>
    </div>
  )
}

export default SocialMedia
