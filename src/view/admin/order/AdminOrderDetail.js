'use client'

import HoPrimaryButton from "@/components/button/HoPrimaryButton";
import HoTable from "@/components/table/HoTable";
import { EditAdminOrderDetailService, GetAdminOrderDetailService, RemoveAdminOrderService } from "@/services/Api's/admin/order/adminOrderApiRoutes";
import { translateOrderStatus } from "@/utilities/CommonHelper";
import { useEffect, useState } from "react";
import LabelBox from '../../../components/labelbox/LabelBox';
import { enumerations } from "@/resources/enums/enumerations";

export default function AdminOrderDetailPage() {
    const [orderDetails, setOrderDetails] = useState(null);
    const [orderItemsData, setOrderItemsData] = useState([]);
    const [selected, setSelected] = useState([]);

    const columns = [
        { id: 'productId', label: 'Product Id', width: 70 },
        { id: 'productTitle', label: 'Product Title', width: 150 },
        { id: 'productPrice', label: 'Product Price', width: 70 },
        { id: 'quantity', label: 'qantity', width: 150 },
    ];

    useEffect(() => {
        const orderId = window?.location.pathname.split("/").pop();
        GetAdminOrderDetailService({ orderId: orderId }, getAdminOrderDetailCallback)
    }, [])

    const getAdminOrderDetailCallback = (data) => {
        if (data?.items?.length > 0) {
            setOrderDetails(data);
            setOrderItemsData(data?.items)
        }
    }

    const orderStatusChanged = (selectedOrderStatus) => {
        let body = {
            orderId: window?.location.pathname.split("/").pop(),
            update: {
                ...orderDetails,
                orderStatus: selectedOrderStatus
            }
        };
        EditAdminOrderDetailService(body, editAdminOrderDetailCallback);
    };

    const editAdminOrderDetailCallback = (data) => data?.order?.items?.length > 0 && window.location.reload();

    const deleteOrderClicked = () => {
        let params = {
            orderId: window?.location.pathname.split("/").pop()
        };
        RemoveAdminOrderService(params, removeAdminOrderCallback)
    };

    const removeAdminOrderCallback = (data) => !data?.hasError && window.location.reload()

    return <div className="p-3 p-lg-4 p-md-4 p-sm-3 rounded rounded-3 border border-dark mx-3 w-100">

        <div className="mb-3 fw-bold w-auto">Information</div>
        <div className="d-flex">
            <LabelBox keyLabel='Full Name' valueLabel={orderDetails?.fullName} />
            <LabelBox keyLabel='Registration Time' valueLabel={new Date(orderDetails?.createdAt).toLocaleString()} />
            <LabelBox keyLabel='Order Id' valueLabel={orderDetails?.orderId} />
            <LabelBox keyLabel='Order Status' valueLabel={translateOrderStatus(orderDetails?.orderStatus)} />
            <LabelBox keyLabel='Phone' valueLabel={orderDetails?.phone} />
            <LabelBox keyLabel='Total Price' valueLabel={orderDetails?.totalOrderPrice} />
        </div>

        <div className="mb-3 fw-bold w-auto my-4">Orders</div>
        <HoTable
            columns={columns}
            data={orderItemsData}
            selectedRows={selected}
            onRowSelect={setSelected}
        />
        <HoTable />

        <div className="mb-3 fw-bold w-auto my-4">Actions</div>
        <div className="d-flex">
            <div className="me-5">
                <div className="fw-bold font-size-15">Change Order Status to</div>
                <div className="d-flex">
                    <HoPrimaryButton onClick={() => orderStatusChanged(enumerations.order.orderStatus.registered)} className='mt-2 me-2'>Registered</HoPrimaryButton>
                    <HoPrimaryButton onClick={() => orderStatusChanged(enumerations.order.orderStatus.preparing)} className='mt-2 me-2 bg-primary'>Preparing</HoPrimaryButton>
                    <HoPrimaryButton onClick={() => orderStatusChanged(enumerations.order.orderStatus.ready)} className='mt-2 me-2 bg-success'>Ready</HoPrimaryButton>
                </div>
            </div>
            <div>
                <div className="fw-bold font-size-15">Delete Order</div>
                <HoPrimaryButton onClick={deleteOrderClicked} className='mt-2 me-2 bg-danger'>Delete Order</HoPrimaryButton>
            </div>
        </div>

    </div>
}
