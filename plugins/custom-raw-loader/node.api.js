import marked from 'marked'
import webpack from 'webpack'

const renderer = new marked.Renderer()
renderer.link = (href, title, text) => {
  const isExternal = href.indexOf('http') === 0
  return `<a href="${href}"
    ${isExternal ? 'target="_blank" rel="noopener"' : ''} 
    ${title ? `title="${title}"` : ''}>${text}</a>`
}
export default () => ({
  webpack: config => {
    config.plugins.push(
      new webpack.ContextReplacementPlugin(
        /highlight\.js\/lib\/languages$/,
        new RegExp(`^./(${['javascript', 'python', 'bash'].join('|')})$`)
      )
    )

    config.module.rules.push({
      test: /\/content\/(.*).js$/,
      use: 'raw-loader',
    })

    config.module.rules[0].oneOf.unshift({
      test: /\.md$/,
      use: [
        {
          loader: 'html-loader',
        },
        {
          loader: 'markdown-loader',
          options: {
            renderer,
          },
        },
      ],
    })

    return config
  },
})
