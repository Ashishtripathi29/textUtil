import { useState } from "react"
import Form from "./componant/Form"
import Navbar from "./componant/Navbar"
import Alert from "./componant/Alert"
import Aboutus from "./componant/About"
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";



function App() {

  const [mode, setmode] = useState('light')
  const [alert, setalert] = useState(null)

  const showAlert = (msg, mode) => {
    setalert({
      msg: msg,
      type: mode
    })
    setTimeout(() => {
      setalert(null)
    }, 1500)
  }
  const tuggle = () => {
    if (mode === 'dark') {
      setmode('light')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = '#202b57'
      showAlert("light mode on", "success")
    }
    else {
      setmode('dark')
      document.body.style.backgroundColor = '#202b57'
      document.body.style.color = 'white'
      showAlert("dark mode on", "success")
    }
  }

  return <Router>
    <Navbar title="TextUtil" mode={mode} tuggle={tuggle} />
    <Alert alert={alert} />
    <Routes >
      <Route path="/about" element={<Aboutus mode={mode}/>} />
      <Route path="/" element={<Form showData={showAlert} mode={mode} />} />
    </Routes>
    <div align='center' className="footer" > this page powered by @AshishTripathi </div>
  </Router>

}

export default App