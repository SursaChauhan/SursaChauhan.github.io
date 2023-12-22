// ThemeButton.js
import React from 'react';
import { useTheme } from '../ThemeContext';

const ThemeButton = () => {
  const { theme, toggleTheme } = useTheme();

  const moonIconUrl = 'https://img.freepik.com/free-vector/yellow-crescent-geometric-shape-vector_53876-164618.jpg?size=626&ext=jpg&ga=GA1.1.1456370096.1688796407&semt=ais';
  const sunIconUrl = 'https://img.freepik.com/premium-vector/shining-sun-symbol-yellow-summer-heat-icon_543062-3979.jpg?w=740';

  return (
    <button onClick={toggleTheme} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
      {theme === 'light' ? (
        <img src={moonIconUrl} alt="Moon Icon" style={{ width: '20px', height: '20px' }} />
      ) : (
        <img src={sunIconUrl} alt="Sun Icon" style={{ width: '20px', height: '20px' }} />
      )}
    </button>
  );
};

export default ThemeButton;
