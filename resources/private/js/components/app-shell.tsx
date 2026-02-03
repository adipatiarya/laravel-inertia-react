import { useAppSettings } from '@@/config/app-settings';
import { cn } from '@@/lib/util';
import { ReactNode } from 'react';

type Props = {
    children: ReactNode;
    variant?: 'default';
};
export function AppShell({ children, variant = 'default' }: Props) {
    const { sidebarOpen, hasScroll } = useAppSettings();

    if (variant == 'default') {
        return (
            <div id="app" className={cn('app app-header-fixed app-sidebar-fixed', hasScroll && 'has-scroll', !sidebarOpen && 'app-sidebar-minified')}>
                {children}
            </div>
        );
    }
}
