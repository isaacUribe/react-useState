import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Usuarios from './components/layouts/Usuarios'
import Home from './components/layouts/Home'
const router = createBrowserRouter(
  [
    {
      path:'/',
      element:<Home/>,
      errorElement:<h1>404 not Found</h1>
    },
    {
      path:'/usuarios',
      element:<Usuarios/>,
      errorElement:<h1>404 not Found</h1>
    }
  ]
)

function App() {

  return (
    <RouterProvider router={router}/>
  )
}

export default App
