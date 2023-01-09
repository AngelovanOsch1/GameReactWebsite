import { useState } from 'react'
import Header from './components/header/Header'
import './css-helper/prefix.scss'

function App() {

  const [account, setAccount] = useState<string>('')

  return (
    <div className="app">
        <Header setAccount={setAccount} account={account}/>
    </div>
  )
}

export default App