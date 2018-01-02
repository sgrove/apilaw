import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

class Footer extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <footer
        className="clearfix colelem shared_content"
        id="pu1110"
        data-content-guid="pu1110_content">
        {/* group */}
        <div className="browser_width grpelem" id="u1110-bw">
          <div id="u1110">
            {/* group */}
            <div className="clearfix" id="u1110_align_to_page">
              <div
                className="clearfix grpelem shared_content"
                id="pu2270-6"
                data-content-guid="pu2270-6_content">
                {/* column */}
                <a
                  className="nonblock nontext MuseLinkActive clearfix colelem shared_content"
                  id="u2270-6"
                  href="/"
                  data-content-guid="u2270-6_content">
                  {/* content */}
                  <p id="u2270-4">
                    <span id="u2270">API</span>
                    <span id="u2270-2"> </span>
                    <span id="u2270-3">Law Office</span>
                  </p>
                </a>
                <div
                  className="clearfix colelem shared_content"
                  id="u2273-6"
                  data-content-guid="u2273-6_content">
                  {/* content */}
                </div>
              </div>
              <div className="clearfix grpelem" id="ppu2267">
                {/* column */}
                <div className="clearfix colelem" id="pu2267">
                  {/* group */}
                  <div
                    className="clearfix grpelem shared_content"
                    id="u2267"
                    data-content-guid="u2267_content">
                    {/* column */}
                    <div className="clearfix colelem" id="u2248-4">
                      {/* content */}
                      <p>Email</p>
                    </div>
                    <a
                      className="nonblock nontext MuseLinkActive clearfix colelem"
                      id="u2252-4"
                      href="/">
                      {/* content */}
                      <p>info@apilaw.com</p>
                    </a>
                  </div>
                  <div
                    className="clearfix grpelem shared_content"
                    id="u2276"
                    data-content-guid="u2276_content">
                    {/* column */}
                    <div className="clearfix colelem" id="u2279-4">
                      {/* content */}
                      <p>Phone</p>
                    </div>
                    <a
                      className="nonblock nontext MuseLinkActive clearfix colelem"
                      id="u2281-4"
                      href="/">
                      {/* content */}
                      <p>415-855-3088</p>
                    </a>
                  </div>
                </div>
                <div
                  className="clearfix colelem shared_content"
                  id="u2303-6"
                  data-content-guid="u2303-6_content">
                  {/* content */}
                  <p>
                    <span id="u2303">​</span>
                    <span className="actAsInlineDiv normal_text" id="u2313">
                      {/* content */}
                      <span
                        className="actAsDiv excludeFromNormalFlow"
                        id="u2310">
                        {/* custom html */}
                        <i className="fa fa-copyright" aria-hidden="true" />
                      </span>
                    </span>
                    <span> </span>2018 API Law Office All Rights Reserved
                  </p>
                </div>
              </div>
              <div
                className="clearfix grpelem shared_content"
                id="u2245"
                data-content-guid="u2245_content">
                {/* group */}
                <div className="clearfix colelem" id="u2279-4">
                  {/* content */}
                  <p>Location</p>
                </div>
                <a
                  className="nonblock nontext MuseLinkActive clearfix colelem"
                  id="u2281-4"
                  href="/">
                  {/* content */}
                  <p>388 Market Street, Suite 1300, San Francisco, CA, 94111</p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="browser_width grpelem shared_content"
          id="u2300-bw"
          data-content-guid="u2300-bw_content">
          <div id="u2300">{/* simple frame */}</div>
        </div>
      </footer>
    )
  }
}

export default Footer
