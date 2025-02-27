import { apiRoutes } from "../../../bases/apiRoutes";
import { GetRequest } from "../../../bases/BaseRequests";

export const PublicSearchService = (params, callback) => {
    GetRequest(apiRoutes.public.search, params, callback)
};