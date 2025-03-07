import { apiRoutes } from "../../bases/apiRoutes";
import { GetRequest, PostRequest } from "../../bases/BaseRequests";

export const CreateUserOrderService = (body, callback) => {
    PostRequest(apiRoutes.user.order.createOrder, body, callback)
};

export const GetUserAllOrdersService = (callback) => {
    GetRequest(apiRoutes.user.order.getAllOrders, {}, callback)
};