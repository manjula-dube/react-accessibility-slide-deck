import React from 'react'
import {MDXProvider} from '@mdx-js/react'
const components = {
  wrapper: props => (
    <div style={{ padding: '20px', backgroundColor: 'tomato' }}>
      <main {...props} />
    </div>
  )
}
export default props => (
  <MDXProvider components={components}>
    <main {...props} />
  </MDXProvider>
)