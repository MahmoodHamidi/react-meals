import { useState, createContext } from "react";

// Erstelle ein Context-Objekt
export const DarkModeContext = createContext();

// Erstelle ein Provider-Komponente
export const DarkModeProvider = ({ children }) => {
  // Zustandsvariable und Setter-Funktion
  const [isDarkMode, setIsDarkMode] = useState(false);

  // DarkMode toggeln
  const toggleDarkMode = () => {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  };
  // erstelle ein Value-Objekt
  const valueShare = { isDarkMode, toggleDarkMode };

  return (
    <DarkModeContext.Provider value={valueShare}>
      {children}
    </DarkModeContext.Provider>
  );
};

// exporti den Provider
export default DarkModeProvider;
