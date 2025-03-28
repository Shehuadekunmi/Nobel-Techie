
import './App.css'
import Header from './components/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Appplication from './pages/Appplication'
import StepOne from './pages/StepOne'
import StepTwo from './pages/StepTwo'
import StepThree from './pages/StepThree'
import Stepfour from './pages/Stepfour'

import ModalOne from './pages/Message'
import Message from './pages/Message'
import Winners from './pages/Winners'
import Certificate from './pages/Certificate'
import WinnerProfile from './pages/WinnerProfile'
import Admin from './pages/Admin'
import AdminPage from './pages/AdminPage'

function App() {


  return (
    <>
     {/* <h1 className="p-4 color-red">Hello</h1> */}
    {/* <Header/> */}
   
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/app' element={<Appplication/>}/>
        <Route path='/step' element={<StepOne/>}/>
        <Route path='/step2' element={<StepTwo/>}/>
        <Route path='/step3' element={<StepThree/>}/>
        <Route path='/step4' element={<Stepfour/>}/>
        <Route path='/message' element={<Message/>}/>
        <Route path='/winner' element={<Winners/>}/>
        <Route path='/cert' element={<Certificate/>}/>
        <Route path='/pro/:id' element={<WinnerProfile/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/adminpage' element={<AdminPage/>}/>

        {/* <Route path="*" element={<h1>404 - Page Not Found</h1>} /> */}


      </Routes>
   
    </>
  )
}

export default App
