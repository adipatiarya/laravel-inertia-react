import AppRoot from "@@/components/app-root";
import { AppLayoutProps } from "@@/types/ui";

export default function AppSidebarLayout ({breadcrumbs = [], children}: AppLayoutProps) {
    return (
        <AppRoot>
            {JSON.stringify(breadcrumbs)}
            {children}
        </AppRoot>
    )
}