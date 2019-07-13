import React from "react";
import { NavLink, Link} from "react-router-dom";
import SortPhotos from '../Components/SortPhotos';
import SearchPhotos from '../Components/SearchPhotos';

import "./Header.css";

const Header = (props) => {

  const {
    sorting, 
    loadProfileUser,
    loadSearchPhotos,
    loadPhotoFromApp, 
    goLogIn, 
    goLogOut, 
    profileFromApp,
    selectValueSort,
    setAccessToken,
    searchQwery,
    inputValueSearch,
    handlerClickSearch,
    getTotalStats } = props;

  let logInLogOut = null;
  let profile = null;
  let stats = null;

  if (sessionStorage.getItem('token') === 'undefined' || 
      sessionStorage.getItem('token') === ''|| 
      !sessionStorage.getItem('token')){
      setAccessToken();
      logInLogOut = (
          <li onClick={()=>{goLogIn()}}>
            <Link to="/">
              <span>Sign In{" "}</span>
              <i className="fas fa-sign-in-alt"></i>
            </Link>
          </li>
        );
  }else {
    logInLogOut = (
      <li onClick={()=>goLogOut()}>
        <Link to="/">
          Sign Out{" "}
          <i className="fas fa-sign-out-alt"></i>
        </Link>
      </li>
    );
    stats = (
      <li onClick={()=>getTotalStats()}>
        <NavLink to="/stats/">Total Stats</NavLink>
      </li>
    );
    if(Object.keys(profileFromApp).length === 0){
      profile = (
        <li onClick={()=>loadProfileUser()}>
          <Link to="/user/">MyProfile{" "}</Link>
        </li>
      )
    }else{
      profile = (
        <li>
          <Link to="/user/">MyProfile{" "}</Link>
        </li>
      )
    }
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 header">
          <ul className="d-flex menu">
            <li><NavLink to="/">Home</NavLink></li>
            <li>
              <SortPhotos 
                sorting={sorting}
                selectValueSort={selectValueSort}
                loadPhotoFromApp={loadPhotoFromApp}/>
            </li>
            <li>
              <SearchPhotos
                loadSearchPhotos={loadSearchPhotos}
                handlerClickSearch={handlerClickSearch}
                searchQwery={searchQwery}
                inputValueSearch={inputValueSearch}/>
            </li>
            {profile}
            {stats}
            {logInLogOut}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
