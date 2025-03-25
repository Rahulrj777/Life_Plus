import React from 'react'
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'
import Home from './pages/Home'
// import Admin from './admin/Admin'
import Header from './components/Header'
import Footer from './components/Footer'
import Loader from './components/Loader'
import About from './pages/About'
import ChatBot from './components/ChatBot'
import Service from './pages/Service'
import Contact from './pages/Contact'





const UserLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}


const AdminLayout = () => {
  return (
    <>
      <Outlet />
    </>
  )
}

const App = () => {
  return (
    <>
      <div>
        <Router>
          <Loader />
          {/* <ChatBot /> */}
          <Routes>

            {/* userlayout */}

            <Route path='/' element={<UserLayout />}>
              <Route index element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/healthcare_services' element={<Service />} />
              <Route path='/contact' element={<Contact />} />

            </Route>


            {/* adminlayout */}

            <Route path='/admin' element={<AdminLayout />}>
              {/* <Route index element={<Admin />} /> */}
            </Route>


          </Routes>

        </Router>

      </div>
    </>
  )
}

export default App