import Header from './components/header/Header'
import Login from './components/login/Login'
import Signup from './components/signup/Signup'
import './css-helper/prefix.scss'

function App() {

  return (
    <div className="App">
      <Header />
      <Signup />
      {/* <Login /> */}
    </div>
  )
}

export default App