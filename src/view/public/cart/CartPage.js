'use client'

import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import { useEffect, useState } from 'react';
import HoTable from '../../../components/table/HoTable';
import { CreateUserOrderService } from "../../../services/Api's/user/useOrder";
import HoPrimaryButton from '@/components/button/HoPrimaryButton';
import { GetUserCartService } from "@/services/Api\'s/user/userCart";
import { useSelector } from 'react-redux';

export default function CartPage() {
    const [sortBy, setSortBy] = useState(null);
    const [selected, setSelected] = useState([]);
    const [cartItemsData, setCartItemsData] = useState([]);
    const [callServiceDate, setCallServiceDate] = useState(new Date());
    const [resultMessageClass, setResultMessageClass] = useState(<></>);
    const t = useSelector((state) => state.dictionary.t);

    const columns = [
        { id: 'productId', label: t?.user?.productId, width: 70, sortable: true },
        { id: 'productName', label: t?.user?.productName, width: 140 },
        { id: 'quantity', label: t?.user?.quantity, width: 70 },
        { id: 'pricePerEach', label: t?.user?.pricePerEach, width: 70 },
        { id: 'totalPrice', label: t?.user?.totalPrice, width: 70 },
    ];


    useEffect(() => {
        GetUserCartService({}, getUserCartCallback)
    }, [callServiceDate])

    const getUserCartCallback = (data) => setCartItemsData(data[0]?.items);

    const confirmOrderClicked = () => {
        const selectedCartItemsData = cartItemsData?.filter(cartItemData => selected?.includes(cartItemData?.productId));

        CreateUserOrderService({
            orders: selectedCartItemsData?.map(item => ({ productid: item?.productId, quantity: item?.quantity }))
        }, (data) => {
            setResultMessageClass(data?.message);
            !data?.hasError && setCallServiceDate(new Date());
            setSelected([])
        });
    };


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
                    {t?.user?.cart}
                </Typography>
            </Box>
            <HoTable
                columns={columns}
                data={cartItemsData}
                selectable={true}
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
