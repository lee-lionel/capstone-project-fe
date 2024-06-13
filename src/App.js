import './App.css';
import Navbar from './components/Navbar/Navbar';
import AuthPage from './pages/AuthPage';
import CreatePost from './pages/CreatePost';
import EditProfile from './pages/EditProfile';
import Home from './pages/Home';
import Profile from './pages/Profile';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import View from './pages/View';

function App() {
  return (
    <div className="App">
<Router>
   Tuition Portal
   <Navbar/>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/authPage' element={<AuthPage />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/create-post' element={<CreatePost/>} />
          <Route path='/edit-profile' element={<EditProfile/>} />
          <Route path='/view' element={<View/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
