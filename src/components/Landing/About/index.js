import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Header from '../Header'
import Footer from '../Footer'
import profilePic from '../../../images/profile-pic.jpg'

const ourValuesStyle = {
  textAlign: 'left',
  lineHeight: '24px',
  fontFamily: 'raleway, sans-serif',
  fontSize: '16px',
  color: 'white',
  width: '570px',
}

const bioStyle = {
  textAlign: 'left',
  lineHeight: '24px',
  fontFamily: 'raleway, sans-serif',
  fontSize: '16px',
  color: 'black',
  border: 'none',
}

class About extends React.Component {
  render() {
    return (
      <div className="position_content" id="page_position_content">
        <Header pageName="about" heroColor="black" />
        <div
          className="clearfix colelem shared_content"
          id="pu16350"
          data-content-guid="pu16350_content">
          {/* group */}
          <div
            className="browser_width grpelem shared_content"
            id="u16350-bw"
            data-content-guid="u16350-bw_content"
            style={{height: 313}}>
            <div id="u16350">{/* simple frame */}</div>
          </div>

          <div className="clearfix grpelem" id="u16381-4">
            {/* content */}
            <p>About Us</p>
          </div>
          <div
            className="whoweare clearfix grpelem shared_content wow fadeInUp"
            id="u16302-4"
            data-content-guid="u16302-4_content"
            style={{visibility: 'visible'}}>
            {/* content */}
            <h2>-Who We Are-</h2>
          </div>
        </div>
        <div className="clearfix colelem" id="pu17083">
          {/* group */}
          <div
            className="browser_width grpelem shared_content"
            id="u17083-bw"
            data-content-guid="u17083-bw_content"
            style={{height: 514}}>
            <div id="u17083">
              {/* group */}
              <div className="clearfix" id="u17083_align_to_page">
                <div
                  className="clearfix grpelem shared_content"
                  id="u17132-18"
                  data-content-guid="u17132-18_content">
                  {/* content */}
                  <p id="u17132-2">API Law Office, and its name</p>
                  <p id="u17132-5">
                    <span id="u17132-3">​</span>
                    <span className="actAsInlineDiv normal_text" id="u17133">
                      {/* content */}
                      <span
                        className="actAsDiv excludeFromNormalFlow"
                        id="u17134">
                        {/* simple frame */}
                      </span>
                    </span>
                  </p>
                  <p id="u17132-7">
                    Founded in San Francisco, API Law Office specializes in U.S.
                    immigration law and serves companies and entrepreneurs to
                    acquire appropriate visa and/or green card in order to
                    establish their businesses in the U.S. API Law Office also
                    serves individuals to acquire family-based green card as
                    well as U.S. citizenship.
                  </p>
                  <p id="u17132-8">&nbsp;</p>
                  <p id="u17132-7">
                    The firm name “API” represents the founder’s two passions.
                    First, API is an abbreviation of “All Peoples’ Immigration.”
                    We hope to serve everyone across countries and cultures who
                    strives for their career and life in the U.S. Second, API is
                    also an abbreviation of the tech term “Application
                    Programming Interface” which is a tool/function that enables
                    programmers to create their own applications much more
                    efficiently and easily. We hope to become the API of the
                    complex U.S. immigration system for our clients, so that
                    they can acquire their visa/green card more efficiently and
                    easily.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="browser_width grpelem"
            id="u17181-bw"
            style={{height: 440}}>
            <div id="u17181">
              {/* group */}
              <div className="clearfix" id="u17181_align_to_page">
                <div
                  className="clearfix grpelem shared_content"
                  id="u17183-12"
                  data-content-guid="u17183-12_content">
                  {/* content */}
                  <p id="u17183-2">Our Values</p>
                  <p id="u17183-5">
                    <span id="u17183-3">​</span>
                    <span className="actAsInlineDiv normal_text" id="u17184">
                      {/* content */}
                      <span
                        className="actAsDiv excludeFromNormalFlow"
                        id="u17185">
                        {/* simple frame */}
                      </span>
                    </span>
                  </p>
                  <p id="u17183-7">
                    <strong>Efficiency</strong>: We value our clients’ time and
                    would rather have them spend more time on their business or
                    family than to have them worry about the complex immigration
                    process. Therefore, we strive to make the process as
                    efficient and easy as possible for our clients
                  </p>
                  <p id="u17183-8">&nbsp;</p>
                  <p id="u17183-10">
                    <strong>Relationship</strong>: We believe a truly successful
                    case comes from an open and trusting relationship between
                    the client and attorney. We face our clients with
                    transparency, honesty, and care, with the hope to truly
                    understand the client’s goals and build an application
                    strategy that will be the most beneficial to the client. We
                    strongly encourage our clients to ask any questions and make
                    any suggestions or criticisms so that we can build a strong
                    relationship.
                  </p>
                  <p id="u17183-8">&nbsp;</p>
                  <p id="u17183-10">
                    <strong>Education</strong>: We want to be a resource to
                    everyone who struggles with the complex U.S. immigration
                    system. We offer our first consultation for free with the
                    hope that people can be better informed and make better
                    decisions. We also offer seminars and meetup sessions so
                    that more people can have the opportunity to learn about
                    U.S. immigration system.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="grpelem shared_content"
            id="u5504"
            data-content-guid="u5504_content">
            {/* custom html */}
          </div>
        </div>
        <div className="clearfix colelem" id="pu17808">
          {/* group */}
          <div
            className="browser_width grpelem"
            id="u17808-bw"
            style={{minHeight: '622px'}}>
            <div id="u17808">
              {/* group */}
              <div className="clearfix" id="u17808_align_to_page">
                <div
                  className="clearfix grpelem shared_content"
                  id="u18968"
                  data-content-guid="u18968_content">
                  {/* group */}
                  <div
                    className="clearfix grpelem"
                    id="u17470"
                    style={bioStyle}>
                    {/* column */}
                    <p
                      style={{
                        lineHeight: '36px',
                        fontFamily: 'playfair-display, serif',
                        fontSize: '24px',
                      }}>
                      The Founder
                    </p>
                    <br />
                    Born in Shanghai, China, Yan emigrated to Japan when she was
                    8 years old. After graduating high school in Hiroshima,
                    Japan, Yan came to the U.S. as an international student. Her
                    own immigration experience coupled with her witnessing
                    foreigners’ struggle with immigration status in the U.S.
                    drove her to become an immigration attorney. After
                    graduating from University of California, Los Angeles
                    (UCLA), Yan took advantage of the Optional Practical
                    Training (OPT) system to gain practical experience at an
                    immigration law firm as a legal assistant. After OPT, Yan
                    entered Santa Clara University, School of Law where she
                    worked on various immigration cases with the law school’s
                    affiliated immigration clinic as well as non profit
                    organizations. She also represented a client on an asylum
                    case before the United States Court of Appeals for the Ninth
                    Circuit and successfully negotiated for prosecutorial
                    discretion with the U.S. Immigration and Customs
                    Enforcement.
                    <br />
                    <br />
                    After graduating from law school and acquiring her attorney
                    license in 2013, Yan began her career as an immigration
                    attorney with a law firm exclusively specializes in U.S.
                    immigration law. As the managing attorney at the law firm’s
                    Silicon Valley branch office, Yan had the opportunity to
                    work with a number of companies and entrepreneurs who were
                    starting their new businesses in the U.S. Getting visas for
                    new companies can be very challenging, but Yan found the joy
                    and passion in serving these clients who strive for success
                    with their own passion and mission. In January 2018, Yan
                    founded API Law Office with her passion in providing
                    immigration services with high quality, high efficiency, and
                    high value.
                  </div>
                </div>

                <div
                  className="clearfix grpelem shared_content"
                  id="u19520"
                  data-content-guid="u19520_content">
                  {/* group */}
                  <div className="clearfix grpelem" id="u19528">
                    {/* column */}
                    <div
                      className="museBGSize clearfix colelem"
                      id="u19522"
                      style={{
                        background:
                          '#ffffff url(' +
                          profilePic +
                          ') no-repeat center center',
                      }}>
                      {/* group */}
                      <div
                        className="transition clearfix grpelem"
                        id="u19523-5">
                        {/* content */}
                        <p id="u19523-3">
                          <span id="u19523">​</span>
                          <span
                            className="actAsInlineDiv normal_text"
                            id="u19524">
                            {/* content */}
                            <span
                              className="actAsDiv clearfix excludeFromNormalFlow"
                              id="u19525">
                              {/* group */}
                              <a
                                className="nonblock nontext MuseLinkActive actAsDiv grpelem"
                                id="u19527"
                                href="tel:+14158553088">
                                {/* custom html */}
                                <i
                                  className="fa fa-phone-square"
                                  aria-hidden="true"
                                />
                              </a>
                              <a
                                className="nonblock nontext MuseLinkActive actAsDiv grpelem"
                                id="u19526"
                                href="mailto:info@apilaw.com?subject=Case inquiry">
                                {/* custom html */}
                                <i
                                  className="fa fa-envelope-square"
                                  aria-hidden="true"
                                />
                              </a>
                            </span>
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="clearfix colelem" id="u19529-6">
                      {/* content */}
                      <p id="u19529-2">Yan Li, Esq.</p>
                      <p id="u19529-4">FOUNDER</p>
                    </div>
                    <div style={bioStyle}>
                      <p>License: California</p>
                      <p>Languages: Japanese, Chinese, English</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    )
  }
}

export default About
