import { Moon, Sun } from "phosphor-react";

interface ToggleDarkModeButtonProps {
  isDarkModeEnabled: boolean;
  toggleMode: (mode: 'light' | 'dark') => void;
}

export function ToggleDarkModeButton({ isDarkModeEnabled, toggleMode }: ToggleDarkModeButtonProps) {
  function handleToggleMode() {
    toggleMode(isDarkModeEnabled ? 'light' : 'dark');
  }

  return (
    <button 
      onClick={handleToggleMode}
      className="absolute right-4 top-4 w-9 h-9 flex items-center justify-center"
    >
      {
        isDarkModeEnabled ? <Sun size={36} /> : <Moon size={36} />
      }
    </button>
  )
}