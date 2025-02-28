import { apiRoutes } from "../../bases/apiRoutes";
import { GetRequest, PostRequest, PutRequest } from "../../bases/BaseRequests";

export const GetUserCartService = (callback) => {
    GetRequest(apiRoutes.user.getCart, {}, callback)
};

export const AddToCartUserService = (body, callback) => {
    PostRequest(apiRoutes.user.addToCart, body, callback)
};

export const UpdateUserCartService = (body, callback) => {
    PutRequest(apiRoutes.user.updateCart, body, callback)
};

export const RemoveFromUserCartService = (body, callback) => {
    PutRequest(apiRoutes.user.removeFromCart, body, callback)
};