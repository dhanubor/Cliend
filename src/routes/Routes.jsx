import { createBrowserRouter } from 'react-router'
import Home from '../Pages/Home'
import Layouts from '../LayOyts/Layouts'
import Resjister from '../Pages/Resjister'
import Login from '../Pages/Login'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layouts />,
    children: [
      { path: '/resjister', element: <Resjister /> },
      { path: '/login', element: <Login /> },
    ],
  },
])
