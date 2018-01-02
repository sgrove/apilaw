import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Home from '../components/Landing/Home'
import {Switch, Route} from 'react-router-dom'
import globalCSS from '../css/site_global.css'
import indexCSS from '../css/index.css'
import masterCSS from '../css/master_b-master.css'
import Script from 'react-load-script'

class LandingIndex extends React.Component {
  handleScriptLoad() {
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on('init', user => {
        if (!user) {
          window.netlifyIdentity.on('login', () => {
            document.location.href = '/admin/'
          })
        }
      })
    }
    window.netlifyIdentity.init()
  }

  render() {
    const siteTitle = get(this, 'props.data.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <div>
        <Helmet title={siteTitle}>
          <meta http-equiv="Content-type" content="text/html;charset=UTF-8" />
          <meta name="generator" content="2015.2.0.352" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          />
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
        </Helmet>
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/practice" render={() => <h1>You found me!</h1>} />
        </Switch>
        <Script
          url="https://identity.netlify.com/v1/netlify-identity-widget.js"
          onLoad={this.handleScriptLoad.bind(this)}
        />
      </div>
    )
  }
}

export default LandingIndex
