import { ReactNode, createContext, useEffect, useState } from "react"

interface ThemeProviderProps {
  children: ReactNode
}

export type ThemeContextType = {
  isDarkMode: boolean
  toggleMode: () => void
}

export const ThemeContext = createContext<ThemeContextType>({
  isDarkMode: false,
  toggleMode: () => {},
})

export function ThemeProvider(props:ThemeProviderProps) {
  
  // 테마 관리
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const storedTheme = localStorage.getItem('theme')
    return storedTheme ? JSON.parse(storedTheme) : true
  })
  
  const toggleMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(isDarkMode))
  }, [isDarkMode])
  
  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleMode }}>
      {props.children}
    </ThemeContext.Provider>
  )
}