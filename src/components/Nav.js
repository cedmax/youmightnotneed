import React from 'react'
// eslint-disable-next-line import/no-unresolved
import { Link } from '@reach/router'

export default () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/lodash">Lodash</Link>
    <Link to="/momentjs">Moment.js</Link>
    <Link to="/css">Css</Link>
  </nav>
)
