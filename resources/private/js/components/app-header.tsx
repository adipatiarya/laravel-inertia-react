import { useAppSettings } from '@@/config/app-settings';
import { SharedData } from '@@/types';
import { usePage } from '@inertiajs/react';
import { Link, router } from '@inertiajs/react';
import { logout } from '@@/routes';

export function AppHeader() {
    const { auth } = usePage<SharedData>().props;
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
                    <span className="navbar-logo"></span> <b>SCM</b> Admin
                </a>
            </div>
            <div className="navbar-nav">
                <div className="navbar-item navbar-user dropdown">
                    <a href="#/" className="navbar-link dropdown-toggle d-flex align-items-center" data-bs-toggle="dropdown">
                        <img src={auth.user.avatar} alt="" />
                        <span>
                            <span className="d-none d-md-inline">{auth.user.name}</span>
                            <b className="caret"></b>
                        </span>
                    </a>
                    <div className="dropdown-menu dropdown-menu-end me-1">
                        <a href="#" className="dropdown-item">
                            Edit Profile
                        </a>

                        <div className="dropdown-divider"></div>
                        <Link href={logout()} className="dropdown-item" onClick={() => router.flushAll()}>
                            Log Out
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
