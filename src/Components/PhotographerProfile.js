import React from 'react';
import Loader from './Loader';
import ItemPhoto from './ItemPhoto';

import './PhotographerProfile.css';

const PhotographerProfile = (props) => {

	const { 
		storeFromApp,
		loadPhotosPhotographer,
		loadProfilePhotographer,
		getDateCreated,
		changeLikeStatus,
		loadPhotoDetails } = props

	const {
		photosPhotographer,
		profilePhotographer,
		loading, } = storeFromApp

	let profile = null;
	let listPhotos = null;
	

	// извлечение тегов
	const getTags = (arr) => {
		let tags = null;

		for(let i=0; i<arr.length; i++){
			tags += arr[i].title+", ";
		}
		return tags;
	}

	if(Object.keys(profilePhotographer).length !== 0){

		profile = (
			<div className="user">
				<div className="user-avatar">
					<img src={profilePhotographer.profile_image.large} alt="avatar"/>
				</div>
				<div className="user-bio">
					<p>
                      	<i className="fas fa-tags" data-toggle="tooltip" data-placement="top" title="Tags"></i>
	                      	{getTags(profilePhotographer.tags.aggregated)}
                  	</p>
					<p>
						<i className="fas fa-file-alt" data-toggle="tooltip"
							 data-placement="top" title="Bio"></i>
							 {profilePhotographer.bio}
				 	</p>
				</div>
				<div className="photographer-details">
					<ul>
						<li>
                    		<i className="fas fa-id-badge" data-toggle="tooltip" data-placement="top" title="identificator"></i>
							<span>{profilePhotographer.id}</span>
						</li>
						<li>
                    		<i className="fab fa-instagram" data-toggle="tooltip" data-placement="top" title="instagram"></i>
							<span>{profilePhotographer.instagram_username}</span>
						</li>
						<li>
                    		<i className="fab fa-twitter" data-toggle="tooltip" data-placement="top" title="twitter"></i>
							<span>{profilePhotographer.twitter_username}</span>
						</li>
					</ul>
					<ul>
						<li>
                    		<i className="fas fa-map-marker-alt" data-toggle="tooltip" data-placement="top" title="Location"></i>
							<span>{profilePhotographer.location}</span>
						</li>
						<li>
							<i className="fas fa-link" data-toggle="tooltip" data-placement="top" title="Link profile"></i>
							<span className="img_stats-item">
		                        <a href={profilePhotographer.links.html} target="_blank" rel="noopener noreferrer">
		                          Unsplash profile
		                        </a>
	                      	</span>
						</li>
					</ul>
					<ul>
						<li>
                    		<i className="far fa-thumbs-up" data-toggle="tooltip" data-placement="top" title="total_likes"></i>
							<span>
								{profilePhotographer.total_likes}{" "}likes
							</span>
						</li>
						<li>
                    		<i className="fas fa-images" data-toggle="tooltip" data-placement="top" 
                    			title="photos"></i>
							<span>
								{profilePhotographer.total_photos}{" "}photos
							</span>
						</li>
						<li>
                    		<i className="far fa-images" data-toggle="tooltip" data-placement="top" 
                    			title="collections"></i>
							<span>
								{profilePhotographer.total_collections}
								{" "}collections
							</span>
						</li>
					</ul>
					<ul>
						<li>
                    		<i className="fas fa-users" data-toggle="tooltip" data-placement="top" 
                    			title="followers"></i>
							<span>
								{profilePhotographer.followers_count}
								{" "}followers
							</span>
						</li>
						<li>
                    		<i className="fas fa-user-friends" data-toggle="tooltip" data-placement="top" 
                    			title="following"></i>
							<span>
								{profilePhotographer.following_count}
								{" "}following
							</span>
						</li>
	                  	<li>
	                    	<i className="fas fa-download" data-toggle="tooltip" data-placement="top" title="Download"></i>
	                    	<span>
		                    	{profilePhotographer.downloads}
		                    	{" "}downloads
	                    	</span>
	                  	</li>
					</ul>
				</div>
			</div>
		);
		if(photosPhotographer.length !== 0){
			listPhotos  = (
				<div>
					<h3>Photos Photographer</h3>
			        <ItemPhoto
			            photos={photosPhotographer}
			            loadProfilePhotographer={loadProfilePhotographer} 
			            loadPhotosPhotographer={loadPhotosPhotographer} 
			            getDateCreated={getDateCreated} 
			            changeLikeStatus={changeLikeStatus} 
			            loadPhotoDetails={loadPhotoDetails}/>
				</div>);
	}
}
	return (
		<div className="container-fluid">
			<div className="row">
				<div className="col-12">
					<h3>
						<i className="far fa-user" data-toggle="tooltip" data-placement="top" title="User"></i>
						<span>{profilePhotographer.name}</span>
					</h3>
					{loading ? <Loader/> : profile}
				</div>
				<div className="col-12">
					{listPhotos}
				</div>
		        <div className="col-12">
		          {
		            loading ? <Loader /> : ""
		            /*<button 
		              className="btn btn-outline-warning btn-load"  
		              onClick={()=>{
		              	loadPhotosPhotographer(profilePhotographer.username);
		              	console.log(profilePhotographer.username);
		              }}>
		              Load<br/> Photo
		            </button>*/
		          }
		        </div>
			</div>
		</div>)
}

export default PhotographerProfile;