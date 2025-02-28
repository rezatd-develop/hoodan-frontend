import { apiRoutes } from "../../../bases/apiRoutes";
import { GetRequest } from "../../../bases/BaseRequests";

export const GetPublicAllSlidersService = (callback) => {
    GetRequest(apiRoutes.public.sliders.getAllSliders, {}, callback)
};