import React, { FunctionComponent } from 'react'
import { graphql } from 'gatsby'
import Template from 'components/Common/Template'

type PostTemplateProps = {}

const postTemplate: FunctionComponent<PostTemplateProps> = props => {
  console.log(props)

  return <Template>Post Template</Template>
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
