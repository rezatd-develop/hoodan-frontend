'use client'

import { useRouter } from "next/navigation";
import { IsAdminService, IsUserService } from "../../services/Api's/auth/authApiRoutes";

export default function Authenticator() {
    const router = useRouter()

    const pageType = window.location.pathname?.includes('admin')
        ? 'admin'
        : window.location.pathname?.includes('user')
            ? 'user'
            : 'common';

    const pushUserToSignIn = () => {
        localStorage.removeItem('token');
        router.push('/?needAuthentication=true');
    }

    const authenticateUserCallback = (data) => !data?.accessAccepted && pushUserToSignIn();

    const authenticateUser = () => {
        switch (pageType) {
            case 'admin': IsAdminService(authenticateUserCallback)
            case 'user': IsUserService(authenticateUserCallback)
            default:
                break;
        }
    }


    return authenticateUser();
}