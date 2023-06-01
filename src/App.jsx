 
import './App.css'

import Head from './components/Head/Head'
import { Provider } from 'react-redux'
import store from './utils/store'
 
 import Body from "./components/Body/Body"
import ErrorPage from './components/ErrorPage/ErrorPage.jsx'
import {  RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainContainer from './components/MainContainer/MainContainer'
 import WatchingVideoPage from './components/WatchingVideoPage/WatchingVideoPage'

const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<Body/>,
    // errorElement: <ErrorPage/>,
    children:[

      {
        path:"/",
        element:<MainContainer/>,
      },
      {
        path:"/watch",
        element:<WatchingVideoPage/>,
        errorElement: <ErrorPage/>,
      }


    ] 
     
  },

 
])


function App() {

  return (
 
   
    <Provider store={store}>
      <div>
        <Head />
        <RouterProvider router={appRouter}/>
      
      </div>
    </Provider>
 
  )
}


export default App
