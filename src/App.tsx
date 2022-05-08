import { Moon, Sun } from "phosphor-react";
import { useEffect, useMemo, useState } from "react";
import { ToggleDarkModeButton } from "./components/ToggleDarkModeButton";
import { Widget } from "./components/Widget";

export function App() {
  const [theme, setTheme] = useState<'dark' | 'light' | null>(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark' || theme === 'light') return theme;
    else {
      localStorage.removeItem('theme');
      return null
    }
  });

  const shouldUseDarkMode = useMemo(() => {
    return theme === 'dark' || (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches)
  }, [theme])

  useEffect(() => {
    if (theme) localStorage.setItem('theme', theme);
    else localStorage.removeItem('theme');

    if (shouldUseDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme])

  return (
    <>
      <ToggleDarkModeButton toggleMode={setTheme} isDarkModeEnabled={shouldUseDarkMode} />
      <Widget />
    </>
  )
}
