
import './App.css'
import UserContextProvider from './Context/UserCOntextProvider'
import Profile from './components/Profile'
import Login from './components/Login'

function App() {


  return (
    <UserContextProvider >
      <h1>This Is Mini Context</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
