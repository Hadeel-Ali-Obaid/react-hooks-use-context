import React, { useState } from "react";

const ThemeContext = React.createContext();

// create a provider component
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("dark");
    return (
      <ThemeContext.Provider value={{ theme, setTheme }}>
        {children}
      </ThemeContext.Provider>
    );
  }
  
  export { ThemeContext, ThemeProvider };