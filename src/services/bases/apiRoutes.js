export const apiRoutes = {
    public: {
        auth: {
            phone: '/public/auth/phone',
            verify: '/public/auth/verify',
            register: '/public/auth/register'
        },
        search: '/public/search',
        sliders: {
            getAllSliders: '/public/sliders',
            getSliderDetail: '/public/sliders/:id',
        },
        products: {
            getAllProducts: '/public/products',
            getProductDetail: '/public/products'
        },
        blogs: {
            getAllBlogs: '/public/blogs',
            getBlogDetail: '/public/blogs'
        },
    },
    user: {
        cart: {
            getCart: '/user/cart/getCart',
            modifyCart: '/user/cart/modifyCart',
            removeFromCart: '/user/cart/removeFromCart',
            getUserCart: '/user/cart/getUserCart',
        },
        order: {
            createOrder: '/user/order/createOrder',
        }
    }
}