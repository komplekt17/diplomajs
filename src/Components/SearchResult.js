import React from 'react';
import Loader from './Loader';
import ItemPhoto from './ItemPhoto';
import ButtonLoad from './ButtonLoad';
import SliderCategories from './SliderCategories';

import './SearchResult.css';

const SearchResult = (props) => {

  const {
    storeFromApp,
    loadSearchPhotos,
    handlerClickSearch,
    changeLikeStatus,
    loadProfilePhotographer,
    loadPhotoDetails,
    getDateCreated,
    loadPhotosPhotographer } = props;

  const {searchResult, loading } = storeFromApp;

  let listPhotos = null;
  let slider = null;

  if(searchResult.searchPhotos.length !== 0){
      listPhotos = (
        <ItemPhoto
            photos={searchResult.searchPhotos}
            loadProfilePhotographer={loadProfilePhotographer} 
            loadPhotosPhotographer={loadPhotosPhotographer} 
            getDateCreated={getDateCreated} 
            changeLikeStatus={changeLikeStatus} 
            loadPhotoDetails={loadPhotoDetails}/>);
      slider = (// извлекаем тэги первой фотографии
        <SliderCategories 
          tags={searchResult.searchPhotos[0].tags}
          loadSearchPhotos={loadSearchPhotos}
          handlerClickSearch={handlerClickSearch}/>
      );
  }
    
  return (
    <div className="container-fluid">
      <div className="row">
        {slider}
      </div>
      <div className="row">
        <div className="col-12">
          {
            loading ? <Loader /> :
          <div className="search-result"> 
          <h4>SearchResult</h4>
            <ul>
              <li>
                <i className="fas fa-search"></i>
                <span>Search Qwery: "{searchResult.qwery}"</span>
              </li>
              <li>
                <i className="fas fa-images" data-toggle="tooltip" data-placement="top" title="photos"></i>
                <span>Total Photos: {searchResult.totalPhotos}</span>
              </li>
              <li>
                <i className="far fa-copy" data-toggle="tooltip" data-placement="top" title="pages"></i>
                <span>Total Pages: {searchResult.pages}</span>
              </li>
              <li>
                <i className="fas fa-download" data-toggle="tooltip" data-placement="top" title="Download"></i>
                <span>Downloaded: {searchResult.searchPhotos.length} photos</span>
              </li>
            </ul>
          </div>
          }
        	{listPhotos}
        </div>
        <div className="col-12">
          {
            loading ? <Loader /> : 
            <ButtonLoad 
              searchQwery={searchResult.qwery}
              funcLoadPhotos={loadSearchPhotos}/>
          }
        </div>
      </div>
    </div>
  );
}

export default SearchResult;