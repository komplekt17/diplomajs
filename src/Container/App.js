import React from 'react';
import $ from "jquery";
import 'bootswatch/dist/darkly/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { 
  BrowserRouter as Router, 
  Route,
  Switch,
  Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import { 
  likePhoto, 
  disLikePhoto, 
  getlistPhoto,
  getPhotoDetails,
  getSearchPhotos, 
  getStatsTotal,
  getProfilePhotographer,
  getPhotographerPhotos,
  getProfileCurrentUser,
  authenticationUrl,
  setAccessTokenUnplash } from "../Services/unsplash-service";
import {
  loadPhotoAction,
  loadProfileAction,
  loadPhotographerAction,
  loadPhotoDetailsAction,
  loadPhotosPhotographerAction, 
  loadSearchPhotosAction,
  logOutAction,
  logInAction, 
  likePhotoAction, 
  disLikePhotoAction, 
  selectValueSortAction,
  inputValueSearchAction,
  handlerClickSearchAction,
  statsTotalAction } from '../Actions/actions';
import Header from '../Components/Header';
import ListPhotos from '../Components/ListPhotos';
import Photographer from '../Components/Photographer';
import CurrentUser from '../Components/CurrentUser';
import PhotoDetails from '../Components/PhotoDetails';
import TotalStats from '../Components/TotalStats';
import SearchResult from '../Components/SearchResult';

import './App.css';

class App extends React.Component {

  loadPhotos = () => {

      const { loadPhotosToApp, storeToApp } = this.props;

      const page = storeToApp.photos.length;
      const per_page = storeToApp.stepLoad;

      let token = sessionStorage.getItem('token'); 
      const data = getlistPhoto(page, per_page, storeToApp.sorting, token);
      loadPhotosToApp(data);
      
  } 

