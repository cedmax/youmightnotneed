import { useCallback, useState } from 'react'

const preference =
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'

const saved =
  typeof window !== 'undefined' && window.localStorage.getItem('theme')

export const useDarkMode = () => {
  const [theme, setTheme] = useState(saved ? saved : preference)

  const themeToggler = useCallback(() => {
    setTheme(theme => {
      const newTheme = theme === 'light' ? 'dark' : 'light'
      typeof window !== 'undefined' &&
        window.localStorage.setItem('theme', newTheme)
      return newTheme
    })
  }, [])

  return [theme, themeToggler]
}
