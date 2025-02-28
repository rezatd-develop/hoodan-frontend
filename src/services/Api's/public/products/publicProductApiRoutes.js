import { apiRoutes } from "../../../bases/apiRoutes"
import { GetRequest } from "../../../bases/BaseRequests"

export const GetPublicAllProductsService = (params, callback) => {
    GetRequest(apiRoutes.public.products.getAllProducts, params, callback)
};