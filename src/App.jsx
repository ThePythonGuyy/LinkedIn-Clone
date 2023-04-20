//Inbuilt func()
import { connect } from 'react-redux'
import { useEffect } from 'react'

// user func()
import { getUserAuth } from './actions'
//Layouts
import RootLayout from './Layouts/RootLayout'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

//Components
import Login from './Components/Login'
import Header from './Components/Header'
import Home from './Components/Home'

const router = createBrowserRouter (
    createRoutesFromElements(
        <Route path='/' element={<RootLayout/>}>
            <Route index element={<Login/>} />
            <Route path="home" element={<Header />}>
              <Route index element={<Home/>} />
            </Route>
        </Route>
    )
)
function App(props) {
 
  useEffect(() => {
    props.getUserAuth();

  }, []);
  return (
    <div className="App">
     <RouterProvider  router={router}/>
    
    </div>
  )
}

const mapStateToProps = (state) => {
  return{};
}

const mapDispatchToProps = (dispatch) => ({
  getUserAuth: () => dispatch(getUserAuth()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
