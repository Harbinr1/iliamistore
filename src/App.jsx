import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  
} from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Products } from "./pages/Products/Products";
import { Product } from "./pages/Product/Product";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import "./app.scss"
import ScrollToTop from "./ScrollToTop/ScrollToTop";
const Layout = () => {
  return (
    <div className="app">
    <ScrollToTop>
      <Navbar/>
      <Outlet/>
      <Footer/>
      </ScrollToTop>
    </div>
  ) 
}



const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/products/:id",
        element:<Products/>
      },
      {
        path:"/product/:id",
        element:<Product/>
      }
    ]
  }
])

function App() {
  return <div>
    <RouterProvider router={router} />

  </div>;
}

export default App;
