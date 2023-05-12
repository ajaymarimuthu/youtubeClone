
import './App.css'
import Body from './components/Body/Body'
import Head from './components/Head/Head'
import { Provider } from 'react-redux'
import store from './utils/store'


function App() {


  return (

    <Provider store={store}>


      <div>


        <Head />
        <Body />


      </div>


    </Provider>







  )
}

export default App
