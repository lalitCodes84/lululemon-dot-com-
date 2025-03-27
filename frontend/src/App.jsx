import React from "react";
import Topbar from "./components/Topbar";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import HeaderMiddleSection from "./components/HeaderMiddleSection";

function App() {
  return (
    <div className="">
      <Topbar />
      <HeaderMiddleSection />
      <Navbar />
      <LandingPage />
    </div>
  );
}

export default App;
