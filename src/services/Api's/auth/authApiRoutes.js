import { GetRequest } from "@/services/bases/BaseRequests";
import { apiRoutes } from "../../bases/apiRoutes";

export const IsAdminService = (callback) => {
    GetRequest(apiRoutes.auth.isAdmin, {}, callback)
};

export const IsUserService = (callback) => {
    GetRequest(apiRoutes.auth.isUser, {}, callback)
};
