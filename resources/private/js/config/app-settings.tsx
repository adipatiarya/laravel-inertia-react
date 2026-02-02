import { useState, useMemo, useCallback, createContext, useContext, useEffect } from 'react';

export interface AppSettingsContext {
    sidebarOpen: boolean;
    darkMode: boolean;
    toggleSidebarOpen: () => void;
    toggleDarkMode: (t: boolean) => void;
}

export const AppSettings = createContext<AppSettingsContext | null>(null);

export function useAppSettings() {
    const context = useContext(AppSettings);
    if (!context) {
        throw new Error('context error. useAppSettings()');
    }

    return context;
}

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [darkMode, setDarkMode] = useState(false);

    const toggleSidebarOpen = useCallback(() => {
        setSidebarOpen((prev) => !prev);
    }, []);

    const toggleDarkMode = useCallback((value: boolean) => {
        const html = document.documentElement;
        html[value ? 'setAttribute' : 'removeAttribute']('data-bs-theme', 'dark');
        setDarkMode(value);
    }, []);

    const contextValue = useMemo<AppSettingsContext>(() => {
        return { sidebarOpen, darkMode, toggleSidebarOpen, toggleDarkMode };
    }, [sidebarOpen, darkMode]);

    return <AppSettings.Provider value={contextValue}>{children}</AppSettings.Provider>;
};
