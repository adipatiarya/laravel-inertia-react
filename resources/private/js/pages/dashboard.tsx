import AppLayout from '@@/layouts/app-layout';
import { AppContent } from '@@/components/app-content';
export default function Dashboard() {
    return (
        <AppLayout title="Dashboard">
            <AppContent>
                <div>
                    <h1>Content </h1>
                </div>
            </AppContent>
            <div className="theme-panel">Panel</div>
        </AppLayout>
    );
}
