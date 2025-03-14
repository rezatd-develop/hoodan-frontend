import { apiRoutes } from "../../../bases/apiRoutes";
import { DeleteRequest, GetRequest, PostRequest, PutRequest } from "../../../bases/BaseRequests";

export const GetAdminAllBlogsService = (callback) => {
    GetRequest(apiRoutes.admin.blog.getAllBlogs, {}, callback)
};

export const GetAdminBlogDetailService = (parameters, callback) => {
    GetRequest(apiRoutes.admin.blog.getBlogDetail, parameters, callback)
};

export const EditAdminBlogDetailService = (body, callback) => {
    PutRequest(apiRoutes.admin.blog.editBlog, body, callback)
};

export const RemoveAdminBlogService = (parameters, callback) => {
    DeleteRequest(apiRoutes.admin.blog.removeBlog, parameters, callback)
}

export const CreateAdminBlogService = (body, callback) => {
    PostRequest(apiRoutes.admin.blog.createBlog, body, callback)
};