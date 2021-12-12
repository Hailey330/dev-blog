import Text from 'components/Text'
import { Link } from 'gatsby'
import React, { FunctionComponent } from 'react'

const IndexPage: FunctionComponent = function () {
  return (
    <div>
      <Text text="Hello, World!" />
      <Link to="/info/">To Info</Link>
    </div>
  )
}

export default IndexPage
