import React, { createContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { devList } from "../dataSet";
import Firebase from "../components/Auth/Firebase";
import { filterDataReducers } from "./filterDataReducers";
import { GoogleProvider } from "../components/Auth/Firebase";

export const CtxOfDev = createContext({
  data: devList,
  teamData : [] , 
  isLogin: false,
  userName: "",
  userEmail: "",
  userPhoto: "",
  isEdit: false,
  personEditData: null,
  errorMessage: "",
  filterDevByDesignation: (designation) => {},
  findBySkillLevel: (selectedLevel) => {},
  findDevSearchByName: (name) => {},
  sortingDataByName: () => {},
  sortingDataByRating: () => {},
  sortingDataByJoining: () => {},
  reloadHandler: () => {},
  addPostLive: (postData) => {},
  editPost: (postData) => {},
  deletePost: () => {},
  openEdit: () => {},
  closeEdit: () => {},
  signInWithGoogle: () => {},
  signWithPassword: (email, password) => {},
  createUserWithPassword: (name, email, password) => {},
  logoutHandler: () => {},
  currentUser: () => {},
  addToTeam : (id) => {} ,
  increaseWeek : (id) => {} , 
  decreaseWeek : (id) => {} , 
  remove : (id) => {} 
});

const initialState = {
  dataSet: devList,
  filterdData: devList,
  isEdit: false,
  personEditData: null,
  userName: "",
  userEmail: "",
  userPhoto: "",
  errorMessage: "",
  teamData : [] , 
};


const CtxAndReducer = (props) => {
  const navigate = useNavigate();

  const [data, dispatchDataAction] = useReducer(
    filterDataReducers,
    initialState
  );


    //team actions 

    const addToTeam = (id) => {
      console.log(id);
      dispatchDataAction({
        type : "addToTeam" , 
        payload : id 
      })
    }

    const increaseWeek = (id) => {
      dispatchDataAction({
        type : "increaseWeek",
        payload : id 
      })
    }

    const decreaseWeek = (id) => {
      dispatchDataAction({
        type : "decreaseWeek" , 
        payload : id 
      })
    }

    const remove = (id) => {
      dispatchDataAction({
        type : 'remove' , 
        payload : id 
      })
    }

  // /authentication actions

  const currentUser = () => {
    Firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        dispatchDataAction({
          type: "currentUser",
          payload: user,
        });
      } else {
        let message = "no user";
        dispatchDataAction({
          type: "error",
          payload: message,
        });
      }
    });
  };

  const signInWithGoogle = () => {
    Firebase.auth()
      .signInWithPopup(GoogleProvider)
      .then((result) => {
        var user = result.user;
        dispatchDataAction({
          type: "signInWithGoogle",
          payload: user,
        });
      })
      .catch((error) => {
        var errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  const signWithPassword = (email, password) => {
    Firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        var user = userCredential.user;
        // console.log(user);
        dispatchDataAction({
          type: "signWithPassword",
          payload: user,
        });
      })
      .catch((error) => {
        var errorMessage = error.message;
        console.log(errorMessage);
        dispatchDataAction({
          type: "errorMessage",
          payload: errorMessage,
        });
      });
  };

  const createUserWithPassword = (name, email, password) => {
    console.log(name);
    console.log(email);
    console.log(password);
    Firebase.auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        user.updateProfile({
          displayName: name,
        });
        dispatchDataAction({
          type: "createUserWithPassword",
          payload: user,
        });
      })
      .catch((error) => {
        var errorMessage = error.message;

      });
  };

  const logoutHandler = () => {
    Firebase.auth().signOut().then(() => {
      dispatchDataAction({
        type: "logoutHandler",
      });
    }).catch((error) => {
      
    });
  
  };

  ///crud actions

  const addPostLive = (postData) => {
    dispatchDataAction({
      type: "addPostLive",
      payload: postData,
    });
    // navigate('/',{replace : true})
  };

  const editPost = (postData) => {
    dispatchDataAction({
      type: "editPost",
      payload: postData,
    });
  };

  const getEditData = (person) => {
    dispatchDataAction({
      type: "getEditData",
      payload: person,
    });
  };

  const openEdit = () => {
    dispatchDataAction({
      type: "openEdit",
    });
  };

  const closeEdit = () => {
    dispatchDataAction({
      type: "closeEdit",
    });
  };
  const deletePost = (id) => {
    dispatchDataAction({
      type: "deletePost",
      payload: id,
    });
  };

  //data and fillters

  const findBySkillLevel = (selectedLevel) => {
    dispatchDataAction({
      type: "findBySkillLevel",
      payload: selectedLevel,
    });
  };
  const filterDevByDesignation = (designation) => {
    dispatchDataAction({
      type: "filterDevByDesignation",
      payload: designation,
    });
  };
  const sortingDataByName = () => {
    dispatchDataAction({
      type: "sortingDataByName",
    });
  };
  const sortingDataByRating = () => {
    dispatchDataAction({
      type: "sortingDataByRating",
    });
  };
  const sortingDataByJoining = () => {
    dispatchDataAction({
      type: "sortingDataByJoining",
    });
  };
  const findDevSearchByName = (name) => {
    dispatchDataAction({
      type: "findDevSearchByName",
      payload: name,
    });
  };
  const resetAllData = () => {
    dispatchDataAction({
      type: "resetAllData",
    });
  };

  const finalPassedContext = {
    data: data.dataSet,
    filterdData: data.filterdData,
    personEditData: data.personEditData,
    userName: data.userName,
    userEmail: data.userEmail,
    userPhoto: data.userPhoto,
    isLogin: data.isLogin,
    errorMessage: data.errorMessage,
    teamData : data.teamData,
    filterDevByDesignation: filterDevByDesignation,
    findBySkillLevel: findBySkillLevel,
    sortingDataByName: sortingDataByName,
    sortingDataByRating: sortingDataByRating,
    sortingDataByJoining: sortingDataByJoining,
    findDevSearchByName: findDevSearchByName,
    resetAllData: resetAllData,
    ////alll context for filtering and displaying data
    addPostLive: addPostLive,
    editPost: editPost,
    isEdit: data.isEdit,
    getEditData: getEditData,
    deletePost: deletePost,
    openEdit: openEdit,
    closeEdit: closeEdit,
    ///authentication
    currentUser: currentUser,
    signInWithGoogle: signInWithGoogle,
    signWithPassword: signWithPassword,
    createUserWithPassword: createUserWithPassword,
    logoutHandler: logoutHandler,
    //team
    addToTeam : addToTeam ,
    increaseWeek : increaseWeek , 
    decreaseWeek : decreaseWeek ,
    remove : remove
  };

  return (
    <CtxOfDev.Provider value={finalPassedContext}>
      {props.children}
    </CtxOfDev.Provider>
  );
};

export default CtxAndReducer;
