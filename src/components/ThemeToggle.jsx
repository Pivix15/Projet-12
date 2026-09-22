import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

function ThemeToggle() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem('theme') || 'light'
  );

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <button
      className="theme-toggle"
      aria-label={theme === 'light' ? 'Passer en thème sombre' : 'Passer en thème clair'}
      onClick={() => setTheme((t) => (t === 'light' ? 'dark' : 'light'))}
    >
      {theme === 'light' ? <Moon size={18} aria-hidden="true" /> : <Sun size={18} aria-hidden="true" />}
    </button>
  );
}

export default ThemeToggle;