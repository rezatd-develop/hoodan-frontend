'use client'

import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import { useEffect, useState } from 'react';
import HoTable from '../../../components/table/HoTable';
import { GetUserAllOrdersService } from "../../../services/Api's/user/useOrder";
import HoPrimaryButton from '@/components/button/HoPrimaryButton';
import { useSelector } from 'react-redux';

export default function OrdersPage() {
    const [sortBy, setSortBy] = useState(null);
    const [selected, setSelected] = useState([]);
    const [cartItemsData, setCartItemsData] = useState([]);
    const [callServiceDate, setCallServiceDate] = useState(new Date());
    const [resultMessageClass, setResultMessageClass] = useState(<></>);
    const t = useSelector((state) => state.dictionary.t);

    const columns = [
        { id: 'orderId', label: t?.user?.orderId, width: 70 },
        { id: 'orderStatusLabel', label: t?.user?.orderStatus, width: 140 },
        { id: 'totalOrderPrice', label: t?.user?.price, width: 70 },
        { id: 'orderItems', label: t?.user?.orderItems, width: 150 },
        { id: 'orderRegistrationTimeFormatted', label: t?.user?.orderRegistrationTime, width: 150 },
    ];

    useEffect(() => {
        GetUserAllOrdersService(getUserAllOrdersCallback);
    }, [])

    const getUserAllOrdersCallback = (data) => setCartItemsData(data)

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
                    {t?.user?.orders}
                </Typography>
            </Box>
            <HoTable
                columns={columns}
                data={cartItemsData}
                selectedRows={selected}
                onRowSelect={setSelected}
            />
            <HoTable />
            {(selected?.length > 0) &&
                <HoPrimaryButton onClick={confirmOrderClicked} className='py-3 mt-5'>Confirm Order</HoPrimaryButton>
            }
            <div className='text-center'>
                {resultMessageClass}
            </div>
        </Box>
    );
}
