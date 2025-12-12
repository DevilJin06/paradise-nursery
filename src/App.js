import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import ProductList from './components/ProductList';
import CartPage from './components/CartPage';
import Checkout from './components/Checkout';
import { useSelector } from 'react-redux';

function App() {
  // simple client-side routing state
  const [page, setPage] = useState('landing'); // 'landing' | 'products' | 'cart' | 'checkout'
  const cart = useSelector(s => s.cart);

  // persist cart to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem('paradise_cart', JSON.stringify(cart));
    } catch (e) {
      console.error('Failed to save cart to localStorage', e);
    }
  }, [cart]);

  return (
    <div>
      <Navbar onNav={setPage} />
      <main className="container">
        {page === 'landing' && <Landing onStart={() => setPage('products')} />}
        {page === 'products' && <ProductList />}
        {page === 'cart' && <CartPage onContinue={() => setPage('products')} />}
        {page === 'checkout' && <Checkout onBack={() => setPage('cart')} />}
      </main>
      <footer className="footer">
        <p>© Paradise Nursery — a demo store</p>
      </footer>
    </div>
  );
}

export default App;
