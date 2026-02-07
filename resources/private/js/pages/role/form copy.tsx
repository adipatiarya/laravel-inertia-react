import { useEffect, useState } from 'react';
import AppLayout from '@@/layouts/app-layout';
import { AppContent } from '@@/components/app-content';
import { capitalizeFirst, cn } from '@@/lib/util';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

import { create, index } from '@@/routes/roles';
import Breadcrumb from '@@/components/ui/breadcrumb';

type ModuleProps = {
    [key: string]: {
        [permission: string]: boolean;
    };
};

const Index: React.FC<ModuleProps> = () => {
    const pageTitle = 'Role & Permission';
    const [active, setActive] = useState('');
    const [loading, setLoading] = useState(false);

    const [modules, setModules] = useState<ModuleProps>({});

    async function fetchData() {
        try {
            setLoading(true);
            const res = await fetch(create.get().url, {
                method: 'GET',
                headers: {
                    'X-Requested-With': 'XMLHttpRequest',
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
            });
            setLoading(false);

            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            const json = await res.json();
            setModules(json.modules);
        } catch (err) {
            console.error('Fetch error:', err);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    if (loading) {
        return (
            <div id="loader" className="app-loader">
                <span className="spinner"></span>
            </div>
        );
    }

    return (
        <AppLayout title="Create New">
            <AppContent>
                <Breadcrumb data={[{ title: pageTitle, href: index.get().url }, { title: 'Create New' }]} />
                <h1 className="page-header">Create New Role</h1>
                <hr className="mb-4"></hr>
                <div className="row">
                    <div className="col-xl-8"></div>
                </div>

                <div className="row">
                    <div style={{ width: '230px' }}>
                        <nav className="navbar navbar-sticky d-none d-xl-block my-n4 h-100 py-4 text-end">
                            <nav className="nav" id="bsSpyTarget">
                                <a
                                    className={cn('nav-link', 'create' == active && 'active')}
                                    href={'#' + 'create'}
                                    data-toggle="scroll-to"
                                    onClick={() => {
                                        setActive('create');
                                        window.scrollTo({
                                            top: 0,
                                            behavior: 'smooth', // bisa "auto" kalau tidak mau animasi
                                        });
                                    }}
                                >
                                    <h6>New Role</h6>
                                </a>
                                <hr />
                                {Object.keys(modules).map((m, i) => (
                                    <a
                                        className={cn('nav-link', m == active && 'active')}
                                        href={'#' + m}
                                        data-toggle="scroll-to"
                                        key={i}
                                        onClick={() => setActive(m)}
                                    >
                                        Manage {capitalizeFirst(m)}
                                    </a>
                                ))}

                                <hr />
                                <a
                                    className={cn('nav-link', 'submit' == active && 'active')}
                                    href={'#' + 'submit'}
                                    data-toggle="scroll-to"
                                    onClick={() => {
                                        setActive('submit');
                                    }}
                                >
                                    <h6>Submit</h6>
                                </a>
                            </nav>
                        </nav>
                    </div>

                    <div className="col-xl-8" id="bsSpyContent">
                        <div className="mb-5 pb-3">
                            <div className="card">
                                <div className="card-body">
                                    <div className="form-group">
                                        <label className="form-label">
                                            Role Name <span className="text-red">*</span>
                                        </label>
                                        <input className="form-control form-control-lg" placeholder="Choose role name" required />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {Object.keys(modules).map((m, i) => (
                            <div id={m} className="mb-4 pb-3" key={i}>
                                <h4 className="d-flex align-items-center mb-2">
                                    <i className="fa fa-th"></i> <span className="ms-1">Manage {capitalizeFirst(m)}</span>
                                </h4>
                                <p>
                                    Role Manage to {Object.keys(modules[m]).join(', ')} in {m}
                                </p>
                                <div className="card">
                                    <div className="list-group list-group-flush fw-bold">
                                        {Object.keys(modules[m]).map((x, id) => (
                                            <div className="list-group-item d-flex align-items-center" key={id}>
                                                <div className="flex-fill">
                                                    <div>{capitalizeFirst(x)}</div>
                                                    <div className="text-body text-opacity-60">Role can access {x}.</div>
                                                </div>

                                                <div className="form-check form-switch w-100px">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        disabled={m === 'roles' && x === 'read' && (modules.users.create || modules.users.update)}
                                                        checked={modules[m][x]} // nilai boolean dari state
                                                        onChange={() =>
                                                            setModules((prev) => {
                                                                const updated = {
                                                                    ...prev,
                                                                    [m]: {
                                                                        ...prev[m],
                                                                        [x]: !prev[m][x], // toggle permission
                                                                    },
                                                                };

                                                                // aturan otomatis: jika users.create atau users.update true → roles.read true
                                                                if (m === 'users' && (updated.users.create || updated.users.update)) {
                                                                    updated.roles = {
                                                                        ...updated.roles,
                                                                        read: true,
                                                                    };
                                                                }

                                                                return updated;
                                                            })
                                                        }
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className="mb-5 pb-3" id="submit">
                            <div className="card">
                                <div className="card-body">
                                    {JSON.stringify(modules)}
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-primary">
                                            SUBMIT
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AppContent>
        </AppLayout>
    );
};

export default Index;
