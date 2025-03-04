import { apiRoutes } from "../../bases/apiRoutes";
import { GetRequest, PostRequest, PutRequest } from "../../bases/BaseRequests";

export const GetUserCartService = (callback) => {
    GetRequest(apiRoutes.user.getCart, {}, callback)
};

export const ModifyUserCartService = (body, callback) => {
    PostRequest(apiRoutes.user.modifyCart, body, callback)
};

export const RemoveFromUserCartService = (body, callback) => {
    PutRequest(apiRoutes.user.removeFromCart, body, callback)
};