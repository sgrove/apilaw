import React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Header from '../components/Landing/Header'
import Footer from '../components/Landing/Footer'
import headerBg from '../images/liberty.jpg'

import Bio from '../components/Bio'

const postStyle = {
  color: '#7f7f7f',
  lineHeight: '24px',
  fontFamily: 'raleway, sans-serif',
  fontSize: '16px',
}

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const heroImage = get(
      this.props,
      'data.markdownRemark.frontmatter.heroImage',
    )

    return (
      <div>
        <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
        <div
          className="position_content"
          id="page_position_content"
          style={{width: '1200px'}}>
          <Header
            page="journal"
            heroColor={'red'}
            heroImage={headerBg}
            scrollableHeader={false}
            noHero={true}
          />
          <div
            className="clearfix colelem shared_content"
            id="pu25367"
            data-content-guid="pu25367_content">
            {/* group */}
            <div
              className="browser_width grpelem shared_content"
              id="u25367-bw"
              data-content-guid="u25367-bw_content"
              style={{height: 313}}>
              <div id="u25367">{/* simple frame */}</div>
            </div>
            <div
              className="browser_width grpelem"
              id="u25370-bw"
              style={{height: 313}}>
              <div
                className="museBGSize"
                id="u25370"
                style={{
                  background: '#111',
                }}>
                {/* group */}
                <div className="clearfix" id="u25370_align_to_page">
                  <div className="clearfix grpelem" id="u25381-4">
                    {/* content */}
                    <p>{post.frontmatter.subtitle}</p>
                  </div>
                  <div
                    className="whoweare clearfix grpelem shared_content wow fadeInUp"
                    id="u25382-4"
                    data-content-guid="u25382-4_content"
                    style={{visibility: 'visible'}}>
                    {/* content */}
                    <h2>{post.frontmatter.title}</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{marginBottom: '450px'}} />
          <div style={{zIndex: '999', marginBottom: '50px'}}>
            <p
              style={{
                display: 'block',
              }}
            />
            <div
              dangerouslySetInnerHTML={{__html: post.html}}
              style={postStyle}
            />
            <hr />
            <div style={postStyle}>
              {post.frontmatter.date}
              <Bio />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: {slug: {eq: $slug}}) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        heroImage
      }
    }
  }
`
