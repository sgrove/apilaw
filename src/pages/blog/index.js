import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Header from '../../components/Landing/Header';
import Footer from '../../components/Landing/Footer';

import Bio from '../../components/Bio'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
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
        <p>Out Thoughts</p>
        </div>
        <div className="whoweare clearfix grpelem shared_content wow fadeInUp" id="u25382-4" data-content-guid="u25382-4_content" style={{visibility: 'visible'}}>{/* content */}
        <h2>Journal</h2>
        </div>
        </div>
        </div>
        </div>
        </div>
        <div style={{marginBottom: "300px"}} />
        <Helmet title={siteTitle} />
        <Bio />
        {posts.map(({ node }) => {
          const title = get(node, 'frontmatter.title') || node.fields.slug
          return (
              <div key={node.fields.slug}>
              <h3
            style={{}}
              >
              <Link style={{ boxShadow: 'none' }} to={node.fields.slug}>
              {title}
            </Link>
              </h3>
              <small>{node.frontmatter.date}</small>
              <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
              </div>
          )
        })}
        <Footer />
        </div>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
          }
        }
      }
    }
  }
`
