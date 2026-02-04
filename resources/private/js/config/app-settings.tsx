import { useState, useMemo, useCallback, createContext, useContext, useEffect } from 'react';

export interface AppSettingsContext {
    sidebarOpen: boolean;
    sidebarMobileOpen: boolean;
    darkMode: boolean;
    hasScroll: boolean;
    toggleSidebarOpen: () => void;
    toggleSidebarMobileOpen: () => void;
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
    const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);
    const [sidebarMobileOpen, setSidebarMobileOpen] = useState<boolean>(false);
    const [darkMode, setDarkMode] = useState<boolean>(false);
    const [hasScroll, setHasScroll] = useState<boolean>(false);

    const toggleSidebarOpen = useCallback(() => {
        setSidebarOpen((prev) => !prev);
    }, []);
    const toggleSidebarMobileOpen = useCallback(() => {
        setSidebarMobileOpen((prev) => !prev);
    }, []);

    // gunakan useCallback agar referensi fungsi stabil
    const handleScroll = useCallback(() => {
        if (window.scrollY > 0) {
            setHasScroll(true);
        } else {
            setHasScroll(false);
        }
        // di sini bisa update state atau jalankan logika lain
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        // cleanup saat komponen unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);

    const toggleDarkMode = useCallback((value: boolean) => {
        const html = document.documentElement;
        html[value ? 'setAttribute' : 'removeAttribute']('data-bs-theme', 'dark');
        setDarkMode(value);
    }, []);

    const contextValue = useMemo<AppSettingsContext>(() => {
        return { sidebarOpen, sidebarMobileOpen, darkMode, toggleSidebarOpen, toggleDarkMode, hasScroll, toggleSidebarMobileOpen };
    }, [sidebarOpen, darkMode, hasScroll, sidebarMobileOpen]);

    return <AppSettings.Provider value={contextValue}>{children}</AppSettings.Provider>;
};
