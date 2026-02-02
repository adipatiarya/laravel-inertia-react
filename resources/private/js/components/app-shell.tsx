import { useAppSettings } from '@@/config/app-settings';
import { cn } from '@@/lib/util';
import { ReactNode, useCallback, useEffect } from 'react';

type Props = {
    children: ReactNode;
    variant?: 'default';
};
export function AppShell({ children, variant = 'default' }: Props) {
    const { sidebarOpen } = useAppSettings();

    // gunakan useCallback agar referensi fungsi stabil
    const handleScroll = useCallback(() => {
        console.log('scroll position:', window.scrollY);
        // di sini bisa update state atau jalankan logika lain
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        // cleanup saat komponen unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);

    if (variant == 'default') {
        return (
            <div id="app" className={cn('app app-header-fixed app-sidebar-fixed', sidebarOpen ? '' : 'app-sidebar-minified')}>
                {children}
            </div>
        );
    }
}
