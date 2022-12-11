import { Route, Routes } from "react-router-dom";

import './css-helper/prefix.scss'

import Homepage from './pages/homepage/Homepage'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
      </Routes>
    </div>
  )
}

export default App