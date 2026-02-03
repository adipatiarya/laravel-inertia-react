import AppLayout from '@@/layouts/app-layout';
import { AppContent } from '@@/components/app-content';
export default function Dashboard() {
    return (
        <AppLayout title="Dashboard">
            <AppContent>
                <div className="panel">
                    <div className="panel-body" style={{ height: '10vh' }}></div>
                </div>
            </AppContent>
            <div className="theme-panel">Panel</div>
        </AppLayout>
    );
}
