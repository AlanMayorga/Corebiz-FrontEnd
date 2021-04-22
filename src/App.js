import Header from './components/header/index'
import BannerSlider from './components/banner-slider/index'
import CardList from './components/card-list/index'
import Form from './components/form/index'
import Footer from './components/footer/index'
import { CartContext } from './context/CartContext'
import { useState } from 'react'

function App() {

  const [cartCount, setCartCount] = useState(parseInt(localStorage.getItem('cartCount')) || 0);

  return (
    <div className="App">
      <CartContext.Provider value={{cartCount, setCartCount}}>
        <Header />
        <BannerSlider />
        <CardList />
        <Form />
        <Footer />
      </CartContext.Provider>
    </div>
  );
}

export default App;
