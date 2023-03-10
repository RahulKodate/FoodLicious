import logo from './logo.svg';
import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import {BrowserRouter , Route , Link , Switch } from 'react-router-dom'
import Navbar from './components/Navbar';
import Homescreen from './screens/Homescreen';
import Cartscreen from './screens/Cartscreen'
import Registerscreen from './screens/Registerscreen';
import Loginscreen from './screens/Loginscreen';
import Ordersscreen from './screens/Ordersscreen';
import Adminscreen from './screens/Adminscreen';
import LandingPage from './screens/LandingPage';
import Footer from './screens/Footer';
import AboutUs from './screens/About';
import ContactUS from './screens/ContactUs';
function App() {
  return (
    <div className="App">
       <Navbar/>
       <BrowserRouter>
          <Route exact path='/' component={LandingPage}/>
          <Route path='/about' component={AboutUs}/>
          <Route path='/contact' component={ContactUS}/>
          <Route path="/menu" exact component={Homescreen} />
          <Route path="/cart" exact component={Cartscreen}/>
          <Route path="/register" exact component={Registerscreen}/>
          <Route path='/login' exact component={Loginscreen}/>
          <Route path='/orders' exact component={Ordersscreen}/>
          <Route path='/admin' component={Adminscreen}/>
          
       </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
