import { apiRoutes } from "../../../bases/apiRoutes";
import { DeleteRequest, GetRequest, PostRequest, PutRequest } from "../../../bases/BaseRequests";

export const GetAdminAllOrdersService = (callback) => {
    GetRequest(apiRoutes.admin.order.getAllOrders, {}, callback)
};

export const GetAdminOrderDetailService = (parameters, callback) => {
    GetRequest(apiRoutes.admin.order.getOrderDetail, parameters, callback)
};

export const EditAdminOrderDetailService = (body, callback) => {
    PutRequest(apiRoutes.admin.order.updateOrder, body, callback)
};

export const RemoveAdminOrderService = (parameters, callback) => {
    DeleteRequest(apiRoutes.admin.order.removeOrder, parameters, callback)
}

export const CreateAdminOrderService = (body, callback) => {
    PostRequest(apiRoutes.admin.order.addOrder, body, callback)
};