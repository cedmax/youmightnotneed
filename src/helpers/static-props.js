import glob from 'glob'
import fs from 'fs'
import path from 'path'
import requireMarkdownC from 'require-markdown'
import mapImports from './map-imports'

const requireMarkdown = requireMarkdownC({
  typographer: true,
  html: true,
})

const parseMarkdown = file => requireMarkdown(path.resolve(file))

const fetchContent = prj => {
  const obj = {}
  glob.sync(`./src/content/${prj}/**/*.*`).forEach(file => {
    const fileKey = file.replace(`src/content/${prj}/`, '')
    obj[fileKey] = file.endsWith('.md')
      ? parseMarkdown(file)
      : fs.readFileSync(file, 'utf8')
  })
  return mapImports(obj)
}

const staticProps = {
  footer: parseMarkdown('src/content/footer.md'),
  index: {
    content: parseMarkdown('src/content/readme.md'),
    title: 'You Might Not Need *',
  },
  lodash: {
    content: parseMarkdown('./src/content/lodash.md'),
    title: 'You Might Not Need Lodash',
    data: fetchContent('lodash'),
  },
  'lodash/missing': {
    content: parseMarkdown('src/content/lodash-missing.md'),
    title: 'You Might Not Need Lodash',
  },
  'date-fns': {
    content: parseMarkdown('./src/content/date-fns.md'),
    title: 'You Might Not Need date-fns',
    data: fetchContent('date-fns'),
  },
  'date-fns/missing': {
    content: parseMarkdown('src/content/date-fns-missing.md'),
    title: 'You Might Not Need date-fns',
  },
  momentjs: {
    content: parseMarkdown('src/content/moment.md'),
    title: 'You Might Not Need Moment.js',
  },
  'css': {
    content: parseMarkdown('src/content/css.md'),
    title: 'You Might Not Need Css',
  },
}

export const getStaticProps = key => {
  const siteRoot =
    process.env.PULL_REQUEST === 'true'
      ? process.env.DEPLOY_PRIME_URL
      : (process.env.URL || '').replace('http://', 'https://')

  return {
    props: {
      ...staticProps[key],
      footer: staticProps.footer,
      configKey: key,
      siteRoot,
    },
  }
}
