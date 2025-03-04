'use client'

import Box from '@mui/joy/Box';
import Breadcrumbs from '@mui/joy/Breadcrumbs';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import { useState } from 'react';
import HoTable from '../../../components/table/HoTable';

export default function CartPage() {
    const [sortBy, setSortBy] = useState(null);
    const [selected, setSelected] = useState([]);

    const columns = [
        { id: 'productId', label: 'Product Id', width: 70, sortable: true },
        { id: 'productName', label: 'Product Name', width: 140 },
        { id: 'quantity', label: 'Quantity', width: 70 },
        { id: 'pricePerEach', label: 'Price Per Each', width: 70 },
        { id: 'totalPrice', label: 'Total Price', width: 70 },
    ];

    const data = [
        {
            id: 'INV-1234',
            date: 'Feb 3, 2023',
            status: 'Refunded',
            customer: 'Refunded',
        },
    ];


    return (
        <Box
            component="main"
            className="MainContent"
            sx={{
                px: { xs: 2, md: 6 },
                pt: {
                    xs: 'calc(12px + var(--Header-height))',
                    sm: 'calc(12px + var(--Header-height))',
                    md: 3,
                },
                pb: { xs: 2, sm: 2, md: 3 },
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                minWidth: 0,
                height: '100dvh',
                gap: 1,
            }}
        >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Breadcrumbs
                    size="sm"
                    aria-label="breadcrumbs"
                    separator={<ChevronRightRoundedIcon fontSize="sm" />}
                    sx={{ pl: 0 }}
                >
                    <Link
                        underline="none"
                        color="neutral"
                        href="#some-link"
                        aria-label="Home"
                    >
                        <HomeRoundedIcon />
                    </Link>
                    <Link
                        underline="hover"
                        color="neutral"
                        href="#some-link"
                        sx={{ fontSize: 12, fontWeight: 500 }}
                    >
                        Dashboard
                    </Link>
                    <Typography color="primary" sx={{ fontWeight: 500, fontSize: 12 }}>
                        Orders
                    </Typography>
                </Breadcrumbs>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    mb: 1,
                    gap: 1,
                    flexDirection: { xs: 'column', sm: 'row' },
                    alignItems: { xs: 'start', sm: 'center' },
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                }}
            >
                <Typography level="h2" component="h1">
                    Orders
                </Typography>
            </Box>
            <HoTable
                columns={columns}
                data={data}
                selectable={true}
                selectedRows={selected}
                onRowSelect={setSelected}
            />
            <HoTable />
        </Box>
    );
}
