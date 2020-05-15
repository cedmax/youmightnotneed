import React from 'react'
import { Link } from '@reach/router'

export default () => (
  <nav>
    <Link to="/">home</Link>
    <Link to="/lodash">lodash</Link>
    <Link to="/date-fns">date-fns</Link>
    <Link to="/css">css</Link>
  </nav>
)
