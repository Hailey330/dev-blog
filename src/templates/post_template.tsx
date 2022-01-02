import React, { FunctionComponent } from 'react'
import { graphql } from 'gatsby'

type PostTemplateProps = {}

const postTemplate: FunctionComponent<PostTemplateProps> = props => {
  console.log(props)

  return <div>Post Template</div>
}

export default postTemplate

export const queryMarkdownDataBySlug = graphql`
  query queryAllMarkdownDataBySlug($slug: String) {
    allMarkdownRemark(filter: { fields: { slug: { eq: $slug } } }) {
      edges {
        node {
          html
          frontmatter {
            summary
            date(formatString: "YYYY.MM.DD")
            title
            categories
            thumbnail {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  }
`
