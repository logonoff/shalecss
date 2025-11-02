"use client";

import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";

type Theme = "light" | "dark" | "contrast";
type FontSize = "large" | "regular";

interface ThemeContextType {
    theme: Theme;
    setTheme: (theme: Theme) => void;

    size: FontSize;
    setSize: (size: FontSize) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>("light");
    const [size, setSize] = useState<FontSize>("regular");

    useEffect(() => {
        document.documentElement.classList.remove("shale-v1-light", "shale-v1-dark", "shale-v1-contrast");
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
