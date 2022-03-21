import React, { memo } from 'react'
import { Link } from '@reach/router'

export default memo(() => (
  <nav>
    <Link to="/">You Might Not Need</Link>
    <Link to="/lodash">lodash</Link>
    <Link to="/date-fns">date-fns</Link>
    <Link to="/css">css</Link>
  </nav>
))
