import ReactDOM from 'react-dom/client'
import Home from './Home.jsx'
import './index.css'
import Navbar from  './components/Navbar.jsx'
import Admin from './components/Admin.jsx'
import Owner from './components/Owner.jsx'
import HomeUser from './components/HomeUser.jsx'
import Context from './Context.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element:(
      <>
      <Navbar/>
      <Home/>
      </>
    ),
  },
  {
    path: "/homeuser",
    element:(
      <>
      <Navbar/>
      <HomeUser/>
      </>
    ),
  },
  {
    path: "/admin",
    element:(
      <>
      <Navbar/>
      <Admin/>
      </>
    ),
  },
  {
    path: "/owner",
    element:(
      <>
      <Navbar/>
      <Owner/>
      </>
    ),
  },
  {
    path: "/context",
    element:(
      <>
      <Context />
      </>
    ),
  },

])



ReactDOM.createRoot(document.getElementById('root')).render(
  <Context>

    <RouterProvider router={router}/>

  </Context>
)
