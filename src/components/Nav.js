import React from 'react'
import { Link } from '@reach/router'

export default () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/lodash">Lodash</Link>
    <Link to="/date-fns">Date-fns</Link>
    <Link to="/css">Css</Link>
  </nav>
)
