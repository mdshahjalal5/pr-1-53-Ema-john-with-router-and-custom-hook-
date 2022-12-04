import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Layouts/Main";
import About from './components/About/About.js'
import Shop from "./components/Shop/Shop";
import Undefined from "./components/Undefined/Undefined";
import Orders from "./components/Orders/Orders";
import Inventory from "./components/Inventory/Inventory";
import { productsAndCartLoader } from "./Loaders/ProductsAndCartLoaders";
function App() {
  const router = createBrowserRouter([
    {path:'/', element:<Main></Main>, 
    children:[
      {path:'/', loader:productsAndCartLoader, element:<Shop></Shop>,
      }, 
     {path:'/shop', element:<Shop></Shop>, loader:productsAndCartLoader} ,
    {path:'about', element:<About></About>},
    {path:'/orders',
    loader:productsAndCartLoader,
     element:<Orders></Orders>},
    {path:'/invetory', element:<Inventory></Inventory>},
    // {path:'/home', element:<Home></Home>}
    ]
  }, 
    {path:'*', element:<Undefined></Undefined>}
  ])
  return (
    <div >
      <RouterProvider router={router}></RouterProvider>
    </div>

  );
}

export default App;
