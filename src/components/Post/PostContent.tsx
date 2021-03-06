import styled from '@emotion/styled'
import React, { FunctionComponent } from 'react'

type PostContentProps = {
  html: string
}

const MarkdownRenderer = styled.div`
  /* Rendered Style */
  display: flex;
  flex-direction: column;
  width: 768px;
  margin: 0 auto;
  padding: 100px 0;
  word-break: break-all;

  /* Markdown Style */
  line-height: 1.8;
  font-size: 16px;
  font-weight: 400;

  /* Apply Padding Attribue to All Elements */
  p {
    padding: 3px 0;
  }

  /* Adjust Heading Element Style */
  h1,
  h2,
  h3 {
    font-weight: 800;
    margin-bottom: 30px;
  }

  * + h1,
  * + h2,
  * + h3 {
    margin-top: 30px;
  }

  hr + h1,
  hr + h2,
  hr + h3 {
    margin-top: 0;
  }

  h1 {
    font-size: 30px;
  }

  h2 {
    font-size: 25px;
  }

  h3 {
    font-size: 20px;
  }

  /* Adjust Quotation Element Style */
  blockquote {
    margin: 30px 0;
    padding: 5px 15px;
    border-left: 2px solid #000000;
    font-weight: 800;
  }

  /* Adjust List Element Style */
  ol,
  ul {
    margin-left: 20px;
    padding: 10px 0;
  }

  /* Adjust Horizontal Rule Style */
  hr {
    border: 1px solid #000000;
    margin: 100px 0;
  }

  /* Adjust Link Element Style */
  a {
    color: #4263eb;
    text-decoration: underline;
  }

  img {
    width: 100%;
  }

  u {
    text-decoration: underline;
    text-underline-position: under;
  }

  /* Adjust Code Style */
  pre[class*='language-'] {
    tab-size: 2;
    padding: 15px 12px;

    font-family: 'Fira Code', monospace;
    font-size: 15px;
    border-radius: 8px;

    ::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.5);
      border-radius: 3px;
    }
  }

  code[class*='language-'] {
    font-family: 'Fira Code', monospace;
    font-size: 13px;
    padding: 4px 6px;
  }

  /* Markdown Responsive Design */
  @media (max-width: 768px) {
    width: 100%;
    padding: 80px 20px;
    line-height: 1.6;
    font-size: 14px;

    h1 {
      font-size: 23px;
    }

    h2 {
      font-size: 20px;
    }

    h3 {
      font-size: 17px;
    }

    img {
      width: 100%;
    }

    hr {
      margin: 50px 0;
    }
  }
`

const PostContent: FunctionComponent<PostContentProps> = ({ html }) => {
  return <MarkdownRenderer dangerouslySetInnerHTML={{ __html: html }} />
}

export default PostContent
