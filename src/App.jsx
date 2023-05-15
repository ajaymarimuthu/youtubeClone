
import './App.css'
import Body from './components/Body/Body'
import Head from './components/Head/Head'
import { Provider } from 'react-redux'
import store from './utils/store'
import MainContainer from "./components/MainContainer/MainContainer"
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import WatchingVideoPage from './components/WatchingVideoPage/WatchingVideoPage'


function App() {

  const appRouter=createBrowserRouter([
    {
      path:"/",
      element:<Body/>,
      children:[
        {
          path:"/",
          element:<MainContainer/>
        },
        {
          path:"/watchVideo",
          element:<WatchingVideoPage/>
        }
      ]
    }


  ])


  return (

    <Provider store={store}>


      <div>


        <Head />
        <RouterProvider router={appRouter} />


      </div>


    </Provider>







  )
}

export default App
