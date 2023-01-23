import React, { useState } from "react";
import Main from "./Main";
import ThemeContext from "./ThemeContext";
function LightDarkMode(props) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }


  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Main />
    </ThemeContext.Provider>
  );
}

export default LightDarkMode;