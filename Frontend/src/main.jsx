import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,  RouterProvider } from "react-router-dom"
import './index.css'
import App from './App.jsx'
import Home from './Pages/Home/Home.jsx'
import Login from './Pages/Authentication/Login.jsx'
import Signup from './Pages/Authentication/Signup.jsx'
import { store } from './store/store.js'
import { Provider } from 'react-redux'

const router =  createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/signup",
    element:<Signup/>
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    <App />
    </Provider>
  </StrictMode>,
)
