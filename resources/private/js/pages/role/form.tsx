import { useEffect, useState } from 'react';
import AppLayout from '@@/layouts/app-layout';
import { AppContent } from '@@/components/app-content';
import { cn } from '@@/lib/util';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

import { index } from '@@/routes/roles';
import Breadcrumb from '@@/components/ui/breadcrumb';

type Role = {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
};

const Index = () => {
    const [data, setData] = useState<Role[]>([]);
    const [reload, setReload] = useState(false);
    const pageTitle = 'Role & Permission';

    async function fetchData() {
        setReload(true);
        try {
            const res = await fetch(index.get().url, {
                method: 'GET',
                headers: {
                    'X-Requested-With': 'XMLHttpRequest',
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
            });
            setReload(false);

            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }

            const json = await res.json();
            setData(json.data);
        } catch (err) {
            console.error('Fetch error:', err);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <AppLayout title="Create New">
            <AppContent>
                <Breadcrumb data={[{ title: pageTitle, href: index.get().url }, { title: 'Create New' }]} />
                <h1 className="page-header">Create New</h1>
                <div className="clearfix"></div>
                <div className={cn('panel panel-inverse', reload && 'panel-loading')}>
                    <div className="panel-body">
                        {reload && (
                            <div className="panel-loader">
                                <span className="spinner spinner-sm"></span>
                            </div>
                        )}
                    </div>
                </div>
            </AppContent>
        </AppLayout>
    );
};

export default Index;
