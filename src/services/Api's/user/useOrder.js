import { apiRoutes } from "../../bases/apiRoutes";
import { PostRequest } from "../../bases/BaseRequests";

export const CreateUserOrderService = (body, callback) => {
    PostRequest(apiRoutes.user.order.createOrder, body, callback)
};
