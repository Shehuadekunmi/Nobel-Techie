import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import Loading from './components/Loading'
import Dashboard from './pages/Dashboard'

// Lazy load pages
const Home = lazy(() => import('./pages/Home'))
const Application = lazy(() => import('./pages/Appplication'))
const StepOne = lazy(() => import('./pages/StepOne'))
const StepTwo = lazy(() => import('./pages/StepTwo'))
const StepThree = lazy(() => import('./pages/StepThree'))
const StepFour = lazy(() => import('./pages/Stepfour'))
const Message = lazy(() => import('./pages/Message'))
const Winners = lazy(() => import('./pages/Winners'))
const Certificate = lazy(() => import('./pages/Certificate'))
const WinnerProfile = lazy(() => import('./pages/WinnerProfile'))
const dashboard = lazy(() => import('./pages/Dashboard'))

const Admin = lazy(() => import('./pages/Admin'))
const AdminPage = lazy(() => import('./pages/AdminPage'))

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/admin" replace />;
};

function App() {
  return (
    <Suspense fallback={<div className="loading-spinner"> <Loading/>  </div>}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/app' element={<Application />} />
        <Route path='/step' element={<StepOne />} />
        <Route path='/step2' element={<StepTwo />} />
        <Route path='/step3' element={<StepThree />} />
        <Route path='/step4' element={<StepFour />} />
        <Route path='/message' element={<Message />} />
        <Route path='/winner' element={<Winners />} />
        <Route path='/cert/:winnerId' element={<Certificate />} />
        <Route path='/pro/:id' element={<WinnerProfile />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/adminpage' element={<AdminPage />} />
        <Route path='/winnerprofile/:id' element={<WinnerProfile />} />
        <Route path='/edit/:id' element={<AdminPage />} />
        <Route
  path="/dashboard"
  element={
    <PrivateRoute>
      <Dashboard />
    </PrivateRoute>
  }
/>

      </Routes>
    </Suspense>
  )
}

export default App
