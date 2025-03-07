import { apiRoutes } from "../../../bases/apiRoutes";
import { DeleteRequest, GetRequest, PostRequest, PutRequest } from "../../../bases/BaseRequests";

export const GetAdminAllUsersService = (callback) => {
    GetRequest(apiRoutes.admin.user.getAllUsers, {}, callback)
};

export const GetAdminUserDetailService = (parameters, callback) => {
    GetRequest(apiRoutes.admin.user.getUserDetail, parameters, callback)
};

export const EditAdminUserDetailService = (body, callback) => {
    PutRequest(apiRoutes.admin.user.editUser, body, callback)
};

export const RemoveAdminUserService = (parameters, callback) => {
    DeleteRequest(apiRoutes.admin.user.removeUser, parameters, callback)
}

export const CreateAdminUserService = (body, callback) => {
    PostRequest(apiRoutes.admin.user.createUser, body, callback)
};