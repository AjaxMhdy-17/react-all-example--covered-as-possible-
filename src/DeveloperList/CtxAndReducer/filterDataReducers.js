import { devList } from "../dataSet";

export const filterDataReducers = (state, action) => {
  if (action.type === "resetAllData") {
    return {
      ...state,
      filterdData: state.dataSet,
    };
  } else if (action.type === "filterDevByDesignation") {
    const designation = action.payload;
    let result = [...state.dataSet];

    if (designation.length !== 0) {
      const filterData = [...state.dataSet];
      result = filterData.filter(
        (item) =>
          item.designation.toLocaleLowerCase() ===
          designation.toLocaleLowerCase()
      );
    } else {
      //   console.log("designation empty");
    }

    return {
      ...state,
      filterdData: result,
    };
  } else if (action.type === "findBySkillLevel") {
    let result;
    const filterList = [...state.dataSet];

    result = filterList.filter(
      (item) =>
        item.level.toLocaleLowerCase() === action.payload.toLocaleLowerCase()
    );

    console.log(result);
    return {
      ...state,
      filterdData: result,
    };
  } else if (action.type === "sortingDataByName") {
    // const filterData = [...state.dataSet];
    const filterData = [...state.filterdData];

    let result = filterData.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });

    return {
      ...state,
      filterdData: result,
    };
  } else if (action.type === "sortingDataByRating") {
    const filterData = [...state.dataSet];
    let result = filterData.sort((a, b) => {
      return b.rating - a.rating;
    });
    return {
      ...state,
      filterdData: result,
    };
  } else if (action.type === "sortingDataByJoining") {
    const filter = [...state.dataSet];
    const result = filter.sort(
      (a, b) =>
        new Date(...a.join_date.split("/").reverse()) -
        new Date(...b.join_date.split("/").reverse())
    );
    return {
      ...state,
      filterdData: result,
    };
  } else if (action.type === "findDevSearchByName") {
    const filterData = [...state.dataSet];
    const result = filterData.filter(
      (item) =>
        item.name.toLocaleLowerCase() === action.payload.toLocaleLowerCase()
    );

    return {
      ...state,
      filterdData: result,
    };
  } else if (action.type === "addPostLive") {
    console.log(action.payload);
    let result = [...state.filterdData];
    // result = result.concat(action.payload)
    result = [...state.filterdData, action.payload];
    // console.log(result);
    return {
      ...state,
      filterdData: result,
    };
  } else if (action.type === "getEditData") {
    const person = action.payload;
    console.log(person);
    return {
      ...state,
      personEditData: person,
    };
  } else if (action.type === "editPost") {
    // console.log(action.payload);
    const data = [...state.dataSet];
    console.log(action.payload.id);
    const findIndex = data.findIndex((item) => item.id === action.payload.id);
    const updateElement = data[findIndex];
    const modify = {
      ...updateElement,
      name: action.payload.name,
      designation: action.payload.designation,
      rating: action.payload.rating,
      level: action.payload.level,
      join_date: action.payload.join_date,
      pay_per_hour: action.payload.pay_per_hour,
      work_in_week: action.payload.work_in_week,
    };
    const updateTotal = [...state.dataSet];
    updateTotal[findIndex] = modify;
    // console.log(updateTotal);
    return {
      ...state,
      filterdData: updateTotal,
      isEdit: false,
    };
  } else if (action.type === "deletePost") {
    console.log(action.payload);

    const data = [...state.filterdData];
    const result = data.filter((item) => item.id !== action.payload);
    console.log(result);
    return {
      ...state,
      filterdData: result,
    };
  } else if (action.type === "openEdit") {
    return {
      ...state,
      isEdit: true,
    };
  } else if (action.type === "closeEdit") {
    return {
      ...state,
      isEdit: false,
    };
  } else if (action.type === "currentUser") {
    // console.log(action.payload);
    return {
      ...state,
      userName: action.payload.displayName,
      userEmail: action.payload.email,
      userPhoto: action.payload.photoURL,
      isLogin: true,
      errorMessage: "",
    };
  } else if (action.type === "signInWithGoogle") {
    // console.log(action.payload.email);
    return {
      ...state,
      userName: action.payload.displayName,
      userEmail: action.payload.email,
      userPhoto: action.payload.photoURL,
      isLogin: true,
      errorMessage: "",
    };
  } else if (action.type === "signWithPassword") {
    // console.log(action.payload);
    return {
      ...state,
      userName: action.payload.displayName,
      userEmail: action.payload.email,
      userPhoto: action.payload.photoURL,
      isLogin: true,
      errorMessage: "",
    };
  } else if (action.type === "createUserWithPassword") {
    console.log(action.payload);
    return {
      ...state,
      userName: action.payload.displayName,
      userEmail: action.payload.email,
      userPhoto: action.payload.photoURL,
      isLogin: true,
      errorMessage: "",
    };
  } else if (action.type === "logoutHandler") {
    return {
      ...state,
      isLogin: false,
    };
  } else if (action.type === "errorMessage") {
    return {
      ...state,
      errorMessage: action.payload,
    };
  } else if (action.type === "addToTeam") {
    console.log(action.payload);

    const teamMember = [...state.teamData].find((item) => item.id === action.payload);

    // console.log(team);

    if (teamMember === undefined) {
      const data = [...state.filterdData];
      const findIndex = data.findIndex((item) => item.id === action.payload);
      const singleMember = data[findIndex];
      console.log(singleMember.inTeam);

      if (singleMember.inTeam === false) {
        const updateMember = {
          ...singleMember,
          total_week: 1,
          inTeam: true,
        };
        const updateTeamStaus = [...state.filterdData];
        updateTeamStaus[findIndex] = updateMember;

        const updatedTeam = [...state.teamData, updateMember];

        return {
          ...state,
          filterdData: updateTeamStaus,
          teamData: updatedTeam,
        };
      } else {
        return {
          ...state,
        };
      }
    }
  } else if (action.type === "increaseWeek") {
    console.log(action.payload);

    const team = [...state.teamData];

    const findIndex = team.findIndex((item) => item.id === action.payload);
    const member = team[findIndex];
    const updateMember = {
      ...member,
      total_week: member.total_week + 1,
    };
    const result = [...state.teamData];
    result[findIndex] = updateMember;

    return {
      ...state,
      teamData: result,
    };
  } else if (action.type === "decreaseWeek") {
    console.log(action.payload);

    const team = [...state.teamData];

    const findIndex = team.findIndex((item) => item.id === action.payload);
    const member = team[findIndex];
    const updateMember = {
      ...member,
      total_week: member.total_week - 1,
    };
    const result = [...state.teamData];
    result[findIndex] = updateMember;

    return {
      ...state,
      teamData: result,
    };
  } else if (action.type === "remove") {
    const team = [...state.teamData];

    const result = team.filter((item) => item.id !== action.payload);

    return {
      ...state,
      teamData: result,
    };
  }

  return state;
};
