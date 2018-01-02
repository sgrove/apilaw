import React from 'react'

// Import typefaces
// import 'typeface-montserrat'
// import 'typeface-merriweather'

import profilePic from '../images/profile-pic.jpg'
//import profilePic from '../static/img/fireworks.jpg'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
        }}>
        <img
          src={profilePic}
          alt={`Yan Li`}
          style={{
            maxWidth: '50px',
            maxHeight: '50px',
            borderRadius: '50px',
          }}
        />
        <p>
          <strong>Yan Li</strong>, an immigration lawyer who lives in San
          Francisco and works to help people build their dreams in the USA.<br />
          <a href="https://twitter.com/yanli_tlo">Follow her on Twitter</a>
        </p>
      </div>
    )
  }
}

export default Bio
