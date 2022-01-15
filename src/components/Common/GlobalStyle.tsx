import React, { FunctionComponent } from 'react'
import { Global, css } from '@emotion/react'

const defaultStyle = css`
  @import url('https://spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css');
  @import url('https://fonts.googleapis.com/css2?family=Fira+Code&display=swap');

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html,
  body,
  #___gatsby {
    height: 100%;
    font-family: 'Spoqa Han Sans Neo', 'sans-serif';
  }

  a,
  a:hover {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }
`

const GlobalStyle: FunctionComponent = function () {
  return <Global styles={defaultStyle} />
}

export default GlobalStyle
