import { AppHeader } from '@@/components/app-header';
import { AppShell } from '@@/components/app-shell';
import { AppSidebar } from '@@/components/app-sidebar';
import { AppProvider as Provider } from '@@/config/app-settings';
import type { AppLayoutProps } from '@@/types';
import { router } from '@inertiajs/react';
import { ToastContainer, toast } from 'react-toastify';

router.on('flash', (event) => {
    const strs: any = event.detail.flash.success ? event.detail.flash.success : '';
    toast(strs);
});

export default ({ children }: AppLayoutProps) => {
    return (
        <Provider>
            <AppShell variant="default">
                <ToastContainer />
                <AppHeader />
                <AppSidebar />
                {children}
            </AppShell>
        </Provider>
    );
};
