import React from 'react'
import {Link} from 'react-router-dom'
import get from 'lodash/get'
import Helmet from 'react-helmet'

class Header extends React.Component {
  render() {
    const pageName = !!this.props.pageName
      ? this.props.pageName.toLowerCase()
      : ''
    const scrollableHeader = this.props.scrollableHeader
    const heroImage = this.props.heroImage
    const heroColor = this.props.heroColor
    const noHero = this.props.noHero
    console.log('noHero?', noHero)
    return (
      <div
        className="clearfix colelem"
        style={{
          zIndex: '2',
          paddingBottom: scrollableHeader ? '620px' : '84px',
        }}>
        {/* group */}
        {noHero ? null : (
          <div
            className="browser_width shared_content"
            id="u94-bw"
            data-content-guid="u94-bw_content">
            <div id="u94">
              <div
                className="museBGSize"
                style={{
                  background: heroImage
                    ? 'url(' + heroImage + ') no-repeat center bottom'
                    : heroColor ? heroColor : '',
                  position: 'fixed',
                  width: '100%',
                }}
                id="u105"
              />
            </div>
          </div>
        )}
        <div
          className="browser_width shared_content"
          id="u5472-bw"
          data-content-guid="u5472-bw_content"
          style={{height: 0}}>
          <div id="u5472">{/* simple frame */}</div>
        </div>
        <div
          className="browser_width shared_content"
          id="u232-bw"
          data-content-guid="u232-bw_content"
          style={{height: 0}}>
          <div className="shadow" id="u232">
            {/* simple frame */}
          </div>
        </div>
        <a
          className="nonblock nontext shadow clearfix shared_content"
          id="u318-6"
          href="/"
          data-content-guid="u318-6_content"
          style={{marginLeft: '-630px'}}>
          {/* content */}
          <p id="u5473-6">
            <span id="u318">API</span>
            <span id="u318-2"> </span>
            <span id="u318-3">LAW OFFICE</span>
          </p>
        </a>
        <nav
          className="MenuBar clearfix"
          id="menuu1997"
          style={{marginLeft: '-350px'}}>
          {/* horizontal box */}
          <div className="MenuItemContainer clearfix grpelem" id="u1998">
            {/* vertical box */}
            <a
              className={
                'nonblock nontext MenuItem MenuItemWithSubMenu clearfix colelem' +
                (pageName == 'home' ? ' MuseMenuActive' : '')
              }
              id="u1999"
              href="/">
              {/* horizontal box */}
              <div
                className="MenuItemLabel NoWrap clearfix grpelem"
                id="u2001-4">
                {/* content */}
                <p
                  className="shared_content"
                  data-content-guid="u2001-4_0_content">
                  Home
                </p>
              </div>
            </a>
          </div>
          <div
            className="MenuItemContainer clearfix grpelem"
            id="u2063"
            style={{left: '429px'}}>
            {/* vertical box */}
            <a
              className={
                'nonblock nontext MenuItem MenuItemWithSubMenu clearfix colelem' +
                (pageName == 'contact' ? ' MuseMenuActive' : '')
              }
              id="u2066"
              href="/contact">
              {/* horizontal box */}
              <div
                className="MenuItemLabel NoWrap clearfix grpelem"
                id="u2068-4">
                {/* content */}
                <p
                  className="shared_content"
                  data-content-guid="u2068-4_0_content">
                  Contact
                </p>
              </div>
            </a>
          </div>

          <div className="MenuItemContainer clearfix grpelem" id="u2063">
            {/* vertical box */}
            <a
              className={
                'nonblock nontext MenuItem MenuItemWithSubMenu clearfix colelem' +
                (pageName == 'practice' ? ' MuseMenuActive' : '')
              }
              id="u2066"
              href="/practice">
              {/* horizontal box */}
              <div
                className="MenuItemLabel NoWrap clearfix grpelem"
                id="u2068-4">
                {/* content */}
                <p
                  className="shared_content"
                  data-content-guid="u2068-4_0_content">
                  Practice
                </p>
              </div>
            </a>
          </div>
          <div className="MenuItemContainer clearfix grpelem" id="u2042">
            {/* vertical box */}
            <Link
              className={
                'nonblock nontext MenuItem MenuItemWithSubMenu clearfix colelem' +
                (pageName == 'about' ? ' MuseMenuActive' : '')
              }
              to="/about">
              <div
                className="MenuItemLabel NoWrap clearfix grpelem"
                id="u2046-4"
                style={
                  pageName == 'about'
                    ? {
                        color: '#BFA16A',
                        visibility: 'inherit',
                        fontFamily: 'raleway, sans-serif',
                        fontWeight: '400',
                        fontStyle: 'normal',
                      }
                    : {}
                }>
                <p
                  className="shared_content"
                  data-content-guid="u2046-4_0_content">
                  About
                </p>
              </div>
            </Link>
          </div>
          <div
            className="MenuItemContainer clearfix grpelem"
            id="u2105"
            style={{left: '565px'}}>
            {/* vertical box */}
            <Link
              className={
                'nonblock nontext MenuItem MenuItemWithSubMenu clearfix colelem' +
                (pageName == 'journal' ? ' MuseMenuActive' : '')
              }
              id="u2108"
              to="/blog">
              {/* horizontal box */}
              <div
                className="MenuItemLabel NoWrap clearfix grpelem"
                id="u2111-4">
                {/* content */}
                <p
                  className="shared_content"
                  data-content-guid="u2111-4_0_content">
                  Journal
                </p>
              </div>
            </Link>
          </div>
        </nav>
        <div
          className="shadow clearfix shared_content"
          id="u2126-4"
          data-content-guid="u2126-4_content"
          style={{marginLeft: '325px'}}>
          {/* content */}
          <p id="u2126-2">Call Us : +1-415-690-1100</p>
        </div>
      </div>
    )
  }
}

export default Header
