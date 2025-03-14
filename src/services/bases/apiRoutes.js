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
            getAllOrders: '/user/order/getAllOrders',
        }
    },
    admin: {
        product: {
            getAllProducts: 'admin/product/getAllProducts',
            getProductDetail: 'admin/product/getProductDetail',
            editProduct: 'admin/product/editProduct',
            deleteProduct: 'admin/product/deleteProduct',
            createProduct: 'admin/product/createProduct',
        },
        order: {
            getAllOrders: 'admin/order/getAllOrders',
            getOrderDetail: 'admin/order/getOrderDetail',
            updateOrder: 'admin/order/updateOrder',
            removeOrder: 'admin/order/removeOrder',
            addOrder: 'admin/order/addOrder',
        },
        user: {
            getAllUsers: 'admin/user/getAllUsers',
            getUserDetail: 'admin/user/getUserDetail',
            editUser: 'admin/user/editUser',
            removeUser: 'admin/user/removeUser',
            createUser: 'admin/user/createUser',
        },
        blog: {
            getAllBlogs: 'admin/blog/getAllBlogs',
            getBlogDetail: 'admin/blog/getBlogDetail',
            editBlog: 'admin/blog/editBlog',
            createBlog: 'admin/blog/createBlog',
            removeBlog: 'admin/blog/removeBlog'
        }
    },
    auth: {
        isAdmin: 'auth/isAdmin',
        isUser: 'auth/isUser',
    }
}