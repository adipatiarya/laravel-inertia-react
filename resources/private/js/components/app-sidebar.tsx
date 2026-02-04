import { useAppSettings } from '@@/config/app-settings';
import PerfectScrollbar from 'react-perfect-scrollbar';
import menus, { MenuItem } from '@@/config/app-menu';
import { useEffect } from 'react';
import initSidebar from '@@/hooks/init-sidebar';

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

    return (
        <div className={'menu-item' + (match ? ' active' : '') + (menu.children ? ' has-sub' : '')}>
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
    const { toggleSidebarOpen } = useAppSettings();

    useEffect(() => {
        initSidebar();
    }, []);

    return (
        <>
            <div id="sidebar" className="app-sidebar" data-bs-theme="dark">
                <PerfectScrollbar className="app-sidebar-content">
                    <div className="menu">
                        {menus.map((menu, i) => (
                            <NavItem menu={menu} key={i}></NavItem>
                        ))}
                    </div>
                </PerfectScrollbar>
            </div>
            <div className="app-sidebar-bg" data-bs-theme="dark"></div>
            <div className="app-sidebar-mobile-backdrop"></div>
        </>
    );
}
