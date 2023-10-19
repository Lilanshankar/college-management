
import './App.css';
import Sidebar from './component/Sidebar';
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Profile from './pages/Profile';

function App() {
  return (
  <>
    {/* <Sidebar/> */}
    <BrowserRouter>
    <Routes>
      <Route element={<Sidebars />}>
        <Route path="/"  element={<Home/>} />
        <Route path="/profile"  element={<Profile />} />

         {/* <Route path="/search" element={<Search />} />
         <Route path="/post" element={<Post/>}/>
        <Route path="/activity" element={<Activity />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="register" element={<Register/>} />
          <Route path="login" element={<Login/>} /> */}
      </Route>
    </Routes>
  </BrowserRouter>
    </>
  );
}

export default App;

//lilan