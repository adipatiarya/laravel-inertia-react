import React from 'react';
import AppLayout from '@@/layouts/app-layout';
import { AppContent } from '@@/components/app-content';

type Role = {
    id: number;
    name: string;
};

type RolesProps = {
    roles: Role[];
};

const Index: React.FC<RolesProps> = ({ roles }) => {
    return (
        <AppLayout title="Roles">
            <AppContent>
                <div className="panel">
                    <div className="panel-body">
                        <table className="table-bordered table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>NAME</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {roles.map((role) => (
                                    <tr key={role.id}>
                                        <td>{role.id}</td>
                                        <td>{role.name}</td>
                                        <td>SHOW</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </AppContent>
        </AppLayout>
    );
};

export default Index;
