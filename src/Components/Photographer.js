import React from 'react';
import Loader from './Loader';
import ItemPhoto from './ItemPhoto';
import Profile from './Profile';
import ButtonLoad from './ButtonLoad';

const Photographer = (props) => {

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

	let profile = <h3>Profile not downloaded yet</h3>;
	let listPhotos = <h3>Potos not downloaded yet</h3>;

	if(Object.keys(profilePhotographer).length !== 0){

		profile = (
			<div>
				<h3>
					<i className="far fa-user" data-toggle="tooltip" data-placement="top" title="User"></i>
					<span>{profilePhotographer.name}</span>
				</h3>
				<Profile profile={profilePhotographer} />
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
					{profile}
				</div>
				<div className="col-12">
					{listPhotos}
				</div>
	        	<div className="col-12"> 
	        		{loading ? <Loader/> : 
            		<ButtonLoad 
            			username={profilePhotographer.username}
            			funcLoadPhotos={loadPhotosPhotographer}/>
	        		}
		        </div>
			</div>
		</div>)
}

export default Photographer;