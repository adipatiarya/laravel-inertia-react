import App from "@@/components/app";
import { AppLayoutProps } from "@@/types/ui";

export default function AppSidebarLayout ({breadcrumbs = [], children}: AppLayoutProps) {
    return (
        <App>
            {JSON.stringify(breadcrumbs)}
            {children}
        </App>
    )
}