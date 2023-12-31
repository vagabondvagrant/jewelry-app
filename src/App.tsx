// import { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
// import Home from './Pages/Home';
// import SignUpForm from './SignUp/SignUp';
// import Categories from './Categories/Categories';
// // import CommentSection from './Comment/Comment';
// // import MarketPlace from './Pages/MarketPlace';
// // import WhatPeopleSay from './Audience/WhatPeopleSay';
// import RecentlySold from './Sold/RecentlySold';
// import Footer from './components/Footer';
// import GoToTopButton from './TopBottom/GoToTop';
// import GoDownButton from './TopBottom/Bottom';
// import WhatsappContact from './Whatsapp/Whatsapp';
// import { JewelryCatalog } from './components/JewelryCatalog';
// import { CartProvider } from './Context/CartContext';
// import FiCategory from './Market/FiCategory';
// import SavedItems from './SavedItems/SavedItems';
// import AboutUs from './components/About';
// import Ring1 from "../src/Featured/Ring1.webp"
// import Ring2 from "../src/Featured/Ring2.webp"
// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const dummyItems = [
//     { id: 1, name: 'Antique Ring 1', image: 'ring1.jpg' },
//     { id: 2, name: 'Vintage Necklace', image: 'necklace.jpg' },
//   ];

//   const handleLogin = () => {
//     setIsLoggedIn(true);
//   };

//   return (
//     <CartProvider>
//       <Router>
//         <>
//           {!isLoggedIn && (
//             <Routes>
//               <Route path="/" element={<SignUpForm onLogin={handleLogin} />} />
//               <Route path="/categories" element={<Categories />} />
//               <Route path="/home" element={<Home />} />
//               <Route path="/saved" element={<SavedItems />} />
//               <Route path="/sold" element={<RecentlySold />} />
//               <Route path="/about" element={<AboutUs />} />
//               <Route path="/market" element={<FiCategory />} />
//             </Routes>
//           )}

//           {isLoggedIn && (
//             <>
//               <Header />
//               <Home />
//               <JewelryCatalog items={dummyItems} />
//               {/* <CommentSection /> */}
//               <div className="bg-gray-500 opacity-100 text-white ">
//                 {/* <WhatPeopleSay /> */}
//                 <Footer />
//                 {/* <SocialIcons/> */}
//                 <GoToTopButton />
//                 <GoDownButton />
//                 <WhatsappContact />
//                 {/* <SavedItems /> */}
//               </div>
//             </>
//           )}
//         </>
//       </Router>
//     </CartProvider>
//   );
// }

// export default App;
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './Pages/Home';
import SignUpForm from './SignUp/SignUp';
import Categories from './Categories/Categories';
import RecentlySold from './Sold/RecentlySold';
import Footer from './components/Footer';
import GoToTopButton from './TopBottom/GoToTop';
import GoDownButton from './TopBottom/Bottom';
import WhatsappContact from './Whatsapp/Whatsapp';
import JewelryCatalog from './components/JewelryCatalog';
import { CartProvider } from './Context/CartContext';
// import FiCategory from './Market/FiCategory';
import SavedItems from './SavedItems/SavedItems';
import AboutUs from './components/About';
import WhatPeopleSay from './Audience/WhatPeopleSay';
// import JewelryScroll from './FramerMotion/JewelryScroll';
import { ContactUs } from './Email/SendMail';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              isLoggedIn ? (
                <>
                  <Header />
                  <Home />
                  <JewelryCatalog />
                  <div className="bg-gray-500 opacity-100 text-white">
                    <Footer />
                    {/* <JewelryScroll /> */}
                    <ContactUs />
                    <WhatPeopleSay />
                    <GoToTopButton />
                    <GoDownButton />
                    <WhatsappContact />
                  </div>
                </>
              ) : (
                <SignUpForm onLogin={handleLogin} />
              )
            }
          />
          <Route path="/categories" element={<Categories />} />
          <Route path="/saved" element={<SavedItems />} />
          <Route path="/sold" element={<RecentlySold />} />
          <Route path="/about" element={<AboutUs />} />
          {/* <Route path="/market" element={<FiCategory />} /> */}
          {/* <Route path="/expensive" element={<JewelryScroll />} /> */}
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
