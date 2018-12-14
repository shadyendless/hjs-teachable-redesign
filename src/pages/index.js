import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['nihongoshark', 'hacking japanese supercourse', 'hjs', 'learning japanese']} />
    <div className="bg-white rounded-sm shadow-md">
      <h1>Hi</h1>
    </div>
  </Layout>
)

export default IndexPage
