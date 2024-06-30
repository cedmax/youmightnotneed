import React, { memo } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Badge from './Badge'

export default memo(({ themeToggler }) => {
  const router = useRouter()

  return (
    <nav>
      <Link href="/">
        <a aria-current={router.asPath == '/' ? 'page' : undefined}>
          You Might Not Need
        </a>
      </Link>
      <Link href="/lodash">
        <a aria-current={router.asPath == '/lodash' ? 'page' : undefined}>
          lodash
        </a>
      </Link>
      <Link href="/date-fns">
        <a aria-current={router.asPath == '/date-fns' ? 'page' : undefined}>
          date-fns
        </a>
      </Link>
      <Link href="/css">
        <a aria-current={router.asPath == '/css' ? 'page' : undefined}>css</a>
      </Link>

      <button onClick={themeToggler}>toggle dark mode</button>
      <Badge />
    </nav>
  )
})
