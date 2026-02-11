import { AppHeader } from '@@/components/app-header';
import { AppShell } from '@@/components/app-shell';
import { AppSidebar } from '@@/components/app-sidebar';
import { AppProvider as Provider } from '@@/config/app-settings';
import type { AppLayoutProps, FlashEvent } from '@@/types';
import { router } from '@inertiajs/react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

router.on('flash', (event) => {
    const flash = event.detail.flash as FlashEvent;
    switch (true) {
        case !!flash.success:
            toast.success(flash.success, { position: 'top-right', autoClose: 3000, theme: 'light' });
            break;

        case !!flash.error:
            toast.error(flash.error, { position: 'top-right', autoClose: 3000, theme: 'light' });
            break;

        default:
            toast.warning(flash.warning, { position: 'top-right', autoClose: 3000, theme: 'light' });
    }
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
