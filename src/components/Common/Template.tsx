import React, { FunctionComponent, ReactNode } from 'react'
import styled from '@emotion/styled'
import GlobalStyle from './GlobalStyle'
import Footer from './Footer'
import { Helmet } from 'react-helmet'

type TemplateProps = {
  title: string
  description: string
  url: string
  image: string
  children: ReactNode
}

const Container = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const Template: FunctionComponent<TemplateProps> = ({
  title,
  description,
  url,
  image,
  children,
}) => {
  return (
    <Container>
      <Helmet>
        <title>{title}</title>

        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={url} />
        <meta property="og:site_name" content={title} />

        <meta property="twitter:card" content="summary" />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={image} />
        <meta property="twitter:site" content="@홍차" />
        <meta property="twitter:creator" content="@홍차" />

        <meta
          name="google-site-verification"
          content="7BtCqIKZfFyscm8gUTBieScCfUDCBalxlTmwuTvAuWg"
        />
        <meta
          name="naver-site-verification"
          content="b75fcbaf5bbd4bd1f0c1b7d1d49bea26a828e123"
        />
        <meta name="NaverBot" content="All" />
        <meta name="NaverBot" content="index,follow" />
        <meta name="Yeti" content="All" />
        <meta name="Yeti" content="index,follow" />
        <link rel="shortcut icon" href="favicon.ico" />

        <html lang="ko" />
      </Helmet>

      <GlobalStyle />
      {children}
      <Footer />
    </Container>
  )
}

export default Template
