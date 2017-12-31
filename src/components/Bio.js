import React from 'react'

// Import typefaces
// import 'typeface-montserrat'
// import 'typeface-merriweather'

import profilePic from '../images/profile-pic.jpg';

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
        }}
        >
        <img
          src={profilePic}
          alt={`Yan Li`}
          style={{
          }}
        />
        <p>
        <strong>Yan Li</strong>, an immigration lawyer who lives in San Francisco and works to help people build their dreams in the USA.{' '}
        <a href="https://twitter.com/yanli_tlo">
        You should follow her on Twitter
      </a>
        </p>
      </div>
    )
  }
}

export default Bio
