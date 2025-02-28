import { apiRoutes } from "../../../bases/apiRoutes";
import { GetRequest } from "../../../bases/BaseRequests";

export const GetPublicAllBlogsService = (params, callback) => {
    GetRequest(apiRoutes.public.blogs.getAllBlogs, params, callback)
};