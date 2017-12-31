import React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Header from '../components/Landing/Header';
import Footer from '../components/Landing/Footer';
import headerBg from '../images/liberty.jpg';

import Bio from '../components/Bio'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <div>
        <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
        <div className="position_content" id="page_position_content"
      style={{width:"1200px"}}>
        <Header page="journal"
      heroColor={"red"}
      scrollableHeader={false}
      noHero={true}
        />
        <div className="clearfix colelem shared_content" id="pu25367" data-content-guid="pu25367_content">{/* group */}
        <div className="browser_width grpelem shared_content" id="u25367-bw" data-content-guid="u25367-bw_content" style={{height: 313}}>
        <div id="u25367">{/* simple frame */}</div>
        </div>
        <div className="browser_width grpelem" id="u25370-bw" style={{height: 313}}>
        <div className="museBGSize" id="u25370">{/* group */}
        <div className="clearfix" id="u25370_align_to_page">
        <div className="clearfix grpelem" id="u25381-4">{/* content */}
        <p>{post.frontmatter.subtitle}</p>
        </div>
        <div className="whoweare clearfix grpelem shared_content wow fadeInUp" id="u25382-4" data-content-guid="u25382-4_content" style={{visibility: 'visible'}}>{/* content */}
        <h2>{post.frontmatter.title}</h2>
        </div>
        </div>
        </div>
        </div>
        </div>
        <div style={{marginBottom: "400px"}} />
        <div style={{zIndex: "999"}}>
        <h1>{post.frontmatter.title}</h1>
        <p
      style={{
        display: 'block',
      }}
        >
        {post.frontmatter.date}
      </p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr    />
        Right?
        <Bio />
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
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
