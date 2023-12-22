import { useState } from 'react';
import Home from "./Pages/Home";
import Header from "./components/Header";
import { JewelryCatalog } from "./components/JewelryCatalog";
import SignUpForm from "./SignUp/SignUp";
import Categories from './Categories/Categories';
import Footer from './components/Footer';
import MarketPlace from './Pages/MarketPlace';
import GoToTopButton from './TopBottom/GoToTop';
import GoDownButton from './TopBottom/Bottom';
import WhatsappContact from './Whatsapp/Whatsapp';
import CommentSection from './Comment/Comment';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WhatPeopleSay from './Audience/WhatPeopleSay';
import RecentlySold from './Sold/RecentlySold';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const dummyItems = [
    { id: 1, name: 'Antique Ring 1', image: 'ring1.jpg' },
    { id: 2, name: 'Vintage Necklace', image: 'necklace.jpg' },
  ];

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <>
      {!isLoggedIn && (
        <Router>
          <Routes>
            <Route path="/" element={<SignUpForm onLogin={handleLogin} />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/home" element={<Home />}/>
            <Route path="/sold" element={<RecentlySold />}/>
          </Routes>
        </Router>
      )}

      {isLoggedIn && (
        <>
          <Header />
          <Home/>
          <JewelryCatalog items={dummyItems} />
          <CommentSection />
          <MarketPlace />
          <div className='bg-gray-500 opacity-100 text-white '>
            <WhatPeopleSay/>
            <Footer />
            <GoToTopButton />
            <GoDownButton />
            <WhatsappContact />
          </div>
        </>
      )}
    </>
  );
}

export default App;
