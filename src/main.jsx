import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { NextUIProvider } from '@nextui-org/react';
import { RouterProvider , createBrowserRouter} from 'react-router-dom';
import Home from './Pages/Home.jsx';
import Astro from './Pages/Astro.jsx';
import Today from './Pages/Today.jsx';
const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<Home />
      },
      {
        path:'/Astrology',
        element:<Astro/>
      },
      {
        path:'/SportsEvent',
        element:<Today/>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
 <RouterProvider router={router}>
   <NextUIProvider>
    <App />
  </NextUIProvider>
 </RouterProvider>
)
