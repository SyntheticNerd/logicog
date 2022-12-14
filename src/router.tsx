import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import LogIn from "./components/myAccount/logIn/LogIn";
import MyOrders from "./components/myAccount/MyOrders";
import SignUp from "./components/myAccount/signUp/SignUp";
import WishList from "./components/myAccount/WishList";
import CreateProduct from "./components/products/createProduct/CreateProduct";
import ProductDetails from "./components/products/productsPage/ProductDetails";
import ProductsPage from "./components/products/productsPage/ProductsPage";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import MyAccount from "./pages/MyAccount";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home />} />
          <Route path='my-account' element={<MyAccount />}>
            <Route path='my-orders' element={<MyOrders />} />
            <Route path='wish-list' element={<WishList />} />
            <Route path='create-product' element={<CreateProduct />} />
          </Route>
          <Route path='products' element={<ProductsPage />} />
          <Route path='products/:category' element={<ProductsPage />}>
            <Route path=':productId' element={<ProductDetails />} />
            <Route path=':productId/:style' element={<ProductDetails />} />
          </Route>
        </Route>
        <Route path='/create-account' element={<SignUp />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/checkout' element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
}
