import React from 'react';
import AppLayout from '@@/layouts/app-layout';
import { AppContent } from '@@/components/app-content';
import { Panel, PanelBody, PanelHeader } from '@@/components/ui/panel';

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
                <Panel>
                    <PanelHeader>Role</PanelHeader>
                    <PanelBody>
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Permission</th>
                                        <th>Created By</th>
                                        <th>Created At</th>
                                        <th>Last Updated</th>
                                        <th>Last Updated By</th>
                                        <th className="text-center">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {roles.map((role) => (
                                        <tr key={role.id}>
                                            <td>{role.id}</td>
                                            <td>{role.name}</td>
                                            <td>
                                                <button className="btn btn-info btn-xs">
                                                    <i className="fa fa-eye" />
                                                    <span className="text-white-300 ms-1">show</span>
                                                </button>
                                            </td>
                                            <td>System</td>
                                            <td>12-Jan-2022 14:50</td>
                                            <td>12-Jan-2022 14:50</td>
                                            <td>Juned</td>
                                            <td>
                                                <div className="d-flex justify-content-center">
                                                    <button className="btn btn-warning btn-xs">
                                                        <i className="fa fa-edit" />
                                                        <span className="text-white-300 ms-1">edit</span>
                                                    </button>
                                                    <button className="btn btn-danger btn-xs ms-1">
                                                        <i className="fa fa-trash" />
                                                        <span className="text-white-300 ms-1">delete</span>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </PanelBody>
                </Panel>
            </AppContent>
        </AppLayout>
    );
};

export default Index;
