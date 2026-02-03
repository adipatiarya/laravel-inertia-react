import { useAppSettings } from '@@/config/app-settings';
import PerfectScrollbar from 'react-perfect-scrollbar';

export function AppSidebar() {
    const { toggleSidebarOpen } = useAppSettings();

    return (
        <>
            <div id="sidebar" className="app-sidebar" data-bs-theme="dark">
                <PerfectScrollbar className="app-sidebar-content">
                    <div className="menu">
                        {[...Array(100).keys()].map((i) => (
                            <div className="menu-item" key={i}>
                                <a href="#" className="menu-link">
                                    <div className="menu-icon">
                                        <i className="fa fa-calendar"></i>
                                    </div>
                                    <div className="menu-text">Calendar</div>
                                </a>
                            </div>
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
                                <i className="fa fa-angle-double-left"></i> MANIFY
                            </a>
                        </div>
                    </div>
                </PerfectScrollbar>
            </div>
            <div className="app-sidebar-bg" data-bs-theme="dark"></div>
            <div className="app-sidebar-mobile-backdrop"></div>
        </>
    );
}
