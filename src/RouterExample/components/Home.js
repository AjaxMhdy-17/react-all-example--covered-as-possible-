import React, { useEffect } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Welcome from "./Welcome";
import Firebase from "../Firebase";
import { useNavigate } from "react-router-dom"; 
import { Outlet } from "react-router-dom";

const Home = () => {

  const navigate = useNavigate()

  useEffect(() => {

    Firebase.auth().onAuthStateChanged((user) => {
      if(user){
        console.log(user);
      }
      else{
          console.log('no user');
          navigate('/signup',{
            replace : true 
          })
      }
    })

  },[])

  const handleLogout = () => {
    Firebase.auth()
      .signOut()
      .then(() => {})
      .catch((error) => {});
  };

  return (
    <div>
      <h2>This is Home</h2>
      <Link to='/hello'>
        nested
      </Link>
      <h1>welcome name</h1>
      <Outlet/>
      <button onClick={handleLogout}>logout</button>
    </div>
  );
};

export default Home;
