import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Loader from './components/Loader'

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Service = lazy(() => import('./pages/Service'));
const Contact = lazy(() => import('./pages/Contact'));
// const Admin = lazy(() => import('./admin/Admin'))

const UserLayout = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
);

const AdminLayout = () => <Outlet />;

const App = () => {
  return (
    <Router>
      <ToastContainer />
      <Suspense fallback={<Loader />}>
        <Routes>
          {/* User Layout */}
          <Route path="/" element={<UserLayout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Service />} />
            <Route path="/contact" element={<Contact />} />
          </Route>

          {/* Admin Layout */}
          <Route path="/admin" element={<AdminLayout />}>
            {/* <Route index element={<Admin />} /> */}
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
