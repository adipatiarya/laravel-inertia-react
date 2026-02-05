import React from 'react';
import { Link, router } from '@inertiajs/react';
import AppLayout from '@@/layouts/app-layout';
import { AppContent } from '@@/components/app-content';
import { index } from '@@/routes/users';

type User = {
    id: number;
    name: string;
    email: string;
    role: string;
    created_at: string;
};

type PaginationLink = {
    url: string | null;
    label: string;
    active: boolean;
};

type UsersProps = {
    users: {
        data: User[];
        links: PaginationLink[];
    };
    filters: {
        search?: string;
        role?: string;
    };
};

const Index: React.FC<UsersProps> = ({ users, filters }) => {
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value) {
            router.get(
                index.get().url,
                {
                    search: e.target.value,
                    role: filters.role,
                },
                { preserveState: true, replace: true },
            );
        } else {
            router.get(index.get().url);
        }
    };

    const handleRole = (e: React.ChangeEvent<HTMLSelectElement>) => {
        router.get(
            index.get().url,
            {
                search: filters.search,
                role: e.target.value,
            },
            { preserveState: true, replace: true },
        );
    };

    return (
        <AppLayout title="Users">
            {/* <h1>Users</h1>

            <input type="text" placeholder="Search name/email" defaultValue={filters.search} onChange={handleSearch} />

            <select defaultValue={filters.role} onChange={handleRole}>
                <option value="">All Roles</option>
                <option value="admin">Admin</option>
                <option value="teacher">Teacher</option>
                <option value="student">Student</option>
            </select>

            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Created</th>
                    </tr>
                </thead>
                <tbody>
                    {users.data.map((user) => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.role}</td>
                            <td>{user.created_at}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="pagination">
                {users.links.map((link) => (
                    <Link
                        key={link.label}
                        href={link.url || '#'}
                        dangerouslySetInnerHTML={{ __html: link.label }}
                        className={link.active ? 'font-bold' : ''}
                    />
                ))}
            </div> */}
            <AppContent>
                <div className="panel">
                    <div className="panel-body">
                        <input type="text" placeholder="Search name/email" defaultValue={filters.search} onChange={handleSearch} />

                        <select defaultValue={filters.role} onChange={handleRole}>
                            <option value="">All Roles</option>
                            <option value="admin">Admin</option>
                            <option value="teacher">Teacher</option>
                            <option value="student">Student</option>
                        </select>
                        <table className="table-bordered table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Role</th>
                                    <th>Created</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.data.map((user) => (
                                    <tr key={user.id}>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.role}</td>
                                        <td>{user.created_at}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="pagination">
                            {users.links.map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.url || '#'}
                                    dangerouslySetInnerHTML={{ __html: link.label }}
                                    className={link.active ? 'font-bold' : ''}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </AppContent>
        </AppLayout>
    );
};

export default Index;
