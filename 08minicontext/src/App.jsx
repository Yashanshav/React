
import './App.css'
import ContextProvider from './Context/ContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {

  return (
    <ContextProvider>
      <Login/>
      <Profile/>
    </ContextProvider>
  )
}

export default App
