import { apiRoutes } from "../../../bases/apiRoutes";
import { DeleteRequest, GetRequest, PostRequest, PutRequest } from "../../../bases/BaseRequests";

export const GetAdminAllProductsService = (callback) => {
    GetRequest(apiRoutes.admin.product.getAllProducts, {}, callback)
};

export const GetAdminProductDetailService = (parameters, callback) => {
    GetRequest(apiRoutes.admin.product.getProductDetail, parameters, callback)
};

export const EditAdminProductDetailService = (body, callback) => {
    PutRequest(apiRoutes.admin.product.editProduct, body, callback)
};

export const RemoveAdminProductService = (parameters, callback) => {
    DeleteRequest(apiRoutes.admin.product.deleteProduct, parameters, callback)
}

export const CreateAdminProductService = (body, callback) => {
    PostRequest(apiRoutes.admin.product.createProduct, body, callback)
};