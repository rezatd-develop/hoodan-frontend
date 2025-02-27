import { apiRoutes } from "../../../bases/apiRoutes"
import { PostRequest } from "../../../bases/BaseRequests"

export const SendPhoneAuthService = (body, callback) => {
    PostRequest(apiRoutes.public.auth.phone, body, callback)
};

export const SendOTPAuthService = (body, callback) => {
    PostRequest(apiRoutes.public.auth.verify, body, callback)
};

export const SendRegisterAuthService = (body, callback) => {
    PostRequest(apiRoutes.public.auth.register, body, callback)
};