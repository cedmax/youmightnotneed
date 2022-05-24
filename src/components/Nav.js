import React, { memo } from 'react'
import Link from 'next/link'

export default memo(() => (
  <nav>
    <Link href="/">You Might Not Need</Link>
    <Link href="/lodash">lodash</Link>
    <Link href="/date-fns">date-fns</Link>
    <Link href="/css">css</Link>
  </nav>
))
