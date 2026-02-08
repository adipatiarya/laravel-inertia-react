import AppLayout from '@@/layouts/app-layout';
import { AppContent } from '@@/components/app-content';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

import { index } from '@@/routes/roles';
import Breadcrumb from '@@/components/ui/breadcrumb';
import { PaginatedResponse } from '@@/types';
import { useEffect, useState } from 'react';
import { ColumnDef, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { router } from '@inertiajs/react';
import { route } from 'ziggy-js';
import { cn } from '@@/lib/util';

type Permission = {
    id: number;
    name: string;
};

type Role = {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
    permissions: Permission[];
};

const Index = ({ data }: { data: PaginatedResponse<Role> }) => {
    const [search, setSearch] = useState('');
    const [debouncedSearch, setDebouncedSearch] = useState(search);
    // debounce effect
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedSearch(search);
        }, 500); // delay 500ms

        return () => {
            clearTimeout(handler);
        };
    }, [search]);

    const [pagination, setPagination] = useState({
        pageIndex: data.current_page - 1, // TanStack 0-based
        pageSize: data.per_page,
    });
    const [sorting, setSorting] = useState<{ id: string; desc: boolean }[]>([{ id: 'created_at', desc: true }]);

    const columns: ColumnDef<Role>[] = [
        { accessorKey: 'id', header: '#', enableSorting: false },
        { accessorKey: 'name', header: 'Role Name', enableSorting: true },
        {
            accessorKey: 'permissions',
            header: 'Permission',
            enableSorting: false,
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
            enableSorting: true,
            cell: (info) => dayjs(info.getValue() as Role['created_at']).format('DD-MMM-YYYY HH:mm'),
        },
        { accessorKey: 'created_by', header: 'Created By', cell: () => 'John Doe', enableSorting: false },
        {
            accessorKey: 'updated_at',
            header: 'Last Updated',
            enableSorting: true,
            cell: (info) => dayjs(info.getValue() as Role['updated_at']).fromNow(),
        },
        { accessorKey: 'created_by', header: 'Last Updated By', cell: () => 'Kusnuadi.spd', enableSorting: false },
        {
            id: 'actions', // gunakan id, bukan accessorKey kosong
            header: 'Actions',
            enableSorting: false,

            cell: ({ row }) => {
                const role = row.original; // akses data row
                return (
                    <div className="d-flex justify-content-center gap-2">
                        <a className="btn btn-sm btn-warning" href={route('roles.edit', role.id)}>
                            <i className="fa fa-edit"></i> Edit
                        </a>
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
        data: data.data,
        columns,
        pageCount: data.last_page,
        state: { pagination, sorting },
        onSortingChange: setSorting,
        onPaginationChange: setPagination,
        getCoreRowModel: getCoreRowModel(),
        manualPagination: true,
        manualSorting: true,
        manualFiltering: true,
    });
    // trigger Inertia fetch saat pagination berubah
    useEffect(() => {
        router.get(
            route('roles.index'),
            {
                page: pagination.pageIndex + 1,
                perPage: pagination.pageSize,
                search: debouncedSearch,
                sortBy: sorting[0]?.id,
                sortDir: sorting[0]?.desc ? 'desc' : 'asc',
            },
            { preserveState: true, replace: true },
        );
    }, [pagination, debouncedSearch, sorting]);

    const pageTitle = 'Role & Permission';
    return (
        <AppLayout title={pageTitle}>
            <AppContent>
                <Breadcrumb data={[{ title: pageTitle, href: index.get().url }, { title: 'All Role' }]} />
                <h1 className="page-header">{pageTitle}</h1>
                <div className="clearfix"></div>
                <div className={cn('panel panel-inverse')}>
                    <div className="panel-heading">
                        <h4 className="panel-title">Data Role</h4>
                    </div>
                    <div className="panel-body">
                        <div className="table-responsive">
                            <div className="d-flex justify-content-between align-items-center mb-2">
                                {/* PerPage selector mirip DataTables */}
                                <div className="dataTables_length">
                                    <label>
                                        Show{' '}
                                        <select
                                            className="form-select form-select-sm d-inline-block w-auto"
                                            value={pagination.pageSize}
                                            onChange={(e) => table.setPageSize(Number(e.target.value))}
                                        >
                                            {[10, 25, 50, 100].map((size) => (
                                                <option key={size} value={size}>
                                                    {size}
                                                </option>
                                            ))}
                                        </select>{' '}
                                        entries
                                    </label>
                                </div>

                                {/* Search box mirip DataTables */}
                                <div className="form-group">
                                    <input
                                        type="search"
                                        placeholder="Search..."
                                        className="form-control form-control-sm"
                                        value={search}
                                        onChange={(e) => setSearch(e.target.value)}
                                    />
                                </div>
                            </div>

                            <table className="table-bordered table">
                                <thead>
                                    {table.getHeaderGroups().map((headerGroup) => (
                                        <tr key={headerGroup.id}>
                                            {headerGroup.headers.map((header, idx) => (
                                                <th
                                                    key={idx}
                                                    onClick={header.column.getToggleSortingHandler()}
                                                    className={cn(
                                                        header.column.getCanSort() && 'cursor-pointer',
                                                        header.id == 'actions' && 'text-center',
                                                    )}
                                                >
                                                    {flexRender(header.column.columnDef.header, header.getContext())}
                                                    {header.column.getCanSort() && (
                                                        <>
                                                            {header.column.getIsSorted() === 'asc' && <i className="fa fa-sort-up ms-1"></i>}
                                                            {header.column.getIsSorted() === 'desc' && <i className="fa fa-sort-down ms-1"></i>}
                                                            {!header.column.getIsSorted() && <i className="fa fa-sort text-muted ms-1"></i>}
                                                        </>
                                                    )}
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
                    </div>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-3">
                    {/* Info ala DataTables */}
                    <div className="dataTables_info">
                        Showing {pagination.pageIndex * pagination.pageSize + 1} to{' '}
                        {Math.min((pagination.pageIndex + 1) * pagination.pageSize, data.total)} of {data.total} entries
                    </div>

                    {/* Pagination Controls ala DataTables */}
                    <div className="dataTables_paginate paging_simple_numbers">
                        <ul className="pagination pagination-sm mb-0">
                            <li className={`page-item ${!table.getCanPreviousPage() ? 'disabled' : ''}`}>
                                <button className="page-link" onClick={() => table.setPageIndex(0)}>
                                    First
                                </button>
                            </li>
                            <li className={`page-item ${!table.getCanPreviousPage() ? 'disabled' : ''}`}>
                                <button className="page-link" onClick={() => table.previousPage()}>
                                    Previous
                                </button>
                            </li>

                            {table.getPageOptions().map((page, idx) => (
                                <li key={idx} className={`page-item ${page === pagination.pageIndex ? 'active' : ''}`}>
                                    <button className="page-link" onClick={() => table.setPageIndex(page)}>
                                        {page + 1}
                                    </button>
                                </li>
                            ))}

                            <li className={`page-item ${!table.getCanNextPage() ? 'disabled' : ''}`}>
                                <button className="page-link" onClick={() => table.nextPage()}>
                                    Next
                                </button>
                            </li>
                            <li className={`page-item ${!table.getCanNextPage() ? 'disabled' : ''}`}>
                                <button className="page-link" onClick={() => table.setPageIndex(table.getPageCount() - 1)}>
                                    Last
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </AppContent>
        </AppLayout>
    );
};

export default Index;
