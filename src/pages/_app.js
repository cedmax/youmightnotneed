import React, { useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { useDarkMode } from '../helpers/use-dark-mode'
import AppStyles, { GlobalStyle } from '../helpers/styles'
import Nav from '../components/Nav'

const lightTheme = {
  variables: `
    --nc-tx-1: rgb(40, 40, 40);
    --nc-tx-2: rgb(66, 78, 88);
    --nc-lk-1: rgb(155, 77, 202);
    --nc-lk-2: rgb(96, 108, 118);
    --nc-bg-1: #FFFFFF;
    --nc-bg-2: #F8F8F8;
    --nc-bg-3: #e8e8e8;
    --custom-bk-code: #f0f0f0
  `,
}

const darkTheme = {
  variables: `
    --nc-tx-1: #e8e8e8;
    --nc-tx-2: #ccc;
    --nc-bg-1: #111111;
    --nc-bg-2: #181818;
    --nc-bg-3: #3a3a3a;
    --nc-lk-1: #99BFFF;
    --nc-lk-2: rgb(176, 188, 198);
    --custom-bk-code: #282c34;
  `,
}

const App = ({ Component, pageProps }) => {
  const [theme, themeToggler] = useDarkMode()

  useEffect(() => {
    let link = document.getElementById('highlightjs-css')
    if (!link) {
      link = document.createElement('link')
      link.id = 'highlightjs-css'
      link.rel = 'stylesheet'
      const head = document.getElementsByTagName('head')[0]
      head.appendChild(link)
    }

    const themefile = theme === 'light' ? 'xcode' : 'hybrid'
    link.href = `https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/${themefile}.min.css`

    // import 'highlight.js/styles/xcode.css'
  }, [theme])

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <AppStyles>
        <Nav themeToggler={themeToggler} />
        <Component {...pageProps} />
      </AppStyles>
      <div id="modal-root"></div>
    </ThemeProvider>
  )
}

export default App
