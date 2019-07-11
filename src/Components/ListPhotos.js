import React from 'react';
import Loader from './Loader';
import ItemPhoto from './ItemPhoto';

import './ListPhoto.css';

const ListPhotos = (props) => {

  const {
    storeFromApp,
    loadPhotoFromApp,
    changeLikeStatus,
    loadProfilePhotographer,
    loadPhotoDetails,
    getDateCreated,
    loadPhotosPhotographer } = props;

  const {photos, loading} = storeFromApp;

  let listPhotos = null;

  if(photos.length !== 0){
      listPhotos = (
        <ItemPhoto
            photos={photos}
            loadProfilePhotographer={loadProfilePhotographer} 
            loadPhotosPhotographer={loadPhotosPhotographer} 
            getDateCreated={getDateCreated} 
            changeLikeStatus={changeLikeStatus} 
            loadPhotoDetails={loadPhotoDetails}/>);
  }
    
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          {listPhotos}
        </div>
        <div className="col-12">
          {
            loading ? <Loader /> : 
            <button 
              className="btn btn-outline-warning btn-load"  
              onClick={()=>loadPhotoFromApp()}>
              Load<br/> Photo
            </button>
          }
        </div>
      </div>
    </div>
  );
};

export default ListPhotos;
