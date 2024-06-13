import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'


function App() {

  return (
    <UserContextProvider>
      <h1 className='text-4xl text-center'>Login Page</h1><br/>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
