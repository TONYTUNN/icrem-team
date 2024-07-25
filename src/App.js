import { BrowserRouter,Route,Routes } from "react-router-dom";
import { Cart1 } from "./component/cart1/cart1";
import { Cart2 } from "./component/cart2/cart2";
import { Product } from "./component/product/product";
import { SignIn } from "./component/signin/signIn";
import { Register } from "./component/register/register";
function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
              <Route element={<Cart1/>} path="cart1"/>
              <Route element={<Cart2/>} path="cart2"/>
              <Route element={<Product/>} path="product"/>
              <Route element={<SignIn/>} path="signin"/>
              <Route element={<SignIn/>} path="signin"/>
            <Route element={<Register/>} path="register"/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
