import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Login from "./component/Login-page/Login.jsx";
import Signup from "./component/Signup-page/Signup.jsx";
import Verification from "./component/Verification-page/Verification.jsx";
import Forgot from "./component/Frogot-page/Forgot.jsx";
import Navbar from "./component/Navbar/Navbar";
import { useAuthStore } from "./store/authStore.js";
import Dashboard from "./Pages/Dashbord/Dashbord.jsx";
import Reset from "./component/ResetPage/Reset.jsx";
import WorkoutProgram from "./NavbarPages/Programs/WorkoutProgram.jsx";
import WorkoutCustom from "./NavbarPages/WorkoutCustom/WorkoutCustom.jsx";
import MealsPlans from "./NavbarPages/MealsPlans/MealsPlans.jsx";
import PilotPrograms from "./NavbarPages/PilotPrograms/PilotPrograms.jsx";
import Routines from "./NavbarPages/Routines/Routines.jsx";
import MembershipPage from "./NavbarPages/Membership/MembershipPage.jsx";
import ExpertArticle from "./NavbarPages/ExpertArticle/ExpertArticle.jsx";
import HealthyRecipies from "./NavbarPages/HealthyRecipies/HealthyRecipies.jsx";
import WellnessVideos from "./NavbarPages/WellnessVideos/WellnessVideos.jsx";
import Blog from "./NavbarPages/Blogs/Blog.jsx";
import Referals from "./NavbarPages/Referals/Referals.jsx";
import New from "./NavbarPages/New/New.jsx";
import Career from "./NavbarPages/Carrers/Carrer.jsx";
import Tutorial from "./NavbarPages/Tutorials/Tutorial.jsx";
import OutTeams from "./NavbarPages/Teams/ourTeams.jsx";
import Store from "./NavbarPages/Store/Store.jsx";
import Checkout from "./Pages/Checkout/Checkout.jsx";
import AddToCart from "./Pages/AddToCart/AddToCart.jsx";
import WorkoutVideos from "./NavbarPages/workoutVideos/WorkoutVideos.jsx";
import Chatbot from "./component/Chatbot.jsx";
import Home from "./Pages/HomePages/Home.jsx";
import BackgroundVideo from "./background-video/BackgroundVideo.jsx";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore();
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  if (user && !user.isVerified) {
    return <Navigate to="/verification" replace />;
  }
  return children;
};

const RedirectAuthenticatedUser = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore();
  if (isAuthenticated && user && user.isVerified) {
    return <Navigate to="/home" replace />;
  }
  return children;
};

