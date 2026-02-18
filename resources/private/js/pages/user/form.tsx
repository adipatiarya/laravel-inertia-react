import React from 'react';
import AppLayout from '@@/layouts/app-layout';
import { AppContent } from '@@/components/app-content';
import { Panel, PanelBody } from '@@/components/ui/panel';
import Breadcrumb from '@@/components/ui/breadcrumb';
import { TextInput } from '@@/components/ui/TextInput';
import { UserDTO } from '@@/types';
import { useForm } from '@inertiajs/react';

const IndexForm: React.FC<UserDTO> = (props) => {
    const { data, setData, post, put, processing, errors } = useForm(props);

    return (
        <AppLayout title="Create or Update">
            <AppContent>
                <Breadcrumb data={[{ title: 'XX', href: '#' }, { title: 'Create New' }]} />
                <h1 className="page-header">Create New User</h1>
                <div className="row justify-content-center">
                    <div className="col-md-8 col-sm-12">
                        <Panel>
                            <PanelBody>
                                <div className="form-group row">
                                    <label htmlFor="username" className="col-sm-3 col-form-label">
                                        Full Name <span className="text-red-600">*</span>
                                    </label>
                                    <div className="col-sm-9">
                                        <TextInput
                                            name="username"
                                            onChange={(value) => setData('name', value)}
                                            required={true}
                                            value={data.name}
                                            type="text"
                                        />
                                    </div>
                                </div>
                                <div className="form-group row mt-15px">
                                    <label htmlFor="email" className="col-sm-3 col-form-label">
                                        Email <span className="text-red-600">*</span>
                                    </label>
                                    <div className="col-sm-9">
                                        <TextInput
                                            name="email"
                                            onChange={(value) => setData('email', value)}
                                            required={true}
                                            value={data.email}
                                            type="email"
                                        />
                                    </div>
                                </div>
                            </PanelBody>
                        </Panel>
                    </div>
                </div>
            </AppContent>
        </AppLayout>
    );
};

export default IndexForm;
