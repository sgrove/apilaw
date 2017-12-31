import React from 'react';
import Link from 'gatsby-link';
import get from 'lodash/get';
import Helmet from 'react-helmet';
import Attorneys from '../components/Landing/Attorneys';
import {Switch, Route} from 'react-router-dom';
import globalCSS from '../css/site_global.css';
import attorneysCSS from '../css/attorneys.css';

class LandingIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');
    const posts = get(this, 'props.data.allMarkdownRemark.edges');

    return (
        <div>
        <Helmet title={siteTitle}>
        <meta http-equiv="Content-type" content="text/html;charset=UTF-8"/>
        <meta name="generator" content="2015.2.0.352"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <style id="global-styles" type="text/css">{`${globalCSS}`}</style>
        <style id="pagesheet" type="text/css">{`${attorneysCSS}`}</style>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        </Helmet>
        <Switch>
        <Route exact path="/attorneys" render={() => <Attorneys />} />
        </Switch>
        </div>
    );
  }
}

export default LandingIndex;
