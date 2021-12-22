import React, { Component, useContext, useEffect } from "react";
import Banner from "./components/Banner/Banner";
import Crud from "./components/Crud/Crud";
import DevLayout from "./components/Devs/DevLayout/DevLayout";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Layout from "./components/Layout/Layout";
import Review from "./components/Review/Review";
import AddPost from "./components/Crud/AddPost/AddPost";
import Backdrop from "./components/UI/Backdrop/Backdrop";
import { Routes, Route } from "react-router-dom";
import Login from './components/Auth/Login/Login'
import { CtxOfDev } from "../DeveloperList/CtxAndReducer/CtxAndReducer";
import EditPost from "./components/Crud/EditPost/EditPost";
import Devdetails from "./components/Devs/DevList/Devdetails/Devdetails";
import NotFound from "./components/UI/NotFound";
import Register from "./components/Auth/Register/Register";
import Team from "./components/Team/Team";
import Profile from "./components/Auth/profile/Profile";

const Index = () => {
  const ctx = useContext(CtxOfDev);
  // console.log(ctx);

  // useEffect(() => {
  //   ctx.currentUser() 
  // },[ctx.isLogin])

  return (
    <div>
      <Layout>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner /> <DevLayout />
                <Review />
              </>
            }
          />
          <Route path="/crud" element={<Crud />}>
            <Route path="/crud/add" element={<AddPost />} />
          </Route>
          <Route path='/details/:id' element={<Devdetails/>}/>
          <Route path='/team' element={<Team/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
        <Footer />
      </Layout>
    </div>
  );
};

export default Index;
