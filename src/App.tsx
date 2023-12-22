import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './Pages/Home';
import SignUpForm from './SignUp/SignUp';
import Categories from './Categories/Categories';
import CommentSection from './Comment/Comment';
import MarketPlace from './Pages/MarketPlace';
import WhatPeopleSay from './Audience/WhatPeopleSay';
import RecentlySold from './Sold/RecentlySold';
import Footer from './components/Footer';
import GoToTopButton from './TopBottom/GoToTop';
import GoDownButton from './TopBottom/Bottom';
import WhatsappContact from './Whatsapp/Whatsapp';
import { JewelryCatalog } from './components/JewelryCatalog';
import { CartProvider } from './Context/CartContext';
import FiCategory from './Market/FiCategory';
import SavedItems from './SavedItems/SavedItems';

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
    <CartProvider>
      <>
        {!isLoggedIn && (
          <Router>
            <Routes>
              <Route path="/" element={<SignUpForm onLogin={handleLogin} />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/home" element={<Home />} />
              <Route path="/saved" element={<SavedItems />} />
            </Routes>
          </Router>
        )}

        {isLoggedIn && (
          <>
            <Header />
            <Home />
            <JewelryCatalog items={dummyItems} />
            <CommentSection />
            <MarketPlace />
            <div className="bg-gray-500 opacity-100 text-white ">
              <WhatPeopleSay />
              <RecentlySold />
              <Footer />
              <GoToTopButton />
              <GoDownButton />
              <WhatsappContact />
              <FiCategory />
              <SavedItems />
            </div>
          </>
        )}
      </>
    </CartProvider>
  );
}

export default App;
