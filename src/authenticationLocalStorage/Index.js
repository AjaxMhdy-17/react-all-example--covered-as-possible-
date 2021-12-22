import React , {useState , useEffect} from "react";
import { Routes, Route } from "react-router-dom";
import MainHeader from "./components/Header/MainHeader.js";

import Home from "./components/Home";
import Login from "./components/Login.js";

const Index = () => {

  const [isLoggedIn , setIsLoggedIn] = useState(false) 

  const loginHandler = (email , password) => {
    setIsLoggedIn(true)
    localStorage.setItem('isLoggedIn' , '1') 
  }

  const logoutHandler = () => {
    setIsLoggedIn(false) 
    localStorage.removeItem('isLoggedIn') 
  }

  useEffect(() => {
    const getCurrentUserStatus = localStorage.getItem('isLoggedIn')

    if(getCurrentUserStatus === '1'){
      setIsLoggedIn(true)
    }

  },[])

  console.log(isLoggedIn);

  return (
    <div>
      <MainHeader 
        isLoggedIn={isLoggedIn}
        logoutHandler={logoutHandler}
      />
      <Routes>
        <Route path="/home" element={<Home  isLoggedIn={isLoggedIn}/>} />
        <Route path='/login' element={<Login isLoggedIn={isLoggedIn} loginHandler={loginHandler}/>} />
      </Routes>
    </div>
  );
};

export default Index;
