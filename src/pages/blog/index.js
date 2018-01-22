import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Header from '../../components/Landing/Header'
import Footer from '../../components/Landing/Footer'
import globalCSS from '../../css/site_global.css'
import indexCSS from '../../css/index.css'
import masterCSS from '../../css/master_b-master.css'

import Bio from '../../components/Bio'

const postPreview = (node, idx) => {
  const title = get(node, 'frontmatter.title') || node.fields.slug
  /*

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
  */
  const contentStyle =
    idx % 2 == 0 && false
      ? {}
      : {
          width: false // !!node.frontmatter.heroImage
            ? '670px'
            : '1070px',
          // minHeight: '444px',
          marginRight: '-10000px',
          marginTop: '65px',
          left: '20px',
        }
  const imgStyle =
    idx % 2 == 0 && false
      ? {}
      : {
          width: !!node.frontmatter.heroImage ? '400px' : '0px',
          // height: '223px',
          marginRight: '-10000px',
          marginTop: '65px',
          left: '710px',
          background:
            'transparent url(/img/' +
            node.frontmatter.heroImage +
            ') no-repeat center center',
        }

  return (
    <div
      className="browser_width grpelem shared_content"
      id="u17083-bw"
      data-content-guid="u17083-bw_content"
      key={idx}
      style={{
        // height: 514,
        marginTop: (200 * idx).toString() + 'px',
      }}>
      <div id="u17083">
        {/* group */}
        <div
          className="clearfix"
          id="u17083_align_to_page"
          style={{backgroundColor: '#f7f6f3'}}>
          <div
            className="clearfix grpelem shared_content"
            id="u17132-18"
            data-content-guid="u17132-18_content"
            style={contentStyle}>
            {/* content */}
            <p id="u17132-2">
              <Link
                style={{
                  boxShadow: 'none',
                  color: 'black',
                  textDecoration: 'none',
                }}
                to={node.fields.slug}>
                {title}
              </Link>
            </p>
            <p id="u17132-5">
              <span id="u17132-3">​</span>
              <span className="actAsInlineDiv normal_text" id="u17133">
                {/* content */}
                <span
                  className="actAsDiv excludeFromNormalFlow"
                  id="u17134"
                  style={{minWidth: '150px'}}>
                  <small>{node.frontmatter.date}</small>
                </span>
              </span>
            </p>

            {node.frontmatter.description ? (
              <p id="u17132-7">{node.frontmatter.description}</p>
            ) : (
              <p
                id="u17132-7"
                dangerouslySetInnerHTML={{__html: node.excerpt}}
              />
            )}
          </div>
          <div className="museBGSize grpelem" id="u17162" style={imgStyle}>
            {/* simple frame */}
          </div>
        </div>
      </div>
    </div>
  )
}

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <div className="position_content" id="page_position_content" style={{}}>
        <Helmet title={siteTitle}>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          />
        </Helmet>
        <Header
          page="journal"
          heroColor={'red'}
          scrollableHeader={false}
          noHero={true}
        />
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
          <div
            className="browser_width grpelem shared_content"
            id="u16327-bw"
            data-content-guid="u16327-bw_content"
            style={{height: 313}}
          />
          <div className="clearfix grpelem" id="u16381-4">
            {/* content */}
            <p>{}</p>
          </div>
          <div
            className="whoweare clearfix grpelem shared_content wow fadeInUp"
            id="u16302-4"
            data-content-guid="u16302-4_content"
            style={{visibility: 'visible'}}>
            {/* content */}
            <h2>News</h2> {/* ' */}
          </div>
        </div>
        <div className="clearfix colelem" id="pu17083">
          {/* group */}
          {posts.map(({node}, idx) => {
            return postPreview(node, idx)
          })}
        </div>
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
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      edges {
        node {
          excerpt(pruneLength: 250)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
            description
            heroImage
          }
        }
      }
    }
  }
`
