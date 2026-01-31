import { AppSettings } from "@@/config/app-setting";
import { useState } from "react";
import { ThemeType } from "@@/types";
import { AppLayoutProps } from "@@/types/ui";
import AppSidebarLayout from "@@/layouts/app/app-sidebar-layout";

export default function AppLayout({ children, breadcrumbs, ...props } : AppLayoutProps) {

    const [appTheme, setAppTheme] = useState<ThemeType>('dark');

    return (
        <AppSettings.Provider value={{ appTheme, setAppTheme }}>
            <AppSidebarLayout {...props} >
                {children}
            </AppSidebarLayout>

        </AppSettings.Provider>
    )
}

