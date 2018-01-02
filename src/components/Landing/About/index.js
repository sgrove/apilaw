import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Header from '../Header'
import Footer from '../Footer'
import profilePic from '../../../images/profile-pic.jpg'

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
            <p>Our Team</p>
          </div>
          <div
            className="whoweare clearfix grpelem shared_content wow fadeInUp"
            id="u16302-4"
            data-content-guid="u16302-4_content"
            style={{visibility: 'visible'}}>
            {/* content */}
            <h2>-About Us-</h2>
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
                  <p id="u17132-2">High Quality Performance</p>
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
                    Vivamus ante est, tempus eget suscipit sit amet, laoreet a
                    dui. Fusce aliquet arcu eget sapien varius fringilla.
                    Suspendisse porttitor efficitur facilisis. Quisque a
                    condimentum justo. Donec sed tristique augue. In hac
                    habitasse platea dictumst.
                  </p>
                  <p id="u17132-8">&nbsp;</p>
                  <p id="u17132-10">
                    Nam id enim eleifend turpis efficitur vestibulum.
                  </p>
                  <p id="u17132-11">&nbsp;</p>
                  <p id="u17132-13">
                    Donec placerat libero vitae sem placerat pellentesque.
                  </p>
                  <p id="u17132-14">&nbsp;</p>
                  <p id="u17132-16">
                    Vivamus mauris tellus, tristique nec rhoncus
                  </p>
                </div>
                <div
                  className="museBGSize grpelem"
                  id="u17162"
                  style={{
                    background:
                      'transparent url(' +
                      profilePic +
                      ') no-repeat center center',
                  }}>
                  {/* simple frame */}
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
                  <p id="u17183-2">Free Case Evaluation</p>
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
                    Vivamus ante est, tempus eget suscipit sit amet, laoreet a
                    dui. Fusce aliquet arcu eget sapien varius fringilla.
                    Suspendisse porttitor efficitur facilisis. Quisque a
                    condimentum justo. Donec sed tristique augue. In hac
                    habitasse platea dictumst.
                  </p>
                  <p id="u17183-8">&nbsp;</p>
                  <p id="u17183-10">
                    Etiam commodo mollis felis hendrerit auctor. Mauris eu urna
                    bibendum tortor molestie tincidunt
                  </p>
                </div>
              </div>
            </div>
          </div>
          <form
            className="form-grp clearfix grpelem"
            id="widgetu17240"
            method="post"
            encType="multipart/form-data"
            action="scripts/form-u17240.php">
            {/* none box */}
            <div
              className="fld-grp clearfix grpelem"
              id="widgetu17256"
              data-required="true">
              {/* none box */}
              <span
                className="fld-input NoWrap actAsDiv clearfix grpelem"
                id="u17258-4">
                {/* content */}
                <input
                  className="wrapped-input"
                  type="text"
                  spellCheck="false"
                  id="widgetu17256_input"
                  name="custom_U17256"
                  tabIndex={1}
                />
                <label
                  className="wrapped-input fld-prompt"
                  id="widgetu17256_prompt"
                  htmlFor="widgetu17256_input">
                  <span
                    className="actAsPara shared_content"
                    data-content-guid="widgetu17256_prompt_0_content">
                    Enter Name
                  </span>
                </label>
              </span>
            </div>
            <div
              className="fld-grp clearfix grpelem"
              id="widgetu17248"
              data-required="true"
              data-type="email">
              {/* none box */}
              <span
                className="fld-input NoWrap actAsDiv clearfix grpelem"
                id="u17250-4">
                {/* content */}
                <input
                  className="wrapped-input"
                  type="email"
                  spellCheck="false"
                  id="widgetu17248_input"
                  name="Email"
                  tabIndex={2}
                />
                <label
                  className="wrapped-input fld-prompt"
                  id="widgetu17248_prompt"
                  htmlFor="widgetu17248_input">
                  <span
                    className="actAsPara shared_content"
                    data-content-guid="widgetu17248_prompt_0_content">
                    Enter Email
                  </span>
                </label>
              </span>
            </div>
            <div className="clearfix grpelem" id="u17245-4">
              {/* content */}
              <p
                className="shared_content"
                data-content-guid="u17245-4_0_content">
                Submitting Form...
              </p>
            </div>
            <div className="clearfix grpelem" id="u17260-4">
              {/* content */}
              <p
                className="shared_content"
                data-content-guid="u17260-4_0_content">
                The server encountered an error.
              </p>
            </div>
            <div className="clearfix grpelem" id="u17246-4">
              {/* content */}
              <p
                className="shared_content"
                data-content-guid="u17246-4_0_content">
                Form received.
              </p>
            </div>
            <input
              className="submit-btn NoWrap grpelem"
              id="u17247-17"
              type="submit"
              value=""
              tabIndex={5}
            />
            {/* state-based BG images */}
            <div
              className="fld-grp clearfix grpelem"
              id="widgetu17241"
              data-required="true">
              {/* none box */}
              <span
                className="fld-textarea actAsDiv clearfix grpelem"
                id="u17243-4">
                {/* content */}
                <textarea
                  className="wrapped-input"
                  id="widgetu17241_input"
                  name="custom_U17241"
                  tabIndex={4}
                  defaultValue={''}
                />
                <label
                  className="wrapped-input fld-prompt"
                  id="widgetu17241_prompt"
                  htmlFor="widgetu17241_input">
                  <span
                    className="actAsPara shared_content"
                    data-content-guid="widgetu17241_prompt_0_content">
                    Enter Your Message
                  </span>
                </label>
              </span>
            </div>
            <div
              className="fld-grp clearfix grpelem"
              id="widgetu17252"
              data-required="true">
              {/* none box */}
              <span
                className="fld-input NoWrap actAsDiv clearfix grpelem"
                id="u17253-4">
                {/* content */}
                <input
                  className="wrapped-input"
                  type="tel"
                  spellCheck="false"
                  id="widgetu17252_input"
                  name="custom_U17252"
                  tabIndex={3}
                />
                <label
                  className="wrapped-input fld-prompt"
                  id="widgetu17252_prompt"
                  htmlFor="widgetu17252_input">
                  <span
                    className="actAsPara shared_content"
                    data-content-guid="widgetu17252_prompt_0_content">
                    Enter Phone Number
                  </span>
                </label>
              </span>
            </div>
          </form>
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
            style={{height: 1319}}>
            <div id="u17808">
              {/* group */}
              <div className="clearfix" id="u17808_align_to_page">
                <div
                  className="clearfix grpelem shared_content"
                  id="u18968"
                  data-content-guid="u18968_content">
                  {/* group */}
                  <div className="clearfix grpelem" id="u17470">
                    {/* column */}
                    <div className="museBGSize clearfix colelem" id="u17450">
                      {/* group */}
                      <div
                        className="transition clearfix grpelem"
                        id="u18209-5">
                        {/* content */}
                        <p id="u18209-3">
                          <span id="u18209">​</span>
                          <span
                            className="actAsInlineDiv normal_text"
                            id="u18325">
                            {/* content */}
                            <span
                              className="actAsDiv clearfix excludeFromNormalFlow"
                              id="u18275">
                              {/* group */}
                              <a
                                className="nonblock nontext MuseLinkActive actAsDiv grpelem"
                                id="u18277"
                                href="attorneys.html">
                                {/* custom html */}
                                <i
                                  className="fa fa-phone-square"
                                  aria-hidden="true"
                                />
                              </a>
                              <a
                                className="nonblock nontext MuseLinkActive actAsDiv grpelem"
                                id="u18276"
                                href="attorneys.html">
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
                    <div className="clearfix colelem" id="u17460-6">
                      {/* content */}
                      <p id="u17460-2">James Halleson</p>
                      <p id="u17460-4">FOUNDER</p>
                    </div>
                    <a
                      className="nonblock nontext transition clearfix colelem"
                      id="u18958-4"
                      href="attorney1.html">
                      {/* content */}
                      <p id="u18958-2">View Full Profile</p>
                    </a>
                  </div>
                </div>
                <div
                  className="clearfix grpelem shared_content"
                  id="u19102"
                  data-content-guid="u19102_content">
                  {/* group */}
                  <div className="clearfix grpelem" id="u19109">
                    {/* column */}
                    <div className="museBGSize clearfix colelem" id="u19108">
                      {/* group */}
                      <div
                        className="transition clearfix grpelem"
                        id="u19103-5">
                        {/* content */}
                        <p id="u19103-3">
                          <span id="u19103">​</span>
                          <span
                            className="actAsInlineDiv normal_text"
                            id="u19104">
                            {/* content */}
                            <span
                              className="actAsDiv clearfix excludeFromNormalFlow"
                              id="u19105">
                              {/* group */}
                              <a
                                className="nonblock nontext MuseLinkActive actAsDiv grpelem"
                                id="u19107"
                                href="attorneys.html">
                                {/* custom html */}
                                <i
                                  className="fa fa-phone-square"
                                  aria-hidden="true"
                                />
                              </a>
                              <a
                                className="nonblock nontext MuseLinkActive actAsDiv grpelem"
                                id="u19106"
                                href="attorneys.html">
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
                    <div className="clearfix colelem" id="u19110-6">
                      {/* content */}
                      <p id="u19110-2">Marina Dow</p>
                      <p id="u19110-4">CORPORATE LAW</p>
                    </div>
                    <a
                      className="nonblock nontext transition clearfix colelem"
                      id="u19111-4"
                      href="attorney1.html">
                      {/* content */}
                      <p id="u19111-2">View Full Profile</p>
                    </a>
                  </div>
                </div>
                <div
                  className="clearfix grpelem shared_content"
                  id="u19311"
                  data-content-guid="u19311_content">
                  {/* group */}
                  <div className="clearfix grpelem" id="u19317">
                    {/* column */}
                    <div className="museBGSize clearfix colelem" id="u19319">
                      {/* group */}
                      <div
                        className="transition clearfix grpelem"
                        id="u19312-5">
                        {/* content */}
                        <p id="u19312-3">
                          <span id="u19312">​</span>
                          <span
                            className="actAsInlineDiv normal_text"
                            id="u19313">
                            {/* content */}
                            <span
                              className="actAsDiv clearfix excludeFromNormalFlow"
                              id="u19314">
                              {/* group */}
                              <a
                                className="nonblock nontext MuseLinkActive actAsDiv grpelem"
                                id="u19316"
                                href="attorneys.html">
                                {/* custom html */}
                                <i
                                  className="fa fa-phone-square"
                                  aria-hidden="true"
                                />
                              </a>
                              <a
                                className="nonblock nontext MuseLinkActive actAsDiv grpelem"
                                id="u19315"
                                href="attorneys.html">
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
                    <div className="clearfix colelem" id="u19320-6">
                      {/* content */}
                      <p id="u19320-2">Thomas Smith</p>
                      <p id="u19320-4">CORPORATE LAW</p>
                    </div>
                    <a
                      className="nonblock nontext transition clearfix colelem"
                      id="u19318-4"
                      href="attorney1.html">
                      {/* content */}
                      <p id="u19318-2">View Full Profile</p>
                    </a>
                  </div>
                </div>
                <div
                  className="clearfix grpelem shared_content"
                  id="u19520"
                  data-content-guid="u19520_content">
                  {/* group */}
                  <div className="clearfix grpelem" id="u19528">
                    {/* column */}
                    <div className="museBGSize clearfix colelem" id="u19522">
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
                                href="attorneys.html">
                                {/* custom html */}
                                <i
                                  className="fa fa-phone-square"
                                  aria-hidden="true"
                                />
                              </a>
                              <a
                                className="nonblock nontext MuseLinkActive actAsDiv grpelem"
                                id="u19526"
                                href="attorneys.html">
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
                      <p id="u19529-2">Marta Dowson</p>
                      <p id="u19529-4">FAMILY LAW</p>
                    </div>
                    <a
                      className="nonblock nontext transition clearfix colelem"
                      id="u19521-4"
                      href="attorney1.html">
                      {/* content */}
                      <p id="u19521-2">View Full Profile</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="browser_width grpelem shared_content"
            id="u19753-bw"
            data-content-guid="u19753-bw_content"
            style={{height: 625}}>
            <div className="rgba-background" id="u19753">
              {/* column */}
              <div className="clearfix" id="u19753_align_to_page">
                <div className="clearfix colelem" id="pu19787-4">
                  {/* group */}
                  <div className="clearfix grpelem" id="u19787-4">
                    {/* content */}
                    <p>Testimonials</p>
                  </div>
                  <div
                    className="clearfix grpelem shared_content"
                    id="u19788-4"
                    data-content-guid="u19788-4_content">
                    {/* content */}
                    <p>-Our Clients Sais-</p>
                  </div>
                </div>
                <div
                  className="colelem shared_content"
                  id="u20964"
                  data-content-guid="u20964_content">
                  {/* custom html */}
                  <i className="fa fa-quote-right" aria-hidden="true" />
                </div>
              </div>
            </div>
          </div>
          <div
            className="PamphletWidget clearfix grpelem wp-slideshow-playing"
            id="pamphletu20334">
            {/* none box */}
            <div
              className="ThumbGroup clearfix grpelem"
              id="u20335"
              role="tablist">
              {/* none box */}
              <div className="popup_anchor">
                <div
                  className="Thumb popup_element rounded-corners wp-tab-active PamphletThumbSelected"
                  id="u20337"
                  role="tab"
                  tabIndex={0}
                  aria-selected="true"
                  aria-controls="u20346">
                  {/* simple frame */}
                </div>
              </div>
              <div className="popup_anchor">
                <div
                  className="Thumb popup_element rounded-corners"
                  id="u20484"
                  role="tab"
                  tabIndex={-1}
                  aria-selected="false"
                  aria-controls="u20508">
                  {/* simple frame */}
                </div>
              </div>
              <div className="popup_anchor">
                <div
                  className="Thumb popup_element rounded-corners"
                  id="u20525"
                  role="tab"
                  tabIndex={-1}
                  aria-selected="false"
                  aria-controls="u20542">
                  {/* simple frame */}
                </div>
              </div>
            </div>
            <div className="popup_anchor" id="u20343popup">
              <div
                className="wp-slideshow-clip"
                style={{
                  position: 'absolute',
                  width: 819,
                  height: 239,
                  overflow: 'hidden',
                  left: 0,
                  top: 0,
                }}>
                <div
                  className="ContainerGroup clearfix"
                  id="u20343"
                  style={{
                    width: 2457,
                    height: 239,
                    position: 'relative',
                    top: 0,
                    left: 0,
                    margin: 0,
                    overflow: 'visible',
                  }}>
                  {/* stack box */}
                  <div
                    className="Container clearfix grpelem wp-panel wp-panel-active"
                    id="u20346"
                    role="tabpanel"
                    aria-labelledby="u20337"
                    style={{top: 0, left: 0, margin: 0, position: 'absolute'}}>
                    {/* group */}
                    <div
                      className="clearfix grpelem shared_content"
                      id="u20782"
                      data-content-guid="u20782_content">
                      {/* group */}
                      <div className="clearfix grpelem" id="u20784-6">
                        {/* content */}
                        <p id="u20784-2">
                          Pellentesque fermentum tortor ligula, vitae placerat
                          dui lacinia vel. Aliquam vitae justo in nibh pretium
                          bibendum. Fusce nibh ipsum, dictum at fermentum eget,
                          dignissim a est. Quisque facilisis iaculis nulla, vel
                          dignissim enim facilisis eu.
                        </p>
                        <p id="u20784-4">John Dowson</p>
                      </div>
                      <div
                        className="museBGSize rounded-corners grpelem"
                        id="u20785">
                        {/* simple frame */}
                      </div>
                    </div>
                  </div>
                  <div
                    className="Container clearfix grpelem wp-panel"
                    id="u20508"
                    role="tabpanel"
                    aria-labelledby="u20484"
                    style={{
                      top: 0,
                      left: 819,
                      margin: 0,
                      position: 'absolute',
                    }}>
                    {/* group */}
                    <div
                      className="clearfix grpelem shared_content"
                      id="u20873"
                      data-content-guid="u20873_content">
                      {/* group */}
                      <div className="clearfix grpelem" id="u20875-6">
                        {/* content */}
                        <p id="u20875-2">
                          Pellentesque fermentum tortor ligula, vitae placerat
                          dui lacinia vel. Aliquam vitae justo in nibh pretium
                          bibendum. Fusce nibh ipsum, dictum at fermentum eget,
                          dignissim a est. Quisque facilisis iaculis nulla, vel
                          dignissim enim facilisis eu.
                        </p>
                        <p id="u20875-4">John Dowson</p>
                      </div>
                      <div
                        className="museBGSize rounded-corners grpelem"
                        id="u20876">
                        {/* simple frame */}
                      </div>
                    </div>
                  </div>
                  <div
                    className="Container clearfix grpelem wp-panel"
                    id="u20542"
                    role="tabpanel"
                    aria-labelledby="u20525"
                    style={{
                      top: 0,
                      left: 1638,
                      margin: 0,
                      position: 'absolute',
                    }}>
                    {/* group */}
                    <div
                      className="clearfix grpelem shared_content"
                      id="u20681"
                      data-content-guid="u20681_content">
                      {/* group */}
                      <div className="clearfix grpelem" id="u20559-6">
                        {/* content */}
                        <p id="u20559-2">
                          Pellentesque fermentum tortor ligula, vitae placerat
                          dui lacinia vel. Aliquam vitae justo in nibh pretium
                          bibendum. Fusce nibh ipsum, dictum at fermentum eget,
                          dignissim a est. Quisque facilisis iaculis nulla, vel
                          dignissim enim facilisis eu.
                        </p>
                        <p id="u20559-4">John Dowson</p>
                      </div>
                      <div
                        className="museBGSize rounded-corners grpelem"
                        id="u20663">
                        {/* simple frame */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="verticalspacer"
          data-offset-top={2666}
          data-content-above-spacer={2665}
          data-content-below-spacer={315}
          style={{height: 'calc((100vh - 2980px) - 1px)'}}
        />
        <div
          className="browser_width colelem"
          id="u17182-bw"
          style={{height: 440}}>
          <div className="museBGSize" id="u17182">
            {/* simple frame */}
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default About
