import { useAppSettings } from '@@/config/app-settings';

export function AppHeader() {
    const { sidebarOpen } = useAppSettings();

    return (
        <div id="header" className="app-header">
            <p>INI HEADER {JSON.stringify(sidebarOpen)}</p>
        </div>
    );
}
