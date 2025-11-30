"use client";

import {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type Theme = "light" | "dark" | "contrast";
type FontSize = "large" | "regular";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;

  size: FontSize;
  setSize: (size: FontSize) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const useLocalStorage = <T,>(
  key: string,
  initialValue: T,
): [T, (value: T) => void] => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  const setValue = (value: T) => {
    try {
      setStoredValue(value);
      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(value));
      }
    } catch (error) {
      console.warn(`Error setting localStorage key "${key}":`, error);
    }
  };

  return [storedValue, setValue];
};

export const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useLocalStorage<Theme>("shalecss.theme", "light");
  const [size, setSize] = useLocalStorage<FontSize>(
    "shalecss.fontSize",
    "regular",
  );

  useEffect(() => {
    document.documentElement.classList.remove(
      "shale-v1-light",
      "shale-v1-dark",
      "shale-v1-contrast",
    );
    document.documentElement.classList.add(`shale-v1-${theme}`);

    document.documentElement.classList.remove("shale-v1-bigger-text");
    if (size === "large") {
      document.documentElement.classList.add("shale-v1-bigger-text");
    }
  }, [theme, size]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, size, setSize }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
