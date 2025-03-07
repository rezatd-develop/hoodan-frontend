import { apiRoutes } from "../../bases/apiRoutes";
import { GetRequest, PostRequest, PutRequest } from "../../bases/BaseRequests";

export const GetCartService = (callback) => {
    GetRequest(apiRoutes.user.cart.getCart, {}, callback)
};

export const ModifyUserCartService = (body, callback) => {
    PostRequest(apiRoutes.user.cart.modifyCart, body, callback)
};

export const RemoveFromUserCartService = (body, callback) => {
    PutRequest(apiRoutes.user.cart.removeFromCart, body, callback)
};

export const GetUserCartService = (params, callback) => {
    GetRequest(apiRoutes.user.cart.getUserCart, params, callback)
};