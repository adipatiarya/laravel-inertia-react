import { useAppSettings } from '@@/config/app-settings';

export function AppHeader() {
    const { toggleSidebarMobileOpen } = useAppSettings();

    return (
        <div id="header" className="app-header">
            <div className="navbar-header">
                <button type="button" className="navbar-mobile-toggler" onClick={toggleSidebarMobileOpen}>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>

                <a href="/" className="navbar-brand">
                    <span className="navbar-logo"></span> <b>Color</b> Admin
                </a>
            </div>
        </div>
    );
}
