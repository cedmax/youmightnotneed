import React from 'react'
import glob from 'glob'
import fs from 'fs'
import requireMarkdownC from 'require-markdown'
import mapImports from './src/helpers/map-imports'

const requireMarkdown = requireMarkdownC({
  typographer: true,
  html: true,
})

const fetchContent = prj => {
  const obj = {}
  glob.sync(`./src/content/${prj}/**/*.*`).forEach(file => {
    const fileKey = file.replace(`src/content/${prj}/`, '')
    obj[fileKey] = file.endsWith('.md')
      ? requireMarkdown(file)
      : fs.readFileSync(file, 'utf8')
  })
  return mapImports(obj)
}

const envConfig = {}

if (process.env.PULL_REQUEST) {
  envConfig.siteRoot = (
    process.env.PULL_REQUEST === 'true'
      ? process.env.DEPLOY_PRIME_URL
      : process.env.URL
  ).replace('http://', 'https://')
}

export default {
  ...envConfig,
  getRoutes: async () => [
    {
      path: '/',
      template: 'src/containers/Page',
      getData: async () => ({
        content: requireMarkdown('src/content/readme.md'),
        title: 'You Might Not Need *',
      }),
    },
    {
      path: '/lodash',
      template: 'src/containers/LibPage',
      getData: async () => ({
        frw: 'lodash',
        content: requireMarkdown('./src/content/lodash.md'),
        title: 'You Might Not Need Lodash',
        data: fetchContent('lodash'),
      }),
    },
    {
      path: '/lodash/missing',
      template: 'src/containers/Page',
      getData: async () => ({
        content: requireMarkdown('src/content/lodash-missing.md'),
        title: 'You Might Not Need Lodash',
      }),
    },
    {
      path: '/date-fns',
      template: 'src/containers/LibPage',
      getData: async () => ({
        frw: 'date-fns',
        content: requireMarkdown('./src/content/date-fns.md'),
        title: 'You Might Not Need date-fns',
        data: fetchContent('date-fns'),
      }),
    },
    {
      path: '/date-fns/missing',
      template: 'src/containers/Page',
      getData: async () => ({
        content: requireMarkdown('src/content/date-fns-missing.md'),
        title: 'You Might Not Need date-fns',
      }),
    },
    {
      path: '/momentjs',
      template: 'src/containers/Page',
      getData: async () => ({
        content: requireMarkdown('src/content/moment.md'),
        title: 'You Might Not Need Moment.js',
      }),
    },
    {
      path: '/css',
      template: 'src/containers/Css',
      getData: async () => ({
        content: requireMarkdown('src/content/css.md'),
        title: 'You Might Not Need Css',
      }),
    },
  ],
  Document: ({ Html, Head, Body, children }) => (
    <Html>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="msvalidate.01" content="0B159474AD5BF3967C81DAEA4C4F9F2B" />
        <meta
          name="description"
          property="og:description"
          content="A collection of `You might not need ${something}` resources, including the most comprehensive unit tested collection of lodash methods implemented in vanilla js"
        />
        <meta property="og:image" content={`${envConfig.siteRoot}/share.jpg`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Body>
        {children}
        <div id="modal-root" />
      </Body>
    </Html>
  ),
  plugins: [
    'react-static-plugin-styled-components',
    'react-static-plugin-reach-router',
    'custom-raw-loader',
  ],
}
