import { useAppSettings } from '@@/config/app-settings';
import PerfectScrollbar from 'react-perfect-scrollbar';
import menus, { MenuItem } from '@@/config/app-menu';
import { useEffect } from 'react';
import initSidebar from '@@/hooks/init-sidebar';
import { cn } from '@@/lib/util';
import { usePage } from '@inertiajs/react';
import { SharedData } from '@@/types';

function NavItem({ menu, ...props }: { menu: MenuItem }) {
    let match = location.pathname.split('/').filter(Boolean).pop() == menu.path;

    let icon = menu.icon && (
        <div className="menu-icon">
            <i className={menu.icon}></i>
        </div>
    );
    let img = menu.img && (
        <div className="menu-icon-img">
            <img src={menu.img} alt="" />
        </div>
    );
    let caret = menu.children && !menu.badge && <div className="menu-caret"></div>;
    let label = menu.label && <span className="menu-label ms-5px">{menu.label}</span>;
    let badge = menu.badge && <div className="menu-badge">{menu.badge}</div>;
    let highlight = menu.highlight && <i className="fa fa-paper-plane text-theme"></i>;
    let title = menu.title && (
        <div className="menu-text">
            {menu.title} {label} {highlight}
        </div>
    );
    if (menu.is_header) {
        return <div className="menu-header">{menu.title}</div>;
    }
    return (
        <div className={cn('menu-item', match && 'active', menu.children && 'has-sub')}>
            <a className="menu-link" href={menu.path} {...props}>
                {img} {icon} {title}
                {caret} {badge}
            </a>
            {menu.children && (
                <div className="menu-submenu">
                    {menu.children.map((submenu, i) => (
                        <NavItem key={i} menu={submenu} />
                    ))}
                </div>
            )}
        </div>
    );
}

export function AppSidebar() {
    const { toggleSidebarOpen, toggleSidebarMobileOpen } = useAppSettings();
    const { auth } = usePage<SharedData>().props;

    useEffect(() => {
        initSidebar();
    }, []);

    return (
        <>
            <div id="sidebar" className="app-sidebar" data-bs-theme="dark">
                <PerfectScrollbar className="app-sidebar-content">
                    <div className="menu">
                        <div className="menu-profile">
                            <a href="#" className="menu-profile-link">
                                <div className="menu-profile-cover with-shadow"></div>
                                <div className="menu-profile-image">
                                    <img src={auth.user.avatar} alt="" />
                                </div>
                                <div className="menu-profile-info">
                                    <div className="d-flex align-items-center">
                                        <div className="d-flex">{auth.user.name}</div>
                                    </div>
                                    <small>Frontend developer</small>
                                </div>
                            </a>
                        </div>
                        <div className="menu-header">MENU</div>
                        {menus.map((menu, i) => (
                            <NavItem menu={menu} key={i}></NavItem>
                        ))}
                        <div className="menu-item d-flex">
                            <a
                                href="#"
                                className="app-sidebar-minify-btn d-flex align-items-center text-decoration-none ms-auto"
                                onClick={(e) => {
                                    e.preventDefault();
                                    toggleSidebarOpen();
                                }}
                            >
                                <i className="fa fa-angle-double-left"></i>
                            </a>
                        </div>
                    </div>
                </PerfectScrollbar>
            </div>
            <div className="app-sidebar-bg" data-bs-theme="dark"></div>
            <div className="app-sidebar-mobile-backdrop">
                <a
                    href="#"
                    onClick={(e) => {
                        e.preventDefault();
                        toggleSidebarMobileOpen();
                    }}
                    className="stretched-link"
                ></a>
            </div>
        </>
    );
}
