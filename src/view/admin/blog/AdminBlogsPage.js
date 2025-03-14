'use client'

import { translateOrderStatus } from '@/utilities/CommonHelper';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import HoTable from '../../../components/table/HoTable';
import { GetAdminAllBlogsService } from "../../../services/Api's/admin/blog/adminBlogApiRoutes";
import HoPrimaryButton from '@/components/button/HoPrimaryButton';

export default function AdminBlogsPage() {
    const [sortBy, setSortBy] = useState(null);
    const [selected, setSelected] = useState([]);
    const [cartItemsData, setCartItemsData] = useState([]);
    const [orderDetails, setOrderDetails] = useState(null);
    const [callServiceDate, setCallServiceDate] = useState(new Date());
    const [showOrderDetailsModal, setShowOrderDetailsModal] = useState(false);
    const [resultMessageClass, setResultMessageClass] = useState(<></>);

    const columns = [
        { id: 'id', label: 'Blog Id', width: 70 },
        { id: 'title', label: 'Title', width: 140 },
        { id: 'PublishDate', label: 'Publish Date', width: 140 },
        { id: 'author', label: 'Author', width: 150 },
        { id: 'categories', label: 'Categories', width: 150 },
        { id: 'actionButtons', label: 'Action', width: 70 },
    ];

    useEffect(() => {
        GetAdminAllBlogsService(getAdminAllOrdersCallback);
    }, []);

    const getAdminAllOrdersCallback = (data) => {
        const newData = data?.map((item) =>
        ({
            ...item,
            PublishDate: new Date(item?.publishDate).toLocaleString(),
            actionButtons: <Link href={`/admin/blogs/${item.id}`} class="bi bi-pencil-square cursor-pointer"></Link>
        }))

        setCartItemsData(newData)
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
                    Admin Orders
                </Typography>
            </Box>
            <HoTable
                columns={columns}
                data={cartItemsData}
                selectedRows={selected}
                onRowSelect={setSelected}
            />
            <HoTable />
            <Link href='/admin/blogs/create'>
                <HoPrimaryButton className='mt-2 me-2 bg-success'>Create Product</HoPrimaryButton>
            </Link>
            <div className='text-center'>
                {resultMessageClass}
            </div>
        </Box >
    );
}
