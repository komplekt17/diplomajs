import React from 'react';
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
  getProfilePhotographer, 
  getStatsTotal,
  getPhotographerPhotos } from "../Services/unsplash-service";
import {
  loadPhotoAction, 
  likePhotoAction, 
  disLikePhotoAction, 
  loadProfileAction,
  loadPhotographerAction,
  loadPhotoDetailsAction,
  logOutAction,
  logInAction,
  selectValueSortAction,
  inputValueSearchAction, 
  statsTotalAction,
  photosPhotographerAction } from '../Actions/actions';

import Header from '../Components/Header';
import ListPhotos from '../Components/ListPhotos';
import PhotographerProfile from '../Components/PhotographerProfile';
import UserProfile from '../Components/UserProfile';
import PhotoDetails from '../Components/PhotoDetails';
import TotalStats from '../Components/TotalStats';

import './App.css';

class App extends React.Component {

  loadPhotos = () => {

      const { loadPhotosToApp, storeToApp } = this.props;

      let token = sessionStorage.getItem('token'); 
      const data = getlistPhoto(
        storeToApp.startLoad, 
        storeToApp.finishLoad, 
        storeToApp.sorting, 
        token);
      loadPhotosToApp(data, storeToApp.finishLoad);
  } 

  // получение отформатированной даты создания/редактирования
  getDateCreated = (string) => {
      const arrD = string.split('T');
      const arrT = arrD[1].split('-');
      const result = arrD[0]+", "+arrT[0];
      return result;
  }

  componentDidMount = () => {
    let {
      //photos,  
      startLoad,
      finishLoad } = this.props.storeToApp;
    this.loadPhotos(startLoad, finishLoad);

    // if(photos.length === 0){
    // }
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
    photosPhotographerApp } = this.props;

  let {
    profileUser,
    photoDetails,
    firstPhoto,
    lastPhoto,
    loading,
    sorting,
    searchQwery,
    totalStats, 
    error } = storeToApp;

  // обработка лайков/дизлайков
  const changeLikeStatus = (id, status) => {
    //console.log(id, status);
    if (sessionStorage.getItem('token') === 'undefined' || 
    sessionStorage.getItem('token') === '' || 
    !sessionStorage.getItem('token')){ 
      alert('get token, please');
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

  // загрузка фото фотографа
  const loadPhotosPhotographer = (username) => {
    const data = getPhotographerPhotos(username, firstPhoto, lastPhoto, sorting);
    photosPhotographerApp(data, lastPhoto);
  }

  const getTotalStats = () => {
    const data = getStatsTotal();
    statsTotalApp(data);
  }

  // обработчик загрузки деталей фото
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
  console.log(storeToApp);

  return (
      <Router>
        <Header 
          profileFromApp={profileUser}
          sorting={sorting}
          searchQwery={searchQwery}
          logInFromApp={logInToApp}
          logOutFromApp={logOutToApp}
          loadProfileFromApp={loadProfileToApp}
          selectValueSort={selectValueSortToApp}
          inputValueSearch={inputValueSearchToApp} 
          loadPhotoFromApp={this.loadPhotos}
          getTotalStats={getTotalStats}/>
        <Switch>
          <Route 
            path="/user/"
            render={()=>(
              <UserProfile 
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
              <PhotographerProfile 
                storeFromApp={storeToApp}
                loadProfilePhotographer={loadProfilePhotographer}
                loadPhotosPhotographer={loadPhotosPhotographer}
                loadPhotoDetails={loadPhotoDetails}
                getDateCreated={this.getDateCreated}
                changeLikeStatus={changeLikeStatus}/>
            )}/>
          <Route
            path="/photo/:id" 
            render={()=>(
              <PhotoDetails
                photoDetails={photoDetails}
                getDateCreated={this.getDateCreated} 
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
                getDateCreated={this.getDateCreated}
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
    loadPhotosToApp: (data, end) => {
      dispatch(loadPhotoAction(data, end))},
    likePhotoToApp: (idx, status) => {
      dispatch(likePhotoAction(idx, status))},
    disLikePhotoToApp: (idx, status) => {
      dispatch(disLikePhotoAction(idx, status))},
    loadProfileToApp: (data) => dispatch(loadProfileAction(data)),
    loadPhotographerToApp: (data) => dispatch(loadPhotographerAction(data)),
    loadPhotoDetailsToApp: (data) => dispatch(loadPhotoDetailsAction(data)),
    logOutToApp: () => dispatch(logOutAction()),
    logInToApp: () => dispatch(logInAction()),
    selectValueSortToApp: (value) => dispatch(selectValueSortAction(value)),
    inputValueSearchToApp: (value) => dispatch(inputValueSearchAction(value)),
    statsTotalApp: (data) => dispatch(statsTotalAction(data)),
    photosPhotographerApp: (data, end) => {
      dispatch(photosPhotographerAction(data, end))},
  })
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
