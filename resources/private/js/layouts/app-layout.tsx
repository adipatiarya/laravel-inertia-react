import { AppHeader } from '@@/components/app-header';
import { AppShell } from '@@/components/app-shell';
import { AppSidebar } from '@@/components/app-sidebar';
import { AppProvider as Provider } from '@@/config/app-settings';
import type { AppLayoutProps } from '@@/types';

export default ({ children }: AppLayoutProps) => {
    return (
        <Provider>
            <AppShell variant="default">
                <AppHeader />
                <AppSidebar />
                {children}
            </AppShell>
        </Provider>
    );
};
