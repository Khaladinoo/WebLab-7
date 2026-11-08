import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import useLocalStorage from '../hooks/useLocalStorage';

export default function Layout() {
  // Read and toggle theme preference stored in localStorage via useLocalStorage hook
  const [theme, setTheme] = useLocalStorage('theme', 'light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    document.body.className = `theme-${theme}`;
  }, [theme]);

  return (
    <div className={`app-layout theme-${theme}`} style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <header>
        <NavBar theme={theme} onToggleTheme={toggleTheme} />
      </header>

      <main style={{ flex: 1, padding: '1rem' }}>
        <Outlet />
      </main>

      <footer style={{ padding: '1rem', textAlign: 'center', borderTop: '1px solid #ccc', marginTop: 'auto' }}>
        <p>&copy; {new Date().getFullYear()} Shop Application. All rights reserved.</p>
      </footer>
    </div>
  );
}
