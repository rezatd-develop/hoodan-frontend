'use client'
import React from 'react';
import Table from '@mui/joy/Table';
import Checkbox from '@mui/joy/Checkbox';
import Link from '@mui/joy/Link';
import Box from '@mui/joy/Box';

const HoTable = ({
    columns,       // [{ id, label, width, sortable, render }]
    data,          // Array of row objects. Each row should have a unique "id" key.
    onSort,        // Callback: (columnId) => void; if the column is sortable
    selectable = false,  // Boolean: whether to show selection checkboxes
    selectedRows = [],   // Array of selected row ids
    onRowSelect,   // Callback: (updatedSelectedRows) => void
    actions,       // Optional: can be a React component or a function (row) => React node for an actions column
}) => {
    const handleSelectAll = (event) => {
        if (onRowSelect) {
            const allIds = event.target.checked ? data?.map(row => row.id) : [];
            onRowSelect(allIds);
        }
    };

    const handleRowSelect = (rowId, checked) => {
        if (onRowSelect) {
            const updated = checked
                ? [...selectedRows, rowId]
                : selectedRows.filter(id => id !== rowId);
            onRowSelect(updated);
        }
    };

    return (
        <Table
            stickyHeader
            hoverRow
            sx={{
                '--TableCell-headBackground': 'var(--joy-palette-background-level1)',
                '--Table-headerUnderlineThickness': '1px',
                '--TableRow-hoverBackground': 'var(--joy-palette-background-level1)',
                '--TableCell-paddingY': '4px',
                '--TableCell-paddingX': '8px',
            }}
        >
            <thead>
                <tr>
                    {selectable && (
                        <th style={{ width: 48, textAlign: 'center', padding: '12px 6px' }}>
                            <Checkbox
                                size="sm"
                                indeterminate={
                                    selectedRows.length > 0 && selectedRows.length !== data.length
                                }
                                checked={selectedRows.length === data.length}
                                onChange={handleSelectAll}
                            />
                        </th>
                    )}
                    {columns?.map((col) => (
                        <th key={col.id} style={{ width: col.width, padding: '12px 6px' }}>
                            {col.sortable ? (
                                <Link
                                    underline="none"
                                    color="primary"
                                    component="button"
                                    onClick={() => onSort && onSort(col.id)}
                                >
                                    {col.label}
                                </Link>
                            ) : (
                                col.label
                            )}
                        </th>
                    ))}
                    {actions && (
                        <th style={{ width: 140, padding: '12px 6px' }}>Actions</th>
                    )}
                </tr>
            </thead>
            <tbody>
                {data?.map((row) => (
                    <tr key={row.id}>
                        {selectable && (
                            <td style={{ textAlign: 'center', width: 48 }}>
                                <Checkbox
                                    size="sm"
                                    checked={selectedRows.includes(row.id)}
                                    onChange={(e) => handleRowSelect(row.id, e.target.checked)}
                                />
                            </td>
                        )}
                        {columns?.map((col) => (
                            <td key={col.id} style={{ width: col.width }}>
                                {col.render ? col.render(row[col.id], row) : row[col.id]}
                            </td>
                        ))}
                        {actions && (
                            <td>
                                {typeof actions === 'function' ? actions(row) : actions}
                            </td>
                        )}
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default HoTable;
