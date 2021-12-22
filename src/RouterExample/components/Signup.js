import React, { useState , useEffect } from "react";

import Firebase from "../Firebase";
import { useNavigate } from "react-router-dom";
import { googleProvider } from "../Firebase";

function Signup() {

const navigate = useNavigate()


  const [userRegister, setUserRegister] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [isLogin , setIsLogin] = useState({
      name : '' , 
      email : '' , 
  })

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserRegister({
      ...userRegister,
      [name]: value,
    });
    // console.log(e.target.name);
    // console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userRegister);
    Firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((result) => {
        var user = result.user;
        console.log(user);
        setIsLogin({
            name : user.displayName ,  
            email : user.email 
        })
      })
      .catch((error) => {
        var errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  const handleLogout = () => {
    Firebase.auth().signOut().then(() => {
        setIsLogin({
            name : '' , 
            email : '' 
        })
      }).catch((error) => {
       
      });
  }

  useEffect(() => {
    Firebase.auth().onAuthStateChanged((user) => {
        if(user){
            setIsLogin({
                name : user.displayName , 
                email : user.email 
            })
            navigate('/',{replace : true})
        }
        else{

        }
    })
    return () => {
        setIsLogin({
            name : '' , 
            email : '' 
        })
    }
  },[])

  console.log(isLogin); 

  return (
    <div>
      <h2> signup signin </h2>
      <div>
        <h2>Sign in With Google</h2>
        {isLogin.email ? <button
            onClick={handleLogout}
        >sign out</button> :  <button
            onClick={handleSubmit}
        >
            sign in
        </button>}
      </div>
      <div>
        <h2>Sign in with email and password</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              name="name"
              value={userRegister.name}
              onChange={handleChange}
              placeholder="name"
            />
          </div>
          <div>
            <input
              type="text"
              name="email"
              value={userRegister.email}
              onChange={handleChange}
              placeholder="email"
            />
          </div>
          <div>
            <input
              type="text"
              name="password"
              value={userRegister.password}
              onChange={handleChange}
              placeholder="password"
            />
          </div>
          <button>sign up</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
