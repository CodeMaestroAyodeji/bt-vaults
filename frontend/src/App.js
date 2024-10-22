import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
// import './App.css';
import Pricing from './pages/Pricing';
import UserDashboard from './pages/UserDashboard';
import AdminDashboard from './pages/AdminDashboard';
import PrivacyPolicy from './others/PrivacyPolicy';
import ReportProblem from './others/ReportProblem';
import FAQ from './others/FAQ';
import TermsOfUse from './others/TermsOfUse';
import ContactUs from './others/ContactUs';
import About from './others/About';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/bt-vaults' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/my-dashboard' element={<UserDashboard />}></Route>
        <Route path='/admin' element={<AdminDashboard />}></Route>
        <Route path='/pricing-list' element={<Pricing />}></Route>
        <Route path='/privacy-policy' element={<PrivacyPolicy />}></Route>
        <Route path='/contact-us' element={<ContactUs />}></Route>
        <Route path='/terms-of-use' element={<TermsOfUse />}></Route>
        <Route path='/faq' element={<FAQ />}></Route>
        <Route path='/report-a-problem' element={<ReportProblem />}></Route>
        <Route path='/about-us' element={<About />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
