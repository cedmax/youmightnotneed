import React from 'react'

const envConfig = {}
if (process.env.PULL_REQUEST) {
  envConfig.siteRoot = (process.env.PULL_REQUEST === 'true'
    ? process.env.DEPLOY_PRIME_URL
    : process.env.URL
  ).replace('http://', 'https://')
}

export default {
  ...envConfig,
  getRoutes: async () => [
    {
      path: '/',
      template: 'src/containers/Home',
    },
    {
      path: '/lodash',
      template: 'src/containers/Lodash',
    },
    {
      path: '/lodash/missing',
      template: 'src/containers/LodashMissing',
    },
    {
      path: '/date-fns',
      template: 'src/containers/DateFns',
    },
    {
      path: '/date-fns/missing',
      template: 'src/containers/DateFnsMissing',
    },
    {
      path: '/momentjs',
      template: 'src/containers/Moment',
    },
    {
      path: '/css',
      template: 'src/containers/Css',
    },
  ],
  Document: ({ Html, Head, Body, children }) => (
    <Html>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="msvalidate.01" content="0B159474AD5BF3967C81DAEA4C4F9F2B" />
        <meta
          name="description"
          content='A collection of "You might not need" resources'
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body>{children}</Body>
    </Html>
  ),
  plugins: ['react-static-plugin-styled-components', 'custom-raw-loader'],
}
