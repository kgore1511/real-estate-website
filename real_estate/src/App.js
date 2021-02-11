import './App.css';
import {HomeScreen} from './frontend/Screens/HomeScreen'
import {BrowserRouter,Route,Link} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    <div>
   <nav class="navbar navbar-expand-lg navbar-dark bg-secondary">
  <div className='title'><a class="navbar-brand" href="#">FLAT.com</a></div>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">BUY</a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="#">RENT</a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="#">SELL</a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="#">Contact Us</a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="#">Login</a>
      </li>
    </ul>
  </div>
  
</nav>

  <Route path='/' component={HomeScreen}></Route>
   </div>  
   <div className='footer'> All right reserved.</div>
    </BrowserRouter>
  );
}

export default App;
