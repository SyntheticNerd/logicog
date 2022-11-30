import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import LogIn from "./components/myAccount/logIn/LogIn";
import SignUp from "./components/myAccount/signUp/SignUp";
import CreateProduct from "./components/products/createProduct/CreateProduct";
import GamingMice from "./components/products/gamingMice/GamingMice";
import ProductsPage from "./components/products/ProductsPage";
import Home from "./pages/Home";
import MyAccount from "./pages/MyAccount";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home />} />
          <Route path='my-account' element={<MyAccount />} />
          <Route path='products' element={<ProductsPage />}/>
          <Route path='products/gaming-mice' element={<GamingMice />} />
        </Route>
        <Route path='/create-account' element={<SignUp />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/create-product' element={<CreateProduct />} />
      </Routes>
    </BrowserRouter>
  );
}
