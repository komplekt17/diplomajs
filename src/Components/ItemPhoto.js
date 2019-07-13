import React from 'react';
import { Link } from "react-router-dom";
import Masonry from 'react-masonry-component';
// https://www.npmjs.com/package/react-masonry-component#images-loaded-options

import './ItemPhoto.css';

// const masonryOptions = {transitionDuration: 0.8};
// const imagesLoadedOptions = { background: '.my-bg-image-el' }

const ItemPhoto = (props) => {

	const {
		photos,
		loadProfilePhotographer, 
		loadPhotosPhotographer, 
		getDateCreated, 
		changeLikeStatus, 
		loadPhotoDetails } = props

	let listPhotos = null;

	if(photos.length !== 0){
		listPhotos = photos.map((item, index)=>{
			return (
	          	<div key={index} className="image-element-class">
		            <div className="item_wrap">
		              <img 
		                src={item.urls.small} 
		                className="grid-item" alt="" />
		              <div className="img_stats">
		                <img src={item.user.profile_image.small} alt="avatar"/>
		                <span className="img_stats-item user-profile" 
		                onClick={()=>{
		                    loadProfilePhotographer(item.user.username);
		                    loadPhotosPhotographer(item.user.username);
		                  }}>
		                  <Link to={`/photographer/${item.user.username}`} >
		                    {"  "}{item.user.first_name}
		                  </Link>
		                </span>
		                <ul>
		                  <li>
		                    <i className="fas fa-palette" data-toggle="tooltip" data-placement="top" title="Color gamma"></i>
		                    <span className="img_stats-item">{item.color} - </span>
		                    <span 
		                      className="img_stats-color" 
		                      style={{backgroundColor: item.color}}>
		                    </span>
		                  </li>
	                  		<li>
		                    <i className="fas fa-download" data-toggle="tooltip" data-placement="top" title="Download"></i>
		                    <a href={`${item.links.download}?force=true`} >
		                    	<span className="img_stats-item">Download</span>
		                    </a>
		                  </li>
		                  <li>
		                    <i className="fas fa-arrows-alt" data-toggle="tooltip" data-placement="top" title="Original size"></i>
		                    <span className="img_stats-item">
		                      {item.width+"x"+item.height}px
		                    </span>
		                  </li>
		                  <li>
		                    <i className="fas fa-calendar-alt" data-toggle="tooltip" data-placement="top" title="Created date"></i>
		                    <span className="img_stats-item">
		                      {getDateCreated(item.created_at)}
		                    </span>
		                  </li>
		                  <li>
		                    <i className="fas fa-map-marker-alt" data-toggle="tooltip" data-placement="top" title="Location"></i>
		                    <span className="img_stats-item">{item.user.location}</span>
		                  </li>
		                  <div className="img_stats-buttons">
		                  {
		                    item.liked_by_user ?
		                    <button 
		                      onClick={()=>changeLikeStatus(item.id, item.liked_by_user)}
		                      className="btn btn-info btn-sm">
		                      <i className="far fa-thumbs-down"></i>{item.likes}{" "}Likes
		                    </button>
		                  :
		                    <button 
		                      onClick={()=>changeLikeStatus(item.id, item.liked_by_user)}
		                      className="btn btn-success btn-sm">
		                      <i className="far fa-thumbs-up"></i>{item.likes}{" "}Likes
		                    </button>
		                  }
		                    <Link to={`/photo/${item.id}`}>
		                      <button 
		                        className="btn btn-primary btn-sm"
		                        onClick={()=>loadPhotoDetails(item.id)}>
		                        <i className="far fa-images"></i>
		                        More details
		                      </button>
		                    </Link>
		                  </div>
		                </ul>
		              </div>
		            </div>
	          	</div>
	        )
  		});
	}
	

	return (
      	<div className="list_photos">
            <Masonry className='masonry' >
            	{listPhotos}
            </Masonry>
      	</div>
	);
}

export default ItemPhoto;