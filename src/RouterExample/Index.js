import React from "react";

import Header from "./components/Header";
import Home from "./components/Home";
import Posts from "./components/Posts";
import PostDetail from "./components/PostDetail";
import Signup from "./components/Signup";
import PrivateRoute from "./components/PrivateRoute";
import { Routes , Route , Redirect} from "react-router-dom";
import Welcome from "./components/Welcome";

const Index = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/*'  element={<Home/>}>
          <Route path="hello" element={<h2>This is Hello Line , Nested Route</h2>}/>
        </Route>
        {/* <Route path='/xx'>
            <Redirect to='/welcome'/>
        </Route> */}
        {/* <Route path='/welcome' component={Welcome} /> */}
        {/* <PrivateRoute path='/posts' exact> 
          <Posts/>
        </PrivateRoute> */}
        <Route path='/posts' element={<Posts/>}/>
        <Route path='/posts/post/:id' element={<PostDetail/>} />
        <Route path='/signup'  element={<Signup/>} />
      </Routes>
    </div>
  );
};

export default Index;
