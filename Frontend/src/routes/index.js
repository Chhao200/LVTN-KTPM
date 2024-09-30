import HomePage from "../pages/HomePage/HomePage";
import ProductPage from "../pages/ProductPage/ProductPage";
import OrderPage from "../pages/OrderPage/OrderPage";
import NotfoundPage from "../pages/NotfoundPage/NotfoundPage";
import ProductDetailPage from "../pages/ProductDetailPage/ProductDetailPage";
import SignInPage from "../pages/SignInPage/SignInPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";

export const routes = [
    {
        path: '/',
        page: HomePage,
        isShowHeader: true

    },
    {
        path: '/sanpham',
        page: ProductPage,
        isShowHeader: true
    },
    {
        path: '/dathang',
        page: OrderPage,
        isShowHeader: true
    },
    {
        path: '/sanphamchitiet',
        page: ProductDetailPage,
        isShowHeader: true
    },
    {
        path: '/dangky',
        page: SignUpPage,
        isShowHeader: false
    },
    {
        path: '/dangnhap',
        page: SignInPage,
        isShowHeader: false
    },
    {
        path: '*',
        page: NotfoundPage
    },

]