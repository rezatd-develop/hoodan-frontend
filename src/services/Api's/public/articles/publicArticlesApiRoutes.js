import { apiRoutes } from "../../../bases/apiRoutes";
import { GetRequest } from "../../../bases/BaseRequests";

export const GetPublicAllBlogsService = (params, callback) => {
    GetRequest(apiRoutes.public.blogs.getAllBlogs, params, callback)
};

export const GetPublicBlogDetailService = (params, callback) => {
    GetRequest(`${apiRoutes.public.blogs.getBlogDetail}/${params?.id}`, params, callback)
};