import glob from 'glob'
import fs from 'fs'
import path from 'path'
import requireMarkdownC from 'require-markdown'
import mapImports from './map-imports'

const requireMarkdown = requireMarkdownC({
  typographer: true,
  html: true,
})

const fetchContent = prj => {
  const obj = {}
  glob.sync(`./src/content/${prj}/**/*.*`).forEach(file => {
    const fileKey = file.replace(`src/content/${prj}/`, '')
    obj[fileKey] = file.endsWith('.md')
      ? requireMarkdown(path.resolve(file))
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

const config = {
  footer: requireMarkdown(path.resolve('src/content/footer.md')),
  index: {
    content: requireMarkdown(
      path.resolve(path.resolve('src/content/readme.md'))
    ),
    title: 'You Might Not Need *',
  },
  lodash: {
    content: requireMarkdown(path.resolve('./src/content/lodash.md')),
    title: 'You Might Not Need Lodash',
    data: fetchContent('lodash'),
  },
  'lodash/missing': {
    content: requireMarkdown(path.resolve('src/content/lodash-missing.md')),
    title: 'You Might Not Need Lodash',
  },
  'date-fns': {
    content: requireMarkdown(path.resolve('./src/content/date-fns.md')),
    title: 'You Might Not Need date-fns',
    data: fetchContent('date-fns'),
  },
  'date-fns/missing': {
    content: requireMarkdown(path.resolve('src/content/date-fns-missing.md')),
    title: 'You Might Not Need date-fns',
  },
  momentjs: {
    content: requireMarkdown(path.resolve('src/content/moment.md')),
    title: 'You Might Not Need Moment.js',
  },
  'css': {
    content: requireMarkdown(path.resolve('src/content/css.md')),
    title: 'You Might Not Need Css',
  },
}

export const getConfigProps = key => ({
  props: { ...config[key], footer: config.footer },
})
