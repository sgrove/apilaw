import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Header from '../Header'
import Footer from '../Footer'
import headerBg from '../../../images/liberty.jpg'
import {Fade, Flip, Rotate, Zoom} from 'react-reveal'

const learnMoreStyle = {
  color: '#bfa16a',
  lineHeight: '54px',
  fontFamily: 'allura, sans-serif',
  fontSize: '36px',
  textDecoration: 'none',
}

const readMore = (
  <p id="u875-10">
    <span id="u875-8">​</span>
    <span className="actAsInlineDiv normal_text" id="u883">
      {/* content */}
      <span
        className="actAsDiv rounded-corners transition clearfix excludeFromNormalFlow"
        id="u881-4">
        {/* content */}
        <span className="actAsPara" id="u881-2">
          <a
            href="/services"
            style={{
              textDecoration: 'none',
              color: 'white',
            }}>
            READ MORE
          </a>
        </span>
      </span>
    </span>
  </p>
)

class Home extends React.Component {
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
    return (
      <div id="home">
        <div
          className="breakpoint active"
          id="bp_infinity"
          data-min-width={1201}>
          {/* responsive breakpoint node */}
          <div className="clearfix" id="page">
            {/* column */}
            <div className="position_content" id="page_position_content">
              <Header
                pageName="home"
                scrollableHeader={true}
                heroImage={headerBg}
              />
              <div
                className="clearfix colelem shared_content"
                id="u304"
                data-content-guid="u304_content">
                {/* group */}
                <div className="headlogo grpelem" id="u297">
                  {/* custom html */}
                  <i className="fa fa-balance-scale" aria-hidden="true" />
                </div>
                <div className="headlogo rounded-corners grpelem" id="u301">
                  {/* simple frame */}
                </div>
              </div>
              <div
                className="headline clearfix colelem shared_content"
                id="u259-4"
                data-content-guid="u259-4_content">
                {/* content */}
                <p>IMMIGRATION LEGAL SERVICES</p>
              </div>
              <div
                className="headtitle clearfix colelem shared_content"
                id="u124-4"
                data-content-guid="u124-4_content">
                {/* content */}
                <h1>API Law Office</h1>
              </div>
              <div
                className="clearfix colelem shared_content"
                id="u325"
                data-content-guid="u325_content">
                {/* group */}
                <div className="grpelem" id="u312">
                  {/* simple frame */}
                </div>
                <div
                  className="grpelem"
                  id="u322"
                  data-mu-ie-matrix="progid:DXImageTransform.Microsoft.Matrix(M11=0.7071,M12=0.7071,M21=-0.7071,M22=0.7071,SizingMethod='auto expand')"
                  data-mu-ie-matrix-dx={-3}
                  data-mu-ie-matrix-dy={-3}>
                  {/* simple frame */}
                </div>
              </div>
              <div
                className="year clearfix colelem shared_content"
                id="u307-4"
                data-content-guid="u307-4_content">
                {/* content */}
                <p>Business and Family Immigration</p>
              </div>
              <div
                className="clearfix colelem shared_content"
                id="pu447"
                data-content-guid="pu447_content"
                style={{marginTop: '-22px'}}>
                {/* group */}
                <div
                  className="browser_width grpelem shared_content"
                  id="u447-bw"
                  data-content-guid="u447-bw_content">
                  <div id="u447">{/* simple frame */}</div>
                </div>
                <div className="browser_width grpelem" id="u183-bw">
                  <div className="museBGSize rgba-background" id="u183">
                    {/* group */}
                    <div
                      className="clearfix"
                      id="u183_align_to_page"
                      style={{width: '900px'}}>
                      <div
                        className="clearfix grpelem shared_content"
                        id="u372"
                        data-content-guid="u372_content">
                        {/* group */}
                        <div
                          className="rounded-corners clearfix grpelem"
                          id="u328-7">
                          {/* content */}
                          <p id="u328-2">Work Visa</p>
                          <p id="u328-5">
                            <span id="u328-3">​</span>
                            <span
                              className="actAsInlineDiv normal_text"
                              id="u360">
                              {/* content */}
                              <span
                                className="actAsDiv clearfix excludeFromNormalFlow"
                                id="u354">
                                {/* group */}
                                <a
                                  className="nonblock nontext actAsDiv transition clearfix grpelem"
                                  id="u356-4"
                                  href="/practice">
                                  {/* content */}
                                  <span className="actAsPara">
                                    Learn More &gt;
                                  </span>
                                </a>
                                <a
                                  className="nonblock nontext actAsDiv grpelem"
                                  id="u355"
                                  href="features.html">
                                  {/* simple frame */}
                                </a>
                              </span>
                            </span>
                            <span />
                          </p>
                        </div>
                        <div
                          className="grpelem"
                          id="u369"
                          data-mu-ie-matrix="progid:DXImageTransform.Microsoft.Matrix(M11=0.7071,M12=0.7071,M21=-0.7071,M22=0.7071,SizingMethod='auto expand')"
                          data-mu-ie-matrix-dx={-3}
                          data-mu-ie-matrix-dy={-3}>
                          {/* simple frame */}
                        </div>
                      </div>
                      <div
                        className="clearfix grpelem shared_content"
                        id="u618"
                        data-content-guid="u618_content">
                        {/* group */}
                        <div
                          className="rounded-corners clearfix grpelem"
                          id="u621-9">
                          {/* content */}
                          <p id="u621-2">Green Card</p>
                          <p id="u621-7">
                            <span id="u621-5">​</span>
                            <span
                              className="actAsInlineDiv normal_text"
                              id="u622">
                              {/* content */}
                              <span
                                className="actAsDiv clearfix excludeFromNormalFlow"
                                id="u623">
                                {/* group */}
                                <a
                                  className="nonblock nontext actAsDiv transition clearfix grpelem"
                                  id="u624-4"
                                  href="/practice">
                                  {/* content */}
                                  <span className="actAsPara">
                                    Learn More &gt;
                                  </span>
                                </a>
                                <a
                                  className="nonblock nontext actAsDiv grpelem"
                                  id="u625"
                                  href="features.html">
                                  {/* simple frame */}
                                </a>
                              </span>
                            </span>
                            <span />
                          </p>
                        </div>
                        <div
                          className="grpelem"
                          id="u620"
                          data-mu-ie-matrix="progid:DXImageTransform.Microsoft.Matrix(M11=0.7071,M12=0.7071,M21=-0.7071,M22=0.7071,SizingMethod='auto expand')"
                          data-mu-ie-matrix-dx={-3}
                          data-mu-ie-matrix-dy={-3}>
                          {/* simple frame */}
                        </div>
                      </div>
                      <div
                        className="clearfix grpelem shared_content"
                        id="u642"
                        data-content-guid="u642_content">
                        {/* group */}
                        <div
                          className="rounded-corners clearfix grpelem"
                          id="u643-8">
                          {/* content */}
                          <p id="u643-2">Citizenship</p>
                          <p id="u643-3">&nbsp;</p>
                          <p id="u643-6">
                            <span id="u643-4">​</span>
                            <span
                              className="actAsInlineDiv normal_text"
                              id="u644">
                              {/* content */}
                              <span
                                className="actAsDiv clearfix excludeFromNormalFlow"
                                id="u645">
                                {/* group */}
                                <a
                                  className="nonblock nontext actAsDiv transition clearfix grpelem"
                                  id="u647-4"
                                  href="/practice">
                                  {/* content */}
                                  <span className="actAsPara">
                                    Learn More &gt;
                                  </span>
                                </a>
                                <a
                                  className="nonblock nontext actAsDiv grpelem"
                                  id="u646"
                                  href="features.html">
                                  {/* simple frame */}
                                </a>
                              </span>
                            </span>
                          </p>
                        </div>
                        <div
                          className="grpelem"
                          id="u649"
                          data-mu-ie-matrix="progid:DXImageTransform.Microsoft.Matrix(M11=0.7071,M12=0.7071,M21=-0.7071,M22=0.7071,SizingMethod='auto expand')"
                          data-mu-ie-matrix-dx={-3}
                          data-mu-ie-matrix-dy={-3}>
                          {/* simple frame */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="browser_width colelem shared_content"
                id="u2171-bw"
                data-content-guid="u2171-bw_content">
                <div id="u2171">
                  {/* column */}
                  <div className="clearfix" id="u2171_align_to_page">
                    <div
                      className="clearfix colelem shared_content"
                      id="pu709-4"
                      data-content-guid="pu709-4_content">
                      {/* group */}
                      <div className="clearfix grpelem" id="u709-4">
                        {/* content */}
                        <p>About Us</p>
                      </div>
                      <div
                        className="whoweare clearfix grpelem shared_content"
                        id="u729-4"
                        data-content-guid="u729-4_content">
                        {/* content */}
                        <h2>
                          <a
                            href="/about"
                            style={{textDecoration: 'none', color: 'black'}}>
                            -Who We Are-
                          </a>
                        </h2>
                      </div>
                    </div>
                    <div className="clearfix colelem" id="pu715-15">
                      {/* group */}
                      <div
                        className="history clearfix grpelem shared_content"
                        id="u715-15"
                        data-content-guid="u715-15_content">
                        {/* content */}
                        <p id="u715-2">API Law Office</p>
                        <p id="u715-5">
                          <span id="u715-3">​</span>
                          <span
                            className="actAsInlineDiv normal_text"
                            id="u741">
                            {/* content */}
                            <span
                              className="actAsDiv excludeFromNormalFlow"
                              id="u739">
                              {/* simple frame */}
                            </span>
                          </span>
                        </p>
                        <p id="u715-7">
                          Founded in San Francisco, California, API Law Office
                          specializes in U.S. immigration law and serves
                          companies and entrepreneurs to acquire appropriate
                          visa and/or green card in order to establish their
                          businesses in the U.S. API Law Office also serves
                          individuals to acquire family-based green card as well
                          as U.S. citizenship.
                        </p>
                        <p id="u715-8">&nbsp;</p>
                        <p id="u715-8">&nbsp;</p>
                        <p id="u715-11">&nbsp;</p>
                        <p id="u715-13">
                          <a href="/about" style={learnMoreStyle}>
                            Learn More
                          </a>
                        </p>
                      </div>
                      <div
                        className="historyimage museBGSize grpelem shared_content"
                        id="u718"
                        data-content-guid="u718_content">
                        {/* simple frame */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="browser_width colelem shared_content"
                id="u860-bw"
                data-content-guid="u860-bw_content">
                <div id="u860">
                  {/* column */}
                  <div className="clearfix" id="u860_align_to_page">
                    <div
                      className="clearfix colelem shared_content"
                      id="pu866-4"
                      data-content-guid="pu866-4_content">
                      {/* group */}
                      <div className="clearfix grpelem" id="u866-4">
                        {/* content */}
                        <p>Services</p>
                      </div>
                      <div
                        className="whatwedo clearfix grpelem shared_content"
                        id="u869-4"
                        data-content-guid="u869-4_content">
                        {/* content */}
                        <h2>
                          <a
                            href="/services"
                            style={{textDecoration: 'none', color: 'black'}}>
                            -What We Do-
                          </a>
                        </h2>
                      </div>
                    </div>
                    <div className="clearfix colelem" id="u9964">
                      {/* group */}
                      <div className="clearfix grpelem" id="pu875-12">
                        {/* column */}
                        <div
                          className="transition shadow clearfix colelem shared_content"
                          id="u875-12"
                          data-content-guid="u875-12_content">
                          {/* content */}
                          <p id="u875-3">
                            <span id="u875">​</span>
                            <span
                              className="actAsInlineDiv normal_text"
                              id="u894">
                              {/* content */}
                              <span
                                className="actAsDiv excludeFromNormalFlow"
                                id="u891">
                                {/* custom html */}
                                <i className="fa fa-money" aria-hidden="true" />
                              </span>
                            </span>
                          </p>
                          <p id="u875-5">
                            <span id="u875-4">E1/E2 Visas</span>
                          </p>
                          <p id="u875-7">
                            Companies that conduct international trade business
                            or make investments in the U.S.
                          </p>
                          {readMore}
                        </div>
                        <div
                          className="transition shadow clearfix colelem shared_content"
                          id="u1001-12"
                          data-content-guid="u1001-12_content">
                          {/* content */}
                          <p id="u1001-3">
                            <span id="u1001">​</span>
                            <span
                              className="actAsInlineDiv normal_text"
                              id="u1968">
                              {/* content */}
                              <span
                                className="actAsDiv excludeFromNormalFlow"
                                id="u1965">
                                {/* custom html */}
                                <i
                                  className="fa fa-trophy"
                                  aria-hidden="true"
                                />
                              </span>
                            </span>
                            <span />
                          </p>
                          <p id="u1001-5">
                            <span id="u1001-4">O1 VISAS</span>
                          </p>
                          <p id="u1001-7">
                            Possession of extraordinary abilities in the
                            sciences, arts, education, business, or athletics{' '}
                          </p>
                          {readMore}
                        </div>
                      </div>
                      <div className="clearfix grpelem" id="pu950-12">
                        {/* column */}
                        <div
                          className="transition shadow clearfix colelem shared_content"
                          id="u950-12"
                          data-content-guid="u950-12_content">
                          {/* content */}
                          <p id="u950-3">
                            <span id="u950">​</span>
                            <span
                              className="actAsInlineDiv normal_text"
                              id="u1915">
                              {/* content */}
                              <span
                                className="actAsDiv excludeFromNormalFlow"
                                id="u1912">
                                {/* custom html */}
                                <i
                                  className="fa fa-graduation-cap"
                                  aria-hidden="true"
                                />
                              </span>
                            </span>
                            <span />
                          </p>
                          <p id="u950-5">
                            <span id="u950-4">H1B VISAS</span>
                          </p>
                          <p id="u950-7">
                            Possession of a bachelor or higher degree, or
                            equivalent work experience.
                          </p>
                          {readMore}
                        </div>
                        <div
                          className="transition shadow clearfix colelem shared_content"
                          id="u1018-12"
                          data-content-guid="u1018-12_content">
                          {/* content */}
                          <p id="u1018-3">
                            <span id="u1018">​</span>
                            <span
                              className="actAsInlineDiv normal_text"
                              id="u1951">
                              {/* content */}
                              <span
                                className="actAsDiv excludeFromNormalFlow"
                                id="u1948">
                                {/* custom html */}
                                <i
                                  className="fa fa-handshake-o"
                                  aria-hidden="true"
                                />
                              </span>
                            </span>
                            <span />
                          </p>
                          <p id="u1018-5">
                            <span id="u1018-4">
                              EMPLOYMENT-BASED GREEN CARD
                            </span>
                          </p>
                          <p id="u1018-7">
                            Applications through company sponsorship or
                            self-sponsorship.
                          </p>
                          {readMore}
                        </div>
                      </div>
                      <div
                        className="clearfix grpelem shared_content"
                        id="pu967-12"
                        data-content-guid="pu967-12_content">
                        {/* column */}
                        <div
                          className="transition shadow clearfix colelem shared_content"
                          id="u967-12"
                          data-content-guid="u967-12_content">
                          {/* content */}
                          <p id="u967-3">
                            <span id="u967">​</span>
                            <span
                              className="actAsInlineDiv normal_text"
                              id="u1927">
                              {/* content */}
                              <span
                                className="actAsDiv excludeFromNormalFlow"
                                id="u1924">
                                {/* custom html */}
                                <i
                                  className="fa fa-line-chart"
                                  aria-hidden="true"
                                />
                              </span>
                            </span>
                            <span />
                          </p>
                          <p id="u967-5">
                            <span id="u967-4">J1 VISAS</span>
                          </p>
                          <p id="u967-7">
                            Short term internship or training for those having a
                            foreign degree.{' '}
                          </p>
                          {readMore}
                        </div>
                        <div
                          className="transition shadow clearfix colelem shared_content"
                          id="u1035-12"
                          data-content-guid="u1035-12_content">
                          {/* content */}
                          <p id="u1035-3">
                            <span id="u1035">​</span>
                            <span
                              className="actAsInlineDiv normal_text"
                              id="u1980">
                              {/* content */}
                              <span
                                className="actAsDiv excludeFromNormalFlow"
                                id="u1977">
                                {/* custom html */}
                                <i className="fa fa-users" aria-hidden="true" />
                              </span>
                            </span>
                            <span />
                          </p>
                          <p id="u1035-5">
                            <span id="u1035-4">FAMILY-BASED GREEN CARD</span>
                          </p>
                          <p id="u1035-7">
                            Having a U.S. citizen or green card holder spouse,
                            parent, child, or sibling.
                          </p>
                          {readMore}
                        </div>
                      </div>
                      <div className="clearfix grpelem" id="pu984-12">
                        {/* column */}
                        <div
                          className="transition shadow clearfix colelem shared_content"
                          id="u984-12"
                          data-content-guid="u984-12_content">
                          {/* content */}
                          <p id="u984-3">
                            <span id="u984">​</span>
                            <span
                              className="actAsInlineDiv normal_text"
                              id="u1939">
                              {/* content */}
                              <span
                                className="actAsDiv excludeFromNormalFlow"
                                id="u1936">
                                {/* custom html */}
                                <i
                                  className="fa fa-building"
                                  aria-hidden="true"
                                />
                              </span>
                            </span>
                            <span />
                          </p>
                          <p id="u984-5">
                            <span id="u984-4">L1 VISAS</span>
                          </p>
                          <p id="u984-7">
                            Transfer of an employee from a foreign group
                            company.{' '}
                          </p>
                          {readMore}
                        </div>
                        <div
                          className="transition shadow clearfix colelem shared_content"
                          id="u1052-12"
                          data-content-guid="u1052-12_content">
                          {/* content */}
                          <p id="u1052-3">
                            <span id="u1052">​</span>
                            <span
                              className="actAsInlineDiv normal_text"
                              id="u1992">
                              {/* content */}
                              <span
                                className="actAsDiv excludeFromNormalFlow"
                                id="u1989">
                                {/* custom html */}
                                <i className="fa fa-globe" aria-hidden="true" />
                              </span>
                            </span>
                            <span />
                          </p>
                          <p id="u1052-5">
                            <span id="u1052-4">CITIZENSHIP</span>
                          </p>
                          <p id="u1052-7">
                            The last stop on the immigration journey.
                          </p>
                          <p id="u1052-7" />
                          {readMore}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="clearfix colelem" id="pu1467">
                {/* group */}
                <div
                  className="browser_width grpelem shared_content"
                  id="u1467-bw"
                  data-content-guid="u1467-bw_content">
                  <div id="u1467">
                    {/* group */}
                    <div className="clearfix" id="u1467_align_to_page">
                      <div className="clearfix grpelem" id="u1470-4">
                        {/* content */}
                        <p>News</p>
                      </div>
                      <div
                        className="news clearfix grpelem shared_content"
                        id="u1473-4"
                        data-content-guid="u1473-4_content">
                        {/* content */}
                        <p>
                          <a
                            href="/blog"
                            style={{textDecoration: 'none', color: 'black'}}>
                            -What's Happening- {/* ' */}
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="PamphletWidget clearfix grpelem"
                  id="pamphletu1767">
                  {/* none box */}
                  <div className="ThumbGroup clearfix grpelem" id="u1772">
                    {/* none box */}
                    <div className="popup_anchor">
                      <div className="Thumb popup_element" id="u1773">
                        {/* simple frame */}
                      </div>
                    </div>
                    <div className="popup_anchor">
                      <div className="Thumb popup_element" id="u1818">
                        {/* simple frame */}
                      </div>
                    </div>
                  </div>
                  <div className="popup_anchor" id="u1768popup">
                    <div className="ContainerGroup clearfix" id="u1768">
                      {/* stack box */}
                      <div className="Container clearfix grpelem" id="u1770">
                        {/* group */}
                        <div
                          className="clearfix grpelem shared_content"
                          id="u1686"
                          data-content-guid="u1686_content">
                          {/* group */}
                          <div
                            className="clearfix grpelem shared_content"
                            id="u1703"
                            data-content-guid="u1703_content">
                            {/* group */}
                            <div className="clearfix grpelem" id="u1704">
                              {/* column */}
                              <div
                                className="museBGSize transition shadow rgba-background clearfix colelem"
                                id="u1705">
                                {/* group */}
                                <div className="clearfix grpelem" id="u1706-6">
                                  {/* content */}
                                  <p id="u1706-2">01</p>
                                  <p id="u1706-4">JAN</p>
                                </div>
                              </div>
                              <div className="clearfix colelem" id="u1707-9">
                                {/* content */}
                                <p id="u1707-2">
                                  <span id="u1707">A new year, a new firm</span>
                                </p>
                                <p id="u1707-4">
                                  <span id="u1707-3">Posted by Yan Li</span>
                                </p>
                                <p id="u1707-5">&nbsp;</p>
                                <p id="u1707-7">
                                  2018 marks the founding of API Law, a new
                                  family and business immigration firm
                                </p>
                              </div>
                            </div>
                            <div className="clearfix grpelem" id="u1708">
                              {/* group */}
                              <div
                                className="rounded-corners clearfix grpelem"
                                id="u1710">
                                {/* group */}
                                <div className="grpelem" id="u1709">
                                  {/* custom html */}
                                  <i
                                    className="fa fa-university"
                                    aria-hidden="true"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Footer />
            </div>
          </div>
        </div>
        <div className="breakpoint" id="bp_400" data-max-width={400}>
          {/* responsive breakpoint node */}
          <div className="clearfix borderbox temp_no_id" data-orig-id="page">
            {/* column */}
            <div
              className="position_content temp_no_id"
              data-orig-id="page_position_content">
              <span
                className="clearfix colelem placeholder"
                data-placeholder-for="u304_content">
                {/* placeholder node */}
              </span>
              <span
                className="headline clearfix colelem placeholder"
                data-placeholder-for="u259-4_content">
                {/* placeholder node */}
              </span>
              <span
                className="headtitle clearfix colelem placeholder"
                data-placeholder-for="u35667-4_content">
                {/* placeholder node */}
              </span>
              <span
                className="clearfix colelem placeholder"
                data-placeholder-for="u325_content">
                {/* placeholder node */}
              </span>
              <span
                className="year clearfix colelem placeholder"
                data-placeholder-for="u307-4_content">
                {/* placeholder node */}
              </span>
              <div className="clearfix colelem temp_no_id" data-orig-id="pu447">
                {/* group */}
                <span
                  className="browser_width grpelem placeholder"
                  data-placeholder-for="u447-bw_content">
                  {/* placeholder node */}
                </span>
                <div
                  className="browser_width grpelem temp_no_id"
                  data-orig-id="u183-bw">
                  <div
                    className="museBGSize rgba-background temp_no_id"
                    data-orig-id="u183">
                    {/* column */}
                    <div
                      className="clearfix temp_no_id"
                      data-orig-id="u183_align_to_page">
                      <span
                        className="clearfix colelem placeholder"
                        data-placeholder-for="u372_content">
                        {/* placeholder node */}
                      </span>
                      <span
                        className="clearfix colelem placeholder"
                        data-placeholder-for="u642_content">
                        {/* placeholder node */}
                      </span>
                      <span
                        className="clearfix colelem placeholder"
                        data-placeholder-for="u618_content">
                        {/* placeholder node */}
                      </span>
                      <span
                        className="clearfix colelem placeholder"
                        data-placeholder-for="u666_content">
                        {/* placeholder node */}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="browser_width colelem temp_no_id"
                data-orig-id="u2171-bw">
                <div className="temp_no_id" data-orig-id="u2171">
                  {/* column */}
                  <div
                    className="clearfix temp_no_id"
                    data-orig-id="u2171_align_to_page">
                    <span
                      className="whoweare clearfix colelem placeholder"
                      data-placeholder-for="u729-4_content">
                      {/* placeholder node */}
                    </span>
                    <span
                      className="historyimage museBGSize colelem placeholder"
                      data-placeholder-for="u718_content">
                      {/* placeholder node */}
                    </span>
                    <span
                      className="history clearfix colelem placeholder"
                      data-placeholder-for="u715-15_content">
                      {/* placeholder node */}
                    </span>
                  </div>
                </div>
              </div>
              <div className="clearfix colelem temp_no_id" data-orig-id="pu733">
                {/* group */}
                <span
                  className="browser_width grpelem placeholder"
                  data-placeholder-for="u733-bw_content">
                  {/* placeholder node */}
                </span>
                <form
                  className="form-grp clearfix grpelem temp_no_id"
                  method="post"
                  encType="multipart/form-data"
                  action="scripts/form-u745.php"
                  data-orig-id="widgetu745">
                  {/* none box */}
                  <div
                    className="fld-grp clearfix grpelem temp_no_id"
                    data-required="true"
                    data-orig-id="widgetu748">
                    {/* none box */}
                    <span
                      className="fld-input NoWrap actAsDiv clearfix grpelem temp_no_id"
                      data-orig-id="u749-4">
                      {/* content */}
                      <input
                        className="wrapped-input temp_no_id"
                        type="text"
                        spellCheck="false"
                        name="custom_U748"
                        tabIndex={64}
                        data-orig-id="widgetu748_input"
                      />
                      <label
                        className="wrapped-input fld-prompt temp_no_id"
                        htmlFor="widgetu748_input"
                        data-orig-id="widgetu748_prompt">
                        <span
                          className="actAsPara placeholder"
                          data-placeholder-for="widgetu748_prompt_0_content">
                          {/* placeholder node */}
                        </span>
                      </label>
                    </span>
                  </div>
                  <div
                    className="fld-grp clearfix grpelem temp_no_id"
                    data-required="true"
                    data-type="email"
                    data-orig-id="widgetu754">
                    {/* none box */}
                    <span
                      className="fld-input NoWrap actAsDiv clearfix grpelem temp_no_id"
                      data-orig-id="u755-4">
                      {/* content */}
                      <input
                        className="wrapped-input temp_no_id"
                        type="email"
                        spellCheck="false"
                        name="Email"
                        tabIndex={65}
                        data-orig-id="widgetu754_input"
                      />
                      <label
                        className="wrapped-input fld-prompt temp_no_id"
                        htmlFor="widgetu754_input"
                        data-orig-id="widgetu754_prompt">
                        <span
                          className="actAsPara placeholder"
                          data-placeholder-for="widgetu754_prompt_0_content">
                          {/* placeholder node */}
                        </span>
                      </label>
                    </span>
                  </div>
                  <div
                    className="clearfix grpelem temp_no_id"
                    data-orig-id="u746-4">
                    {/* content */}
                    <span
                      className="placeholder"
                      data-placeholder-for="u746-4_0_content">
                      {/* placeholder node */}
                    </span>
                  </div>
                  <div
                    className="clearfix grpelem temp_no_id"
                    data-orig-id="u752-4">
                    {/* content */}
                    <span
                      className="placeholder"
                      data-placeholder-for="u752-4_0_content">
                      {/* placeholder node */}
                    </span>
                  </div>
                  <div
                    className="clearfix grpelem temp_no_id"
                    data-orig-id="u747-4">
                    {/* content */}
                    <span
                      className="placeholder"
                      data-placeholder-for="u747-4_0_content">
                      {/* placeholder node */}
                    </span>
                  </div>
                  {/* state-based BG images */}
                  <div
                    className="fld-grp clearfix grpelem temp_no_id"
                    data-required="false"
                    data-orig-id="widgetu758">
                    {/* none box */}
                    <span
                      className="fld-textarea actAsDiv clearfix grpelem temp_no_id"
                      data-orig-id="u759-4">
                      {/* content */}
                      <textarea
                        className="wrapped-input temp_no_id"
                        name="custom_U758"
                        tabIndex={66}
                        data-orig-id="widgetu758_input"
                        defaultValue={''}
                      />
                      <label
                        className="wrapped-input fld-prompt temp_no_id"
                        htmlFor="widgetu758_input"
                        data-orig-id="widgetu758_prompt">
                        <span
                          className="actAsPara placeholder"
                          data-placeholder-for="widgetu758_prompt_0_content">
                          {/* placeholder node */}
                        </span>
                      </label>
                    </span>
                  </div>
                </form>
              </div>
              <span
                className="clearfix colelem placeholder"
                data-placeholder-for="pu799_content">
                {/* placeholder node */}
              </span>
              <div
                className="browser_width colelem temp_no_id"
                data-orig-id="u860-bw">
                <div className="temp_no_id" data-orig-id="u860">
                  {/* column */}
                  <div
                    className="clearfix temp_no_id"
                    data-orig-id="u860_align_to_page">
                    <span
                      className="whatwedo clearfix colelem placeholder"
                      data-placeholder-for="u869-4_content">
                      {/* placeholder node */}
                    </span>
                    <div
                      className="clearfix colelem temp_no_id"
                      data-orig-id="u9964">
                      {/* column */}
                      <span
                        className="transition shadow clearfix colelem placeholder"
                        data-placeholder-for="u875-12_content">
                        {/* placeholder node */}
                      </span>
                      <span
                        className="transition shadow clearfix colelem placeholder"
                        data-placeholder-for="u1001-12_content">
                        {/* placeholder node */}
                      </span>
                      <span
                        className="transition shadow clearfix colelem placeholder"
                        data-placeholder-for="u984-12_content">
                        {/* placeholder node */}
                      </span>
                      <span
                        className="transition shadow clearfix colelem placeholder"
                        data-placeholder-for="u967-12_content">
                        {/* placeholder node */}
                      </span>
                      <span
                        className="transition shadow clearfix colelem placeholder"
                        data-placeholder-for="u950-12_content">
                        {/* placeholder node */}
                      </span>
                      <span
                        className="transition shadow clearfix colelem placeholder"
                        data-placeholder-for="u1018-12_content">
                        {/* placeholder node */}
                      </span>
                      <span
                        className="transition shadow clearfix colelem placeholder"
                        data-placeholder-for="u1052-12_content">
                        {/* placeholder node */}
                      </span>
                      <span
                        className="transition shadow clearfix colelem placeholder"
                        data-placeholder-for="u1035-12_content">
                        {/* placeholder node */}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="clearfix colelem temp_no_id"
                data-orig-id="pu1088">
                {/* group */}
                <div
                  className="browser_width grpelem temp_no_id"
                  data-orig-id="u1088-bw">
                  <div className="temp_no_id" data-orig-id="u1088">
                    {/* column */}
                    <div
                      className="clearfix temp_no_id"
                      data-orig-id="u1088_align_to_page">
                      <span
                        className="whychooseus clearfix colelem placeholder"
                        data-placeholder-for="u1116-4_content">
                        {/* placeholder node */}
                      </span>
                      <span
                        className="performanceimage museBGSize colelem placeholder"
                        data-placeholder-for="u1119_content">
                        {/* placeholder node */}
                      </span>
                      <div
                        className="clearfix colelem temp_no_id"
                        data-orig-id="pu1130-21">
                        {/* group */}
                        <span
                          className="performance clearfix grpelem placeholder"
                          data-placeholder-for="u1130-21_content">
                          {/* placeholder node */}
                        </span>
                        <span
                          className="nonblock nontext transition clearfix grpelem placeholder"
                          data-placeholder-for="u1232-4_content">
                          {/* placeholder node */}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <span
                  className="browser_width grpelem placeholder"
                  data-placeholder-for="u1167-bw_content">
                  {/* placeholder node */}
                </span>
                <span
                  className="browser_width grpelem placeholder"
                  data-placeholder-for="u1170-bw_content">
                  {/* placeholder node */}
                </span>
                <form
                  className="form-grp clearfix grpelem temp_no_id"
                  method="post"
                  encType="multipart/form-data"
                  action="scripts/form-u1252.php"
                  data-orig-id="widgetu1252">
                  {/* none box */}
                  <div
                    className="fld-grp clearfix grpelem temp_no_id"
                    data-required="true"
                    data-orig-id="widgetu1271">
                    {/* none box */}
                    <span
                      className="fld-input NoWrap actAsDiv clearfix grpelem temp_no_id"
                      data-orig-id="u1272-4">
                      {/* content */}
                      <input
                        className="wrapped-input temp_no_id"
                        type="text"
                        spellCheck="false"
                        name="custom_U1271"
                        tabIndex={68}
                        data-orig-id="widgetu1271_input"
                      />
                      <label
                        className="wrapped-input fld-prompt temp_no_id"
                        htmlFor="widgetu1271_input"
                        data-orig-id="widgetu1271_prompt">
                        <span
                          className="actAsPara placeholder"
                          data-placeholder-for="widgetu1271_prompt_0_content">
                          {/* placeholder node */}
                        </span>
                      </label>
                    </span>
                  </div>
                  <div
                    className="fld-grp clearfix grpelem temp_no_id"
                    data-required="true"
                    data-type="email"
                    data-orig-id="widgetu1288">
                    {/* none box */}
                    <span
                      className="fld-input NoWrap actAsDiv clearfix grpelem temp_no_id"
                      data-orig-id="u1290-4">
                      {/* content */}
                      <input
                        className="wrapped-input temp_no_id"
                        type="email"
                        spellCheck="false"
                        name="Email"
                        tabIndex={69}
                        data-orig-id="widgetu1288_input"
                      />
                      <label
                        className="wrapped-input fld-prompt temp_no_id"
                        htmlFor="widgetu1288_input"
                        data-orig-id="widgetu1288_prompt">
                        <span
                          className="actAsPara placeholder"
                          data-placeholder-for="widgetu1288_prompt_0_content">
                          {/* placeholder node */}
                        </span>
                      </label>
                    </span>
                  </div>
                  <div
                    className="clearfix grpelem temp_no_id"
                    data-orig-id="u1261-4">
                    {/* content */}
                    <span
                      className="placeholder"
                      data-placeholder-for="u1261-4_0_content">
                      {/* placeholder node */}
                    </span>
                  </div>
                  <div
                    className="clearfix grpelem temp_no_id"
                    data-orig-id="u1287-4">
                    {/* content */}
                    <span
                      className="placeholder"
                      data-placeholder-for="u1287-4_0_content">
                      {/* placeholder node */}
                    </span>
                  </div>
                  <div
                    className="clearfix grpelem temp_no_id"
                    data-orig-id="u1292-4">
                    {/* content */}
                    <span
                      className="placeholder"
                      data-placeholder-for="u1292-4_0_content">
                      {/* placeholder node */}
                    </span>
                  </div>
                  {/* state-based BG images */}
                  <div
                    className="fld-grp clearfix grpelem temp_no_id"
                    data-required="true"
                    data-orig-id="widgetu1279">
                    {/* none box */}
                    <span
                      className="fld-textarea actAsDiv clearfix grpelem temp_no_id"
                      data-orig-id="u1282-4">
                      {/* content */}
                      <textarea
                        className="wrapped-input temp_no_id"
                        name="custom_U1279"
                        tabIndex={71}
                        data-orig-id="widgetu1279_input"
                        defaultValue={''}
                      />
                      <label
                        className="wrapped-input fld-prompt temp_no_id"
                        htmlFor="widgetu1279_input"
                        data-orig-id="widgetu1279_prompt">
                        <span
                          className="actAsPara placeholder"
                          data-placeholder-for="widgetu1279_prompt_0_content">
                          {/* placeholder node */}
                        </span>
                      </label>
                    </span>
                  </div>
                  <div
                    className="fld-grp clearfix grpelem temp_no_id"
                    data-required="true"
                    data-orig-id="widgetu1436">
                    {/* none box */}
                    <span
                      className="fld-input NoWrap actAsDiv clearfix grpelem temp_no_id"
                      data-orig-id="u1439-4">
                      {/* content */}
                      <input
                        className="wrapped-input temp_no_id"
                        type="tel"
                        spellCheck="false"
                        name="custom_U1436"
                        tabIndex={70}
                        data-orig-id="widgetu1436_input"
                      />
                      <label
                        className="wrapped-input fld-prompt temp_no_id"
                        htmlFor="widgetu1436_input"
                        data-orig-id="widgetu1436_prompt">
                        <span
                          className="actAsPara placeholder"
                          data-placeholder-for="widgetu1436_prompt_0_content">
                          {/* placeholder node */}
                        </span>
                      </label>
                    </span>
                  </div>
                </form>
              </div>
              <div
                className="clearfix colelem temp_no_id"
                data-orig-id="pppu1467">
                {/* group */}
                <div
                  className="clearfix grpelem temp_no_id"
                  data-orig-id="ppu1467">
                  {/* column */}
                  <div
                    className="clearfix colelem temp_no_id"
                    data-orig-id="pu1467">
                    {/* group */}
                    <div
                      className="browser_width grpelem temp_no_id"
                      data-orig-id="u1467-bw">
                      <div className="temp_no_id" data-orig-id="u1467">
                        {/* group */}
                        <div
                          className="clearfix temp_no_id"
                          data-orig-id="u1467_align_to_page">
                          <span
                            className="news clearfix grpelem placeholder"
                            data-placeholder-for="u1473-4_content">
                            {/* placeholder node */}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div
                      className="PamphletWidget clearfix grpelem temp_no_id"
                      data-orig-id="pamphletu1767">
                      {/* none box */}
                      <div
                        className="ThumbGroup clearfix grpelem temp_no_id"
                        data-orig-id="u1772">
                        {/* none box */}
                        <div className="popup_anchor">
                          <div
                            className="Thumb popup_element temp_no_id"
                            data-orig-id="u1773">
                            {/* simple frame */}
                          </div>
                        </div>
                        <div className="popup_anchor">
                          <div
                            className="Thumb popup_element temp_no_id"
                            data-orig-id="u1818">
                            {/* simple frame */}
                          </div>
                        </div>
                      </div>
                      <div
                        className="popup_anchor temp_no_id"
                        data-orig-id="u1768popup">
                        <div
                          className="ContainerGroup clearfix temp_no_id"
                          data-orig-id="u1768">
                          {/* stack box */}
                          <div
                            className="Container clearfix grpelem temp_no_id"
                            data-orig-id="u1770">
                            {/* group */}
                            <div
                              className="clearfix grpelem temp_no_id"
                              data-orig-id="u1686">
                              {/* column */}
                              <span
                                className="clearfix colelem placeholder"
                                data-placeholder-for="u1695_content">
                                {/* placeholder node */}
                              </span>
                              <span
                                className="clearfix colelem placeholder"
                                data-placeholder-for="u1687_content">
                                {/* placeholder node */}
                              </span>
                              <span
                                className="clearfix colelem placeholder"
                                data-placeholder-for="u1703_content">
                                {/* placeholder node */}
                              </span>
                            </div>
                          </div>
                          <div
                            className="Container invi clearfix grpelem temp_no_id"
                            data-orig-id="u1821">
                            {/* group */}
                            <div
                              className="clearfix grpelem temp_no_id"
                              data-orig-id="u1683">
                              {/* column */}
                              <span
                                className="clearfix colelem placeholder"
                                data-placeholder-for="u1554_content">
                                {/* placeholder node */}
                              </span>
                              <span
                                className="clearfix colelem placeholder"
                                data-placeholder-for="u1591_content">
                                {/* placeholder node */}
                              </span>
                              <span
                                className="clearfix colelem placeholder"
                                data-placeholder-for="u1557_content">
                                {/* placeholder node */}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="popup_anchor">
                        <div
                          className="PamphletPrevButton PamphletLightboxPart popup_element clearfix temp_no_id"
                          data-orig-id="u1776">
                          {/* group */}
                          <span
                            className="transition clearfix grpelem placeholder"
                            data-placeholder-for="u1777-4_content">
                            {/* placeholder node */}
                          </span>
                        </div>
                      </div>
                      <div className="popup_anchor">
                        <div
                          className="PamphletNextButton PamphletLightboxPart popup_element transition clearfix temp_no_id"
                          data-orig-id="u1778">
                          {/* group */}
                          <span
                            className="transition clearfix grpelem placeholder"
                            data-placeholder-for="u1779-4_content">
                            {/* placeholder node */}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="browser_width colelem temp_no_id"
                    data-orig-id="u1625-bw">
                    <div className="temp_no_id" data-orig-id="u1625">
                      {/* column */}
                      <div
                        className="clearfix temp_no_id"
                        data-orig-id="u1625_align_to_page">
                        <span
                          className="ourclients clearfix colelem placeholder"
                          data-placeholder-for="u1838-9_content">
                          {/* placeholder node */}
                        </span>
                        <div
                          className="clearfix colelem temp_no_id"
                          data-orig-id="u1680">
                          {/* group */}
                          <div
                            className="clearfix grpelem temp_no_id"
                            data-orig-id="pu1628">
                            {/* column */}
                            <span
                              className="museBGSize colelem placeholder"
                              data-placeholder-for="u1628_content">
                              {/* placeholder node */}
                            </span>
                            <span
                              className="museBGSize colelem placeholder"
                              data-placeholder-for="u1671_content">
                              {/* placeholder node */}
                            </span>
                          </div>
                          <div
                            className="clearfix grpelem temp_no_id"
                            data-orig-id="pu1659">
                            {/* column */}
                            <span
                              className="museBGSize colelem placeholder"
                              data-placeholder-for="u1659_content">
                              {/* placeholder node */}
                            </span>
                            <span
                              className="museBGSize colelem placeholder"
                              data-placeholder-for="u1674_content">
                              {/* placeholder node */}
                            </span>
                          </div>
                          <div
                            className="clearfix grpelem temp_no_id"
                            data-orig-id="pu1668">
                            {/* column */}
                            <span
                              className="museBGSize colelem placeholder"
                              data-placeholder-for="u1668_content">
                              {/* placeholder node */}
                            </span>
                            <span
                              className="museBGSize colelem placeholder"
                              data-placeholder-for="u1677_content">
                              {/* placeholder node */}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <span
                  className="grpelem placeholder"
                  data-placeholder-for="u2152_content">
                  {/* placeholder node */}
                </span>
              </div>
              <div
                className="clearfix colelem temp_no_id"
                data-orig-id="pu1110">
                {/* group */}
                <div
                  className="browser_width grpelem temp_no_id"
                  data-orig-id="u1110-bw">
                  <div className="temp_no_id" data-orig-id="u1110">
                    {/* column */}
                    <div
                      className="clearfix temp_no_id"
                      data-orig-id="u1110_align_to_page">
                      <span
                        className="nonblock nontext MuseLinkActive clearfix colelem placeholder"
                        data-placeholder-for="u2270-6_content">
                        {/* placeholder node */}
                      </span>
                      <span
                        className="clearfix colelem placeholder"
                        data-placeholder-for="u2273-6_content">
                        {/* placeholder node */}
                      </span>
                      <span
                        className="clearfix colelem placeholder"
                        data-placeholder-for="u2267_content">
                        {/* placeholder node */}
                      </span>
                      <span
                        className="clearfix colelem placeholder"
                        data-placeholder-for="u2276_content">
                        {/* placeholder node */}
                      </span>
                      <span
                        className="clearfix colelem placeholder"
                        data-placeholder-for="u2245_content">
                        {/* placeholder node */}
                      </span>
                      <span
                        className="clearfix colelem placeholder"
                        data-placeholder-for="u2303-6_content">
                        {/* placeholder node */}
                      </span>
                    </div>
                  </div>
                </div>
                <span
                  className="browser_width grpelem placeholder"
                  data-placeholder-for="u2300-bw_content">
                  {/* placeholder node */}
                </span>
              </div>
            </div>
          </div>
          <div className="preload_images">
            <img
              className="preload temp_no_img_src"
              data-orig-src="images/u753-17-r8.png?crc=122963081"
              alt
              src="images/blank.gif?crc=4208392903"
            />
            <img
              className="preload temp_no_img_src"
              data-orig-src="images/u753-17-m8.png?crc=122963081"
              alt
              src="images/blank.gif?crc=4208392903"
            />
            <img
              className="preload temp_no_img_src"
              data-orig-src="images/u753-17-fs8.png?crc=193939537"
              alt
              src="images/blank.gif?crc=4208392903"
            />
            <img
              className="preload temp_no_img_src"
              data-orig-src="images/u1270-17-r8.png?crc=522526091"
              alt
              src="images/blank.gif?crc=4208392903"
            />
            <img
              className="preload temp_no_img_src"
              data-orig-src="images/u1270-17-m8.png?crc=522526091"
              alt
              src="images/blank.gif?crc=4208392903"
            />
            <img
              className="preload temp_no_img_src"
              data-orig-src="images/u1270-17-fs8.png?crc=4225927277"
              alt
              src="images/blank.gif?crc=4208392903"
            />
            <img
              className="preload temp_no_img_src"
              data-orig-src="images/news1-u1701-r-fr.png?crc=3855750308"
              alt
              src="images/blank.gif?crc=4208392903"
            />
            <img
              className="preload temp_no_img_src"
              data-orig-src="images/news3-u1691-r-fr.png?crc=3855750308"
              alt
              src="images/blank.gif?crc=4208392903"
            />
            <img
              className="preload temp_no_img_src"
              data-orig-src="images/news2-u1705-r-fr.png?crc=3855750308"
              alt
              src="images/blank.gif?crc=4208392903"
            />
            <img
              className="preload temp_no_img_src"
              data-orig-src="images/news4-u1476-r-fr.png?crc=3855750308"
              alt
              src="images/blank.gif?crc=4208392903"
            />
            <img
              className="preload temp_no_img_src"
              data-orig-src="images/news6-u1596-r-fr.png?crc=3855750308"
              alt
              src="images/blank.gif?crc=4208392903"
            />
            <img
              className="preload temp_no_img_src"
              data-orig-src="images/news5-u1563-r-fr.png?crc=3855750308"
              alt
              src="images/blank.gif?crc=4208392903"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Home
