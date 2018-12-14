import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle }) => (
  <div
    className="bg-red mb-6"
  >
    <div
      className="container py-6 px-4 mx-auto"
    >
      <h1 className="m-0">
        <Link
          to="/"
          className="text-white no-underline"
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
