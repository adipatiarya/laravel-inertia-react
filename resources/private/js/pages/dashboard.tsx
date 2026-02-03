import AppLayout from '@@/layouts/app-layout';
import { AppContent } from '@@/components/app-content';
import './dashboard.scss';

export default function Dashboard() {
    return (
        <AppLayout title="Dashboard">
            <AppContent>
                <div className="panel">
                    <div className="panel-body" style={{ height: '100vh' }}>
                        <p className="test-font">TEST FONT BRO</p>
                    </div>
                </div>
            </AppContent>
            <div className="theme-panel">Panel</div>
        </AppLayout>
    );
}
