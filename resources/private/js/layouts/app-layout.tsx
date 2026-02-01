import { AppSettings } from "@@/config/app-setting";
import { useState } from "react";
import { ThemeType } from "@@/types";
import { AppLayoutProps } from "@@/types/ui";

export default function AppLayout({ children, breadcrumbs, ...props } : AppLayoutProps) {

    const [appTheme, setAppTheme] = useState<ThemeType>('dark');

    return (
        <AppSettings.Provider value={{ appTheme, setAppTheme }}>
            <div id="app" className="app app-header-fixed app-sidebar-fixed">
                <div id="header" className="app-header">
                    <h1>HEADER</h1>
                </div>
                <div id="sidebar" className="app-sidebar">
                    <div className="app-sidebar-content">
                        <div className="menu">
                            <button onClick={() => setAppTheme(appTheme === "dark" ? "light" : "dark")}>
                                Switch Them {appTheme}
                            </button>
                        </div>
                    </div>
                </div>
                <div className="app-sidebar-bg"></div>
                <div className="app-sidebar-mobile-backdrop"><a href="#" className="stretched-link"></a></div>
                <div id="content" className="app-content">
                    {children}
                </div>
            </div>
        </AppSettings.Provider>
    )
}

