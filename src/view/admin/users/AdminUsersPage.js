'use client'

import HoPrimaryButton from '@/components/button/HoPrimaryButton';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import HoTable from '../../../components/table/HoTable';
import { GetAdminAllUsersService } from '../../../services/Api\'s/admin/user/adminUserApiRoutes';
import { setCultureToUrl } from '../../../utilities/CommonHelper';

export default function AdminUsersPage() {
    const [sortBy, setSortBy] = useState(null);
    const [selected, setSelected] = useState([]);
    const [cartItemsData, setCartItemsData] = useState([]);
    const [orderDetails, setOrderDetails] = useState(null);
    const [callServiceDate, setCallServiceDate] = useState(new Date());
    const [showOrderDetailsModal, setShowOrderDetailsModal] = useState(false);
    const [resultMessageClass, setResultMessageClass] = useState(<></>);

    const columns = [
        { id: 'firstName', label: 'First Name', width: 100 },
        { id: 'lastName', label: 'Last Name', width: 100 },
        { id: 'address', label: 'Address', width: 200 },
        { id: 'postalCode', label: 'Postal Code', width: 150 },
        { id: 'createdAt', label: 'Joined at', width: 150 },
    ];

    useEffect(() => {
        GetAdminAllUsersService(getAdminAllUsersCallback);
    }, []);

    const getAdminAllUsersCallback = (data) => {
        const newData = data?.users?.map((item) =>
        ({
            ...item,
            createdAt: new Date(item?.createdAt).toLocaleString(),
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
                    Admin Users
                </Typography>
            </Box>
            <HoTable
                columns={columns}
                data={cartItemsData}
                selectedRows={selected}
                onRowSelect={setSelected}
            />
            <HoTable />
            <div className='text-center'>
                {resultMessageClass}
            </div>
        </Box >
    );
}