function App() {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  const [showNavbar, setShowNavbar] = useState(true);
  const { isAuthenticated, isCheckingAuth, checkAuth, user } = useAuthStore();
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const handleRemoveFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  useEffect(() => {
    if (isAuthenticated) {
      setShowNavbar(false); // Hide Navbar when authenticated
    } else {
      setShowNavbar(true); // Show Navbar when not authenticated
    }
  }, [isAuthenticated]);

  // Auto-show navbar after 30 seconds
  useEffect(() => {
    if (!showNavbar && !isNavbarVisible) {
      const timer = setTimeout(() => {
        setShowNavbar(true); // Automatically show navbar after 30 seconds
      }, 30000);
  
      return () => clearTimeout(timer); // Clean up timeout
    }
  }, [showNavbar,isNavbarVisible]);

 
  
  if (isCheckingAuth) {
    return <div>Loading...</div>;
  }

  return (

   
    <Router>

   { showNavbar && <Navbar />}


   <BackgroundVideo/>


     <Routes>
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/login"
          element={
            <RedirectAuthenticatedUser>
              <Login setNavbarVisible={setIsNavbarVisible} />
            </RedirectAuthenticatedUser>
          }
        />
        <Route
          path="/signup"
          element={
            <RedirectAuthenticatedUser>
              <Signup />
            </RedirectAuthenticatedUser>
          }
        />
        <Route path="/verification" element={<Verification />} />
        <Route
          path="/reset-password/:token"
          element={!isAuthenticated ? <Reset /> : <Navigate to="/home1" replace />}
        />
        <Route
          path="/forgot"
          element={
            <RedirectAuthenticatedUser>
              <Forgot />
            </RedirectAuthenticatedUser>
          }
        />
        
        <Route
          path="/WorkoutVideos"
          element={
            <RedirectAuthenticatedUser>
              <WorkoutVideos />
            </RedirectAuthenticatedUser>
          }
        />
        <Route
          path="/WorkoutProgram"
          element={
            <RedirectAuthenticatedUser>
              <WorkoutProgram />
            </RedirectAuthenticatedUser>
          }
        />
        <Route
          path="/WorkoutCustom"
          element={
            <RedirectAuthenticatedUser>
              <WorkoutCustom />
            </RedirectAuthenticatedUser>
          }
        />
        <Route
          path="/MealsPlans"
          element={
            <RedirectAuthenticatedUser>
              <MealsPlans />
            </RedirectAuthenticatedUser>
          }
        />
        <Route
          path="/PilotProgram"
          element={
            <RedirectAuthenticatedUser>
              <PilotPrograms />
            </RedirectAuthenticatedUser>
          }
        />
        <Route
          path="/Routines"
          element={
            <RedirectAuthenticatedUser>
              <Routines />
            </RedirectAuthenticatedUser>
          }
        />
        <Route
          path="/chatbot"
          element={
            <RedirectAuthenticatedUser>
              <Chatbot />
            </RedirectAuthenticatedUser>
          }
        />
        <Route
          path="/membership"
          element={
            <RedirectAuthenticatedUser>
              <MembershipPage />
            </RedirectAuthenticatedUser>
          }
        />
        <Route
          path="/ExpertArticle"
          element={
            <RedirectAuthenticatedUser>
              <ExpertArticle />
            </RedirectAuthenticatedUser>
          }
        />
        <Route
          path="/HealthyRecipes"
          element={
            <RedirectAuthenticatedUser>
              <HealthyRecipies />
            </RedirectAuthenticatedUser>
          }
        />
        <Route
          path="/WellnessVideos"
          element={
            <RedirectAuthenticatedUser>
              <WellnessVideos />
            </RedirectAuthenticatedUser>
          }
        />
        <Route
          path="/Blogs"
          element={
            <RedirectAuthenticatedUser>
              <Blog />
            </RedirectAuthenticatedUser>
          }
        />
        <Route
          path="/ReferralProgram"
          element={
            <RedirectAuthenticatedUser>
              <Referals />
            </RedirectAuthenticatedUser>
          }
        />
        <Route
          path="/WhatsNew"
          element={
            <RedirectAuthenticatedUser>
              <New />
            </RedirectAuthenticatedUser>
          }
        />
        <Route
          path="/Careers"
          element={
            <RedirectAuthenticatedUser>
              <Career />
            </RedirectAuthenticatedUser>
          }
        />
        <Route
          path="/Tutorials"
          element={
            <RedirectAuthenticatedUser>
              <Tutorial />
            </RedirectAuthenticatedUser>
          }
        />
        <Route
          path="/OurTeam"
          element={
            <RedirectAuthenticatedUser>
              <OutTeams />
            </RedirectAuthenticatedUser>
          }
        />
        <Route
          path="/Store"
          element={
            <RedirectAuthenticatedUser>
              <Store onAddToCart={handleAddToCart} />
            </RedirectAuthenticatedUser>
          }
        />
        <Route
          path="/cart"
          element={
            <RedirectAuthenticatedUser>
              <AddToCart cart={cart} onRemoveFromCart={handleRemoveFromCart} />
            </RedirectAuthenticatedUser>
          }
        />
        <Route
          path="/checkout"
          element={
            <RedirectAuthenticatedUser>
              <Checkout />
            </RedirectAuthenticatedUser>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
