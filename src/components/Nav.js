import React, { memo } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default memo(() => {
  const router = useRouter()

  return (
    <nav>
      <Link href="/" aria-current={router.asPath == '/' ? 'page' : undefined}>
        You Might Not Need
      </Link>
      <Link
        href="/lodash"
        aria-current={router.asPath == '/lodash' ? 'page' : undefined}
      >
        lodash
      </Link>
      <Link
        href="/date-fns"
        aria-current={router.asPath == '/date-fns' ? 'page' : undefined}
      >
        date-fns
      </Link>
      <Link
        href="/css"
        aria-current={router.asPath == '/css' ? 'page' : undefined}
      >
        css
      </Link>
    </nav>
  )
})
