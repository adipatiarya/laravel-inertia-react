import { useState } from 'react';
import AppLayout from '@@/layouts/app-layout';
import { AppContent } from '@@/components/app-content';
import { cn } from '@@/lib/util';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

import { useReactTable, getCoreRowModel, flexRender, ColumnDef } from '@tanstack/react-table';

import { index, create } from '@@/routes/roles';
import Breadcrumb from '@@/components/ui/breadcrumb';
import { usePage } from '@inertiajs/react';

type Role = {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
};

const Index = ({ data }: { data: Role[] }) => {
    const [reload, setReload] = useState(false);
    const { props } = usePage();
    const pageTitle = 'Role & Permission';
    const success = (props.flash as any)?.success;

    const columns: ColumnDef<Role>[] = [
        { accessorKey: 'id', header: '#' },
        { accessorKey: 'name', header: 'Role Name' },
        {
            accessorKey: 'permissions',
            header: 'Permission',
            cell: (info) => {
                return (
                    <button className="btn btn-xs btn-success" onClick={() => null}>
                        <i className="fa fa-eye"></i> Show
                    </button>
                );
            },
        },
        {
            accessorKey: 'created_at',
            header: 'Created At',
            cell: (info) => dayjs(info.getValue() as Role['created_at']).format('DD-MMM-YYYY HH:mm'),
        },
        { accessorKey: 'created_by', header: 'Created By', cell: () => 'John Doe' },
        {
            accessorKey: 'updated_at',
            header: 'Last Updated',
            cell: (info) => dayjs(info.getValue() as Role['updated_at']).fromNow(),
        },
        { accessorKey: 'created_by', header: 'Last Updated By', cell: () => 'Kusnuadi.spd' },
        {
            id: 'actions', // gunakan id, bukan accessorKey kosong
            header: 'Actions',

            cell: ({ row }) => {
                const role = row.original; // akses data row
                return (
                    <div className="d-flex justify-content-center gap-2">
                        <button className="btn btn-sm btn-warning" onClick={() => console.log('Edit', role.id)}>
                            <i className="fa fa-edit"></i> Edit
                        </button>
                        <button className="btn btn-sm btn-danger" onClick={() => console.log('Delete', role.id)}>
                            {' '}
                            <i className="fa fa-trash"></i> Delete
                        </button>
                    </div>
                );
            },
        },
    ];

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    return (
        <AppLayout title={pageTitle}>
            <AppContent>
                <Breadcrumb data={[{ title: pageTitle, href: index.get().url }, { title: 'All Role' }]} />
                <h1 className="page-header">{pageTitle}</h1>
                <div className="clearfix"></div>
                <div className={cn('panel panel-inverse', reload && 'panel-loading')}>
                    <div className="panel-heading">
                        <h4 className="panel-title">Data Role {JSON.stringify(props.errors)}</h4>

                        <div className="panel-heading-btn">
                            <a className="btn btn-xs btn-icon btn-circle btn-danger me-1" href={create.get().url}>
                                <i className="fa fa-plus"></i>
                            </a>
                            <button className="btn btn-xs btn-icon btn-circle btn-success" onClick={() => null}>
                                <i className="fa fa-redo"></i>
                            </button>
                        </div>
                    </div>
                    <div className="panel-body">
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    {table.getHeaderGroups().map((headerGroup) => (
                                        <tr key={headerGroup.id}>
                                            {headerGroup.headers.map((header, idx) => (
                                                <th key={idx} className={cn(header.id == 'actions' && 'text-center')}>
                                                    {flexRender(header.column.columnDef.header, header.getContext())}
                                                </th>
                                            ))}
                                        </tr>
                                    ))}
                                </thead>

                                <tbody>
                                    {table.getRowModel().rows.map((row, idx) => (
                                        <tr key={idx}>
                                            {row.getVisibleCells().map((cell, idx) => (
                                                <td key={idx}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
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