  componentDidMount = () => {
    if(!sessionStorage.getItem('token')) this.loadPhotos();
  }

render(){

  const {
    storeToApp,
    likePhotoToApp, 
    disLikePhotoToApp, 
    loadProfileToApp,
    loadPhotographerToApp,
    loadPhotoDetailsToApp,
    statsTotalApp,
    logOutToApp, 
    logInToApp, 
    selectValueSortToApp,
    inputValueSearchToApp,
    handlerClickSearchToApp,
    loadSearchPhotosToApp,
    photosPhotographerApp } = this.props;

  let {
    profileUser,
    photoDetails,
    photosPhotographer,
    stepLoad,
    loading,
    sorting,
    searchResult,
    searchQwery,
    totalStats, 
    error } = storeToApp;

  // обработка авторизации
  const setAccessToken = () => {
      const code = window.location.search.split('code=')[1];
      if (code) {
          sessionStorage.setItem('token', code);
          setAccessTokenUnplash(code);
          logInToApp();
      }
  }

  // обработка авторизации
  const goLogIn = () => {
      window.location.assign(authenticationUrl);
      //logInToApp();
  }

  // обработка выхода из профиля
  const goLogOut = () => {
    sessionStorage.clear('token');
    logOutToApp();
  }

  // получение отформатированной даты создания/редактирования
  const getDateCreated = (string) => {
      const arrD = string.split('T');
      const arrT = arrD[1].split('-');
      const result = arrD[0]+", "+arrT[0];
      return result;
  }

  // обработка лайков/дизлайков
  const changeLikeStatus = (id, status) => {
    //console.log(id, status);
    if (sessionStorage.getItem('token') === 'undefined' || 
    sessionStorage.getItem('token') === '' || 
    !sessionStorage.getItem('token')){ 
      $('#modal-alert').modal('show'); // popup activate
    }else{
      if (!status) {
          likePhoto(id, sessionStorage.getItem('token'));
          likePhotoToApp(id, status);
      } else {
          disLikePhoto(id, sessionStorage.getItem('token'));
          disLikePhotoToApp(id, status);
      }
    }  
  }

  // загрузка фото по поисковому запросу
  const loadSearchPhotos = (qwery)=>{

    const page = searchResult.searchPhotos.length;
    const per_page = stepLoad;

    const data = getSearchPhotos(qwery, page, per_page);
    loadSearchPhotosToApp(data, qwery);
  }

  // загрузка фото фотографа
  const loadPhotosPhotographer = (username) => {

    const page = photosPhotographer.length;
    const per_page = stepLoad;

    const data = getPhotographerPhotos(username, page, per_page, sorting);
    photosPhotographerApp(data);
  }

  // извлекаем профиль текущего пользователя
  const loadProfileUser = () => {
    const data = getProfileCurrentUser();
    loadProfileToApp(data);
  }

  // обработчик загрузки статистики сервиса unsplash
  const getTotalStats = () => {
    const data = getStatsTotal();
    statsTotalApp(data);
  }

  // обработчик загрузки деталей фотографии
  const loadPhotoDetails = (idPhoto) => {
    const data = getPhotoDetails(idPhoto);
    loadPhotoDetailsToApp(data);
  }

  // обработчик загрузки профиля фотографа
  const loadProfilePhotographer = (username) => {
    const data = getProfilePhotographer(username);
    loadPhotographerToApp(data);
  }

  console.log(error);
  //console.log(storeToApp);

  return (
      <Router>
        <Header
          sorting={sorting} 
          setAccessToken={setAccessToken}
          profileFromApp={profileUser}
          searchQwery={searchQwery}
          goLogIn={goLogIn}
          goLogOut={goLogOut}
          loadProfileUser={loadProfileUser}
          selectValueSort={selectValueSortToApp}
          inputValueSearch={inputValueSearchToApp} 
          handlerClickSearch={handlerClickSearchToApp}
          loadSearchPhotos={loadSearchPhotos}
          loadPhotoFromApp={this.loadPhotos}
          getTotalStats={getTotalStats}/>
        <Switch>
          <Route 
            path="/search-result/"
            render={()=>(
              <SearchResult
                storeFromApp={storeToApp}
                loadSearchPhotos={loadSearchPhotos}
                loadProfilePhotographer={loadProfilePhotographer}
                loadPhotosPhotographer={loadPhotosPhotographer}
                loadPhotoDetails={loadPhotoDetails}
                getDateCreated={getDateCreated}
                changeLikeStatus={changeLikeStatus}/>
            )}/>
          <Route 
            path="/user/"
            render={()=>(
              <CurrentUser 
                profileFromApp={profileUser} 
                loading={loading}/>
            )}/>
          <Route 
            path="/stats/"
            render={()=>(
              <TotalStats 
                totalStats={totalStats}
                loading={loading}/>
            )}/>
          <Route 
            path="/photographer/:id"
            render={()=>(
              <Photographer 
                storeFromApp={storeToApp}
                loadProfilePhotographer={loadProfilePhotographer}
                loadPhotosPhotographer={loadPhotosPhotographer}
                loadPhotoDetails={loadPhotoDetails}
                getDateCreated={getDateCreated}
                changeLikeStatus={changeLikeStatus}/>
            )}/>
          <Route
            path="/photo/:id" 
            render={()=>(
              <PhotoDetails
                photoDetails={photoDetails}
                getDateCreated={getDateCreated} 
                loadProfilePhotographer={loadProfilePhotographer}
                loadPhotosPhotographer={loadPhotosPhotographer}
                loading={loading}/>
            )}/>
          <Route
            path="/"
            render={() => (
              <ListPhotos 
                storeFromApp={storeToApp}
                loadPhotoFromApp={this.loadPhotos}
                loadProfilePhotographer={loadProfilePhotographer}
                loadPhotosPhotographer={loadPhotosPhotographer}
                loadPhotoDetails={loadPhotoDetails}
                getDateCreated={getDateCreated}
                changeLikeStatus={changeLikeStatus}/>
            )}/>
          <Redirect to='/' />
        </Switch>
      </Router>
    );
  }
};

const mapStateToProps = (state) => {
  return ({ storeToApp: state })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    loadPhotosToApp: (data) => {
      dispatch(loadPhotoAction(data))},
    likePhotoToApp: (idx, status) => {
      dispatch(likePhotoAction(idx, status))},
    disLikePhotoToApp: (idx, status) => {
      dispatch(disLikePhotoAction(idx, status))},
    loadProfileToApp: (data) => dispatch(loadProfileAction(data)),
    loadPhotographerToApp: (data) => dispatch(loadPhotographerAction(data)),
    loadPhotoDetailsToApp: (data) => dispatch(loadPhotoDetailsAction(data)),
    loadSearchPhotosToApp: (data, qwery) => dispatch(loadSearchPhotosAction(data, qwery)),
    logOutToApp: () => dispatch(logOutAction()),
    logInToApp: () => dispatch(logInAction()),
    selectValueSortToApp: (value) => dispatch(selectValueSortAction(value)),
    inputValueSearchToApp: (value) => dispatch(inputValueSearchAction(value)),
    handlerClickSearchToApp: () => dispatch(handlerClickSearchAction()),
    statsTotalApp: (data) => dispatch(statsTotalAction(data)),
    photosPhotographerApp: (data) => {
      dispatch(loadPhotosPhotographerAction(data))},
  })
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
