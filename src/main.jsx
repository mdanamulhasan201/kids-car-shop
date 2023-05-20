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
// import PrivateRoute from './Routes/PrivateRoute';
import AddToy from './pages/AddToy/AddToy';
import MyCars from './MyCars/MyCars';
import ViewDetails from './pages/ViewDetails/ViewDetails';
import UpdateData from './pages/UpdateData/UpdateData';
import CategoryDetails from './pages/Home/Category/CategoryDetails';
import PrivateRoute from './Routes/PrivateRoute';
// import UpdateCar from './pages/UpdateData/UpdateCar';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
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


      // {
      //   path: 'updateCar/:id',
      //   element: <UpdateCar></UpdateCar>,
      //   loader: ({ params }) => fetch(`http://localhost:5000/updateCars/${params.id}`)
      // },
     
      {
        path: 'allToy',
        element: <AllToys></AllToys>,

      },
      {
        path: 'viewDetails/:id',
        element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/carDetails/${params.id}`)
      },

      {
        path: 'myCars',
        element: <PrivateRoute><MyCars></MyCars></PrivateRoute>,



      },

      {
        path: 'updateData/:id',
        element: <UpdateData></UpdateData>,

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
