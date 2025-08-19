import React, { Suspense, lazy, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Outlet, useLocation } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Loader from './components/Loader'

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));

// Lazy load individual services
const Service1 = lazy(() => import('./pages/Service/Service1'));
const Service2 = lazy(() => import('./pages/Service/Service2'));
const Service3 = lazy(() => import('./pages/Service/Service3'));
const Service4 = lazy(() => import('./pages/Service/Service4'));
const Service5 = lazy(() => import('./pages/Service/Service5'));

// 🔹 ScrollToTop Component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
};

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
      <ScrollToTop />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<UserLayout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

            {/* Individual Service Routes */}
            <Route path="/services/Siddha External Therapies" element={<Service1 />} />
            <Route path="/services/Ayurveda Panchakarma & Wellness Therapies" element={<Service2 />} />
            <Route path="/services/Lifestyle & Holistic Wellness" element={<Service3 />} />
            <Route path="/services/Naturopathy Therapies" element={<Service4 />} />
            <Route path="/services/Physiotherapy" element={<Service5 />} />
          </Route>

          <Route path="/admin" element={<AdminLayout />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
