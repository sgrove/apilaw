import React from 'react'
import {Link} from 'react-router-dom'
import get from 'lodash/get'
import Helmet from 'react-helmet'

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isMenuOpen: false,
    }
  }
  handleMenuToggle(event) {
    event.stopPropagation()
    event.preventDefault()
    this.setState(oldState => {
      return {...oldState, isMenuOpen: !oldState.isMenuOpen}
    })
  }
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
          data-content-guid="u318-6_content">
          {/* content */}
          <p id="u5473-6">
            <span id="u318">API</span>
            <span id="u318-2"> </span>
            <span id="u318-3">LAW OFFICE</span>
          </p>
        </a>
        <div className="clearfix colelem temp_no_id" data-orig-id="pu94">
          {/* group */}
          <span
            className="browser_width placeholder"
            data-placeholder-for="u94-bw_content">
            {/* placeholder node */}
          </span>
          <span
            className="browser_width placeholder"
            data-placeholder-for="u105-bw_content">
            {/* placeholder node */}
          </span>
          <span
            className="browser_width placeholder"
            data-placeholder-for="u232-bw_content">
            {/* placeholder node */}
          </span>
          <span
            className="nonblock nontext MuseLinkActive shadow clearfix placeholder"
            data-placeholder-for="u318-6_content">
            {/* placeholder node */}
          </span>

          <div className="PamphletWidget clearfix" id="pamphletu35010">
            {/* none box */}
            <div
              className="popup_anchor"
              id="u35016popup"
              style={{display: this.state.isMenuOpen ? 'block' : 'none'}}>
              <div className="ContainerGroup clearfix" id="u35016">
                {/* stack box */}
                <div className="Container invi clearfix grpelem" id="u35017">
                  {/* column */}
                  <nav className="MenuBar clearfix colelem" id="menuu35019">
                    {/* vertical box */}
                    <div
                      className="MenuItemContainer clearfix colelem"
                      id="u35034">
                      {/* horizontal box */}
                      <a
                        className={
                          'nonblock nontext MenuItem MenuItemWithSubMenu clearfix grpelem' +
                          (pageName == 'home' ? ' MuseMenuActive' : '')
                        }
                        id="u35037"
                        href="/">
                        {/* horizontal box */}
                        <div
                          className="MenuItemLabel clearfix grpelem"
                          id="u35038-4">
                          {/* content */}
                          <p
                            className="shared_content"
                            data-content-guid="u35038-4_0_content">
                            Home
                          </p>
                        </div>
                      </a>
                    </div>
                    <div
                      className="MenuItemContainer clearfix colelem"
                      id="u35020">
                      {/* horizontal box */}
                      <a
                        className={
                          'nonblock nontext MenuItem MenuItemWithSubMenu clearfix grpelem' +
                          (pageName == 'about' ? ' MuseMenuActive' : '')
                        }
                        id="u35023"
                        href="/about">
                        {/* horizontal box */}
                        <div
                          className="MenuItemLabel clearfix grpelem"
                          id="u35025-4">
                          {/* content */}
                          <p
                            className="shared_content"
                            data-content-guid="u35025-4_0_content">
                            About
                          </p>
                        </div>
                      </a>
                    </div>
                    <div
                      className="MenuItemContainer clearfix colelem"
                      id="u35027">
                      {/* horizontal box */}
                      <a
                        className={
                          'nonblock nontext MenuItem MenuItemWithSubMenu clearfix grpelem' +
                          (pageName == 'practice' ? ' MuseMenuActive' : '')
                        }
                        id="u35028"
                        href="/practice">
                        {/* horizontal box */}
                        <div
                          className="MenuItemLabel clearfix grpelem"
                          id="u35030-4">
                          {/* content */}
                          <p
                            className="shared_content"
                            data-content-guid="u35030-4_0_content">
                            Services
                          </p>
                        </div>
                      </a>
                    </div>
                    <div
                      className="MenuItemContainer clearfix colelem"
                      id="u35041">
                      {/* horizontal box */}
                      <a
                        className={
                          'nonblock nontext MenuItem MenuItemWithSubMenu clearfix grpelem' +
                          (pageName == 'journal' ? ' MuseMenuActive' : '')
                        }
                        id="u35042"
                        href="/blog">
                        {/* horizontal box */}
                        <div
                          className="MenuItemLabel clearfix grpelem"
                          id="u35043-4">
                          {/* content */}
                          <p
                            className="shared_content"
                            data-content-guid="u35043-4_0_content">
                            Journal
                          </p>
                        </div>
                      </a>
                    </div>
                    <div
                      className="MenuItemContainer clearfix colelem"
                      id="u35041">
                      {/* horizontal box */}
                      <a
                        className={
                          'nonblock nontext MenuItem MenuItemWithSubMenu clearfix grpelem' +
                          (pageName == 'contact' ? ' MuseMenuActive' : '')
                        }
                        id="u35042"
                        href="/contact">
                        {/* horizontal box */}
                        <div
                          className="MenuItemLabel clearfix grpelem"
                          id="u35043-4">
                          {/* content */}
                          <p
                            className="shared_content"
                            data-content-guid="u35043-4_0_content">
                            Contact
                          </p>
                        </div>
                      </a>
                    </div>
                  </nav>
                  <a
                    className="nonblock nontext MuseLinkActive clearfix colelem shared_content"
                    id="u35018-4"
                    href="/"
                    data-content-guid="u35018-4_content">
                    {/* content */}
                    <p id="u35018-2">{/*日本語*/}</p>
                  </a>
                </div>
              </div>
            </div>
            <div className="popup_anchor">
              <div
                className="PamphletCloseButton PamphletLightboxPart popup_element clearfix"
                id="u35014"
                onClick={this.handleMenuToggle.bind(this)}>
                {/* group */}
                <div
                  className="grpelem shared_content"
                  id="u35015"
                  data-content-guid="u35015_content">
                  {/* custom html */}
                  <i
                    className={
                      'fa fa-' + (this.state.isMenuOpen ? 'times' : 'bars')
                    }
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className="PamphletWidget clearfix temp_no_id"
            data-orig-id="pamphletu35010">
            {/* none box */}
            <div className="popup_anchor temp_no_id" data-orig-id="u35016popup">
              <div
                className="ContainerGroup clearfix temp_no_id"
                data-orig-id="u35016">
                {/* stack box */}
                <div
                  className="Container invi clearfix grpelem temp_no_id"
                  data-orig-id="u35017">
                  {/* column */}
                  <nav
                    className="MenuBar clearfix colelem temp_no_id"
                    data-orig-id="menuu35019">
                    {/* vertical box */}
                    <div
                      className="MenuItemContainer clearfix colelem temp_no_id"
                      data-orig-id="u35034">
                      {/* horizontal box */}
                      <a
                        className="nonblock nontext MenuItem MenuItemWithSubMenu MuseMenuActive clearfix grpelem temp_no_id"
                        href="/"
                        data-orig-id="u35037">
                        {/* horizontal box */}
                        <div
                          className="MenuItemLabel clearfix grpelem temp_no_id"
                          data-orig-id="u35038-4">
                          {/* content */}
                          <span
                            className="placeholder"
                            data-placeholder-for="u35038-4_0_content">
                            {/* placeholder node */}
                          </span>
                        </div>
                      </a>
                    </div>
                    <div
                      className="MenuItemContainer clearfix colelem temp_no_id"
                      data-orig-id="u35020">
                      {/* horizontal box */}
                      <a
                        className="nonblock nontext MenuItem MenuItemWithSubMenu transition clearfix grpelem temp_no_id"
                        href="/practice"
                        data-orig-id="u35023">
                        {/* horizontal box */}
                        <div
                          className="MenuItemLabel clearfix grpelem temp_no_id"
                          data-orig-id="u35025-4">
                          {/* content */}
                          <span
                            className="placeholder"
                            data-placeholder-for="u35025-4_0_content">
                            {/* placeholder node */}
                          </span>
                        </div>
                      </a>
                    </div>
                    <div
                      className="MenuItemContainer clearfix colelem temp_no_id"
                      data-orig-id="u35027">
                      {/* horizontal box */}
                      <a
                        className="nonblock nontext MenuItem MenuItemWithSubMenu transition clearfix grpelem temp_no_id"
                        href="/attorneys"
                        data-orig-id="u35028">
                        {/* horizontal box */}
                        <div
                          className="MenuItemLabel clearfix grpelem temp_no_id"
                          data-orig-id="u35030-4">
                          {/* content */}
                          <span
                            className="placeholder"
                            data-placeholder-for="u35030-4_0_content">
                            {/* placeholder node */}
                          </span>
                        </div>
                      </a>
                    </div>
                    <div
                      className="MenuItemContainer clearfix colelem temp_no_id"
                      data-orig-id="u35041">
                      {/* horizontal box */}
                      <a
                        className="nonblock nontext MenuItem MenuItemWithSubMenu transition clearfix grpelem temp_no_id"
                        href="/contact"
                        data-orig-id="u35042">
                        {/* horizontal box */}
                        <div
                          className="MenuItemLabel clearfix grpelem temp_no_id"
                          data-orig-id="u35043-4">
                          {/* content */}
                          <span
                            className="placeholder"
                            data-placeholder-for="u35043-4_0_content">
                            {/* placeholder node */}
                          </span>
                        </div>
                      </a>
                    </div>
                  </nav>
                  <span
                    className="nonblock nontext MuseLinkActive clearfix colelem placeholder"
                    data-placeholder-for="u35018-4_content">
                    {/* placeholder node */}
                  </span>
                </div>
              </div>
            </div>
            <div
              className="ThumbGroup clearfix grpelem temp_no_id"
              data-orig-id="u35011">
              {/* none box */}
              <div className="popup_anchor">
                <div
                  className="Thumb popup_element clearfix temp_no_id"
                  data-orig-id="u35012">
                  {/* group */}
                  <span
                    className="grpelem placeholder"
                    data-placeholder-for="u35013_content">
                    {/* placeholder node */}
                  </span>
                </div>
              </div>
            </div>
            <div className="popup_anchor">
              <div
                className="PamphletCloseButton PamphletLightboxPart popup_element clearfix temp_no_id"
                data-orig-id="u35014">
                {/* group */}
                <span
                  className="grpelem placeholder"
                  data-placeholder-for="u35015_content">
                  {/* placeholder node */}
                </span>
              </div>
            </div>
          </div>
        </div>
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
                (pageName == 'journal' ? ' MuseMenuActive' : '')
              }
              id="u2066"
              href="/blog">
              {/* horizontal box */}
              <div
                className="MenuItemLabel NoWrap clearfix grpelem"
                id="u2068-4">
                {/* content */}
                <p
                  className="shared_content"
                  data-content-guid="u2068-4_0_content">
                  News
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
                  Services
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
                (pageName == 'contact' ? ' MuseMenuActive' : '')
              }
              id="u2108"
              to="/contact">
              {/* horizontal box */}
              <div
                className="MenuItemLabel NoWrap clearfix grpelem"
                id="u2111-4">
                {/* content */}
                <p
                  className="shared_content"
                  data-content-guid="u2111-4_0_content">
                  Contact
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
          <p id="u2126-2">{/*日本語*/}</p>
        </div>
      </div>
    )
  }
}

export default Header
