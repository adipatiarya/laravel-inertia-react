import { Head } from '@inertiajs/react';
import AppLayout from '@@/layouts/app-layout';
import { admin_dashboard as dashboard } from '@@/routes';
import type { BreadcrumbItem } from '@@/types';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard().url,
    },
];

export default function Dashboard() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <h1>DASHBOARD</h1>
        </AppLayout>
    );
}