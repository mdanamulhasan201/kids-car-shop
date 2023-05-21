import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import AuthProvider from './provider/AuthProvider';
import AllToys from './pages/AllToys/AllToys';
import AddToy from './pages/AddToy/AddToy';
import MyCars from './MyCars/MyCars';
import ViewDetails from './pages/ViewDetails/ViewDetails';
import CategoryDetails from './pages/Home/Category/CategoryDetails';
import PrivateRoute from './Routes/PrivateRoute';
import UpdateCar from './pages/UpdateData/UpdateCar';
import Error from './pages/Error/Error';
import Blog from './pages/Blog/Blog';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: 'category/:id',
        element: <CategoryDetails></CategoryDetails>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      },

      {
        path: 'addToy',
        element: <PrivateRoute><AddToy></AddToy></PrivateRoute>
      },


      {
        path: 'updateCar/:id',
        element: <UpdateCar></UpdateCar>,
        // loader: ({ params }) => fetch(`https://kids-car-shop-server.vercel.app/updateCars/${params.id}`)
      },
     
      {
        path: 'allToy',
        element: <AllToys></AllToys>,

      },
      {
        path: 'viewDetails/:id',
        element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`https://kids-car-shop-server.vercel.app/carDetails/${params.id}`)
      },

      {
        path: 'myCars',
        element: <PrivateRoute><MyCars></MyCars></PrivateRoute>,
      },
      {
        path: 'blog',
        element: <Blog></Blog>
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='container mx-auto'>
    <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </React.StrictMode>
  </div>
)
