import { useState } from 'react';
import AppLayout from '@@/layouts/app-layout';
import { AppContent } from '@@/components/app-content';
import { capitalizeFirst, cn } from '@@/lib/util';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

import { index } from '@@/routes/roles';
import Breadcrumb from '@@/components/ui/breadcrumb';
import { useForm } from '@inertiajs/react';
import { TextInput } from '@@/components/ui/TextInput';
import { route } from 'ziggy-js';

type ModulePermission = {
    [key: string]: {
        [permission: string]: boolean;
    };
};
type RoleProps = {
    id?: string;
    name: string;
    permissions: ModulePermission;
};

const RoleForm: React.FC<RoleProps> = (props) => {
    const pageTitle = 'Role & Permission';
    const [active, setActive] = useState('');
    const { data, setData, post, put, processing, errors } = useForm(props);
    function submit(e: React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault();
        if (props.id) {
            put(route('roles.update', props.id));
        } else {
            post(route('roles.store'));
        }
    }

    return (
        <AppLayout title="Create New">
            <AppContent>
                <form onSubmit={submit}>
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
                                    {Object.keys(data.permissions).map((m, i) => (
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
                                    <div className="card-header">
                                        <div className="float-end">
                                            <div className="form-group d-flex justify-content-between align-items-center">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    checked={Object.values(data.permissions).flatMap(Object.values).every(Boolean)}
                                                    onChange={(e) => {
                                                        const checked = e.target.checked;
                                                        setData((prev) => ({
                                                            ...prev,
                                                            permissions: Object.keys(prev.permissions).reduce(
                                                                (acc, group) => {
                                                                    acc[group] = Object.keys(prev.permissions[group]).reduce(
                                                                        (inner, key) => {
                                                                            inner[key] = checked;
                                                                            return inner;
                                                                        },
                                                                        {} as Record<string, boolean>,
                                                                    );
                                                                    return acc;
                                                                },
                                                                {} as Record<string, Record<string, boolean>>,
                                                            ),
                                                        }));
                                                    }}
                                                />
                                                <label className="ms-2">Select All</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="form-group">
                                            <TextInput
                                                name="name"
                                                label="Role Name"
                                                placeholder="Choose role name"
                                                required
                                                value={data.name}
                                                onChange={(val) => setData('name', val)}
                                                error={errors.name}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {Object.keys(data.permissions).map((m, i) => (
                                <div id={m} className="mb-4 pb-3" key={i}>
                                    <h4 className="d-flex align-items-center mb-2">
                                        <i className="fa fa-th"></i> <span className="ms-1">Manage {capitalizeFirst(m)}</span>
                                    </h4>
                                    <p>
                                        Role Manage to {Object.keys(data.permissions[m]).join(', ')} in {m}
                                    </p>

                                    {/* Checkbox untuk select all di bagian ini */}
                                    <div className="form-check mb-2">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            checked={Object.values(data.permissions[m]).every(Boolean)} // true kalau semua child checked
                                            onChange={(e) => {
                                                const checked = e.target.checked;
                                                setData((prev) => ({
                                                    ...prev,
                                                    permissions: {
                                                        ...prev.permissions,
                                                        [m]: Object.keys(prev.permissions[m]).reduce(
                                                            (acc, key) => {
                                                                acc[key] = checked;
                                                                return acc;
                                                            },
                                                            {} as Record<string, boolean>,
                                                        ),
                                                    },
                                                }));
                                            }}
                                        />
                                        <label className="form-check-label">Check all {capitalizeFirst(m)}</label>
                                    </div>

                                    <div className={cn('card', errors.permissions && 'border-red border-2')}>
                                        <div className="list-group list-group-flush fw-bold">
                                            {Object.keys(data.permissions[m]).map((x, id) => (
                                                <div className="list-group-item d-flex align-items-center" key={id}>
                                                    <div className="flex-fill">
                                                        <div>{capitalizeFirst(x)}</div>
                                                        <div className="text-body text-opacity-60">Role can access {x}.</div>
                                                    </div>

                                                    <div className="form-check form-switch w-100px">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            disabled={
                                                                m === 'roles' &&
                                                                x === 'read' &&
                                                                (data.permissions.users.create || data.permissions.users.update)
                                                            }
                                                            checked={data.permissions[m][x]}
                                                            onChange={() =>
                                                                setData((prev) => {
                                                                    const updatedPermissions = {
                                                                        ...prev.permissions,
                                                                        [m]: {
                                                                            ...prev.permissions[m],
                                                                            [x]: !prev.permissions[m][x],
                                                                        },
                                                                    };

                                                                    if (
                                                                        m === 'users' &&
                                                                        (updatedPermissions.users.create || updatedPermissions.users.update)
                                                                    ) {
                                                                        updatedPermissions.roles = {
                                                                            ...updatedPermissions.roles,
                                                                            read: true,
                                                                        };
                                                                    }

                                                                    return {
                                                                        ...prev,
                                                                        permissions: updatedPermissions,
                                                                    };
                                                                })
                                                            }
                                                        />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    {errors.permissions && <span className="text-red">{errors.permissions}</span>}
                                </div>
                            ))}

                            <div className="mb-5 pb-3" id="submit">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="form-group">
                                            <button type="submit" className="btn btn-primary" disabled={processing}>
                                                SAVE ROLE
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </AppContent>
        </AppLayout>
    );
};

export default RoleForm;
