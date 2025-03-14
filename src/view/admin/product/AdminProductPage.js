'use client'

import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import HoTable from '../../../components/table/HoTable';
import { GetAdminAllProductsService } from "../../../services/Api's/admin/product/adminProductApiRoutes";
import HoPrimaryButton from '@/components/button/HoPrimaryButton';
import { setCultureToUrl } from '../../../utilities/CommonHelper';

export default function AdminProductPage() {
    const [selected, setSelected] = useState([]);
    const [cartItemsData, setCartItemsData] = useState([]);
    const [resultMessageClass, setResultMessageClass] = useState(<></>);

    const columns = [
        { id: 'productId', label: 'Product Id', width: 70 },
        { id: 'title', label: 'Product Name', width: 140 },
        { id: 'price', label: 'Price', width: 140 },
        { id: 'publishDate', label: 'Publish Date', width: 150 },
        { id: 'actionButtons', label: 'Actions', width: 70 },
    ];

    useEffect(() => {
        GetAdminAllProductsService(getAdminAllProductsCallback);
    }, []);

    const getAdminAllProductsCallback = (data) => {
        const newData = data?.products?.map((item) =>
        ({
            ...item,
            publishDate: new Date(item?.publishDate).toLocaleString(),
            actionButtons: <Link href={setCultureToUrl(`/admin/products/${item.productId}`)} class="bi bi-pencil-square cursor-pointer"></Link>
        }))

        setCartItemsData(newData);
    }

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
                    Admin Products
                </Typography>
            </Box>
            <HoTable
                columns={columns}
                data={cartItemsData}
                selectedRows={selected}
                onRowSelect={setSelected}
            />
            <HoTable />
            <Link href={setCultureToUrl('/admin/products/create')}>
                <HoPrimaryButton className='mt-2 me-2 bg-success'>Create Product</HoPrimaryButton>
            </Link>
            <div className='text-center'>
                {resultMessageClass}
            </div>
        </Box >
    );
}
