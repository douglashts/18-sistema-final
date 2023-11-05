import './App.css';
import { Router } from './components';
import { Banners } from './components';
import { Footer } from './components';
import { Menu } from './components';
import { Header } from './components';
import { Products } from './components';


function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <Banners />
      <Router />
      <Products />
      <Footer />
      
    </div>
  );
}

export default App;