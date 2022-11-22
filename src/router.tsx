import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import SignUp from "./components/myAccount/signUp/SignUp";
import Home from "./pages/Home";
import MyAccount from "./pages/MyAccount";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home />} />
          <Route path='my-account' element={<MyAccount />} />
        </Route>
        <Route path='/create-account' element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}
