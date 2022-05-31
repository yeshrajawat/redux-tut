import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Cart from './pages/cart/Cart';
import Navbar from './component/navbar/Navbar';
import { Provider } from 'react-redux';
import store from './store/store';
function App() {
  return (
    <div className="App">
      <Provider store={store}>

        <Router>

            <Navbar/>

            <Routes>

              <Route path='/' element={<Home/>} />

              <Route path='/cart' element={<Cart/>} />

            </Routes>

        </Router>

      </Provider>
    </div>
  );
}

export default App;
