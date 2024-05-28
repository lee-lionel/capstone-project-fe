import './App.css';
import Navbar from './components/Navbar/Navbar';
import AuthPage from './pages/AuthPage';
import Home from './pages/Home';
import Profile from './pages/Profile';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
<Router>
   Tuition Portal
   <Navbar/>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/AuthPage' element={<AuthPage />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
