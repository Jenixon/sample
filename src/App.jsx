
import './App.css'
import Studentregister from './Components/Studentregister'
import Studentview from './Components/Studentview'
import { BrowserRouter ,Route,Routes,Router } from 'react-router-dom'

function App() {


  return (
    <>
 
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Studentregister/>}/>
        <Route path='/studentview' element={<Studentview/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
