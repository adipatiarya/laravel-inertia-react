import React, { useEffect, useState } from 'react';
import AppLayout from '@@/layouts/app-layout';
import { AppContent } from '@@/components/app-content';
import { Panel, PanelBody } from '@@/components/ui/panel';
import Breadcrumb from '@@/components/ui/breadcrumb';
import { TextInput } from '@@/components/ui/TextInput';
import { RoleDTO, UserDTO } from '@@/types';
import { useForm } from '@inertiajs/react';
import Select from 'react-select';
import { route } from 'ziggy-js';
import { SingleValue } from 'react-select';

type roleValue = {
    value: string;
    label: string;
};

const IndexForm: React.FC<{ data: UserDTO; roles: Partial<RoleDTO>[] }> = (props) => {
    const { data, setData, post, put, processing, errors } = useForm(props.data);

    const options = props.roles.map(
        (role) =>
            ({
                value: role.id,
                label: role.name,
            }) as roleValue,
    );

    const defaultSelect = options[props.roles.findIndex((i) => Number(i.id) == Number(props.data.role_id))];

    function submit(e: React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault();
        post(route('users.store'));
    }

    return (
        <AppLayout title="Create or Update">
            <AppContent>
                <Breadcrumb data={[{ title: 'XX', href: '#' }, { title: 'Create New' }]} />
                <div className="clearfix"></div>
                <div className="row justify-content-center">
                    <div className="col-md-8 col-sm-12">
                        <Panel>
                            <PanelBody>
                                <fieldset>
                                    <form onSubmit={submit}>
                                        <legend className="mb-3">Add New User</legend>
                                        <div className="row mb-3">
                                            <label className="form-label col-form-label col-md-3">Full Name</label>
                                            <div className="col-md-9">
                                                <TextInput
                                                    name="username"
                                                    onChange={(value) => setData('name', value)}
                                                    required={true}
                                                    value={data.name}
                                                    type="text"
                                                />
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <label className="form-label col-form-label col-md-3">Email address</label>
                                            <div className="col-md-9">
                                                <TextInput
                                                    name="email"
                                                    onChange={(value) => setData('email', value)}
                                                    required={true}
                                                    value={data.email}
                                                    type="email"
                                                />
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <label className="form-label col-form-label col-md-3">Password</label>
                                            <div className="col-md-9">
                                                <TextInput
                                                    name="password"
                                                    onChange={(value) => setData('password', value)}
                                                    value={data.password ?? ''}
                                                    type="password"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <label className="form-label col-form-label col-md-3">Role</label>
                                            <div className="col-md-9">
                                                <Select
                                                    options={options}
                                                    placeholder="Select Role..."
                                                    required
                                                    onChange={(selected: SingleValue<{ value: string }>) => setData('role_id', selected?.value ?? '')}
                                                    styles={{
                                                        control: (base) => ({
                                                            ...base,
                                                            borderColor: '#ced4da',
                                                            borderRadius: '0.375rem',
                                                            minHeight: 'calc(2.25rem + 2px)',
                                                            boxShadow: 'none',
                                                            '&:hover': { borderColor: '#86b7fe' }, // Bootstrap hover focus
                                                        }),
                                                        placeholder: (base) => ({
                                                            ...base,
                                                            color: '#6c757d',
                                                        }),
                                                    }}
                                                    defaultValue={defaultSelect}
                                                />
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-7 offset-md-3">
                                                <button type="submit" className="btn btn-primary w-100px me-5px" disabled={processing}>
                                                    Submit
                                                </button>
                                                <a type="button" className="btn btn-default w-100px" href={route('users.create')}>
                                                    Cancel
                                                </a>
                                            </div>
                                        </div>
                                    </form>
                                </fieldset>
                            </PanelBody>
                        </Panel>
                    </div>
                </div>
            </AppContent>
        </AppLayout>
    );
};

export default IndexForm;
