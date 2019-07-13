import React from 'react';
import { Link } from "react-router-dom";
import Loader from './Loader';

import './PhotoDetails.css';

const PhotoDetail = (props) => {

	const { 
		photoDetails, 
		getDateCreated,
		loadProfilePhotographer, 
		loadPhotosPhotographer,
		loading } = props;

	let details = null;

	if(Object.keys(photoDetails).length !== 0){

	details = (
		<div className="photo">
			<div className="photo-img">
				<img src={photoDetails.urls.small} alt="photography" />
			</div>
			<div className="photo-details">
				<p>
					<i className="fas fa-file-alt" data-toggle="tooltip" data-placement="top" title="Bio"></i> 
				 	{" "}{photoDetails.description}
				 </p>	
				<ul>
					<li>
						<i className="far fa-user" data-toggle="tooltip" data-placement="top" title="User"></i>
						<Link onClick={()=>{
								loadProfilePhotographer(photoDetails.user.username);
								loadPhotosPhotographer(photoDetails.user.username);
							}}
							to={`/photographer/${photoDetails.user.name}`} >
                    		{"  "}{photoDetails.user.name}
                  		</Link>
					</li>
					<li>
						<i className="far fa-thumbs-up"></i>
						{photoDetails.likes}{" "}likes
					</li>
					<li>
						<i className="far fa-eye" data-toggle="tooltip" data-placement="top" title="views"></i>
						{photoDetails.views}{" "}views
					</li>
					<li>
	                    <i className="fas fa-calendar-alt" data-toggle="tooltip" data-placement="top" title="Created date"></i>
	                    created_at:{" "}{getDateCreated(photoDetails.created_at)}
	                </li>
					<li>
	                    <i className="far fa-calendar-alt" data-toggle="tooltip" data-placement="top" title="Created date"></i>
	                    updated_at:{" "}{getDateCreated(photoDetails.updated_at)}
	                </li>
					<li>
	                    <i className="fas fa-download" data-toggle="tooltip" data-placement="top" title="Download"></i>
	                    {photoDetails.downloads}{" "}downloads
	                </li>
					<li><i className="fas fa-arrows-alt" data-toggle="tooltip" data-placement="top" title="Original size"></i>
	                      {photoDetails.width+"x"+photoDetails.height}px
	                </li>
	              	<li>
	                    <i className="fas fa-palette" data-toggle="tooltip" data-placement="top" title="Color gamma"></i>
	                    <span className="img_stats-item">{photoDetails.color} - </span>
	                    <span 
	                      className="img_stats-color" 
	                      style={{backgroundColor: photoDetails.color}}>
	                    </span>
	              	</li>
					<li>
	                    <i className="fas fa-camera" data-toggle="tooltip" data-placement="top" title="model"></i>
	                    {" "}{photoDetails.exif.model}
	                </li>
	                {
	                	/*
              		<li>
	                    <i className="fas fa-download" data-toggle="tooltip" data-placement="top" title="Download"></i>
	                    <a href={`${photoDetails.links.download}?force=true`} download="" target="_blank" rel="noopener noreferrer">{" "}Download</a>
                  </li>*/
	                }
				</ul>
			</div>
		</div>
	);
	}

	return (
		<div className="container">
			<div className="row">
				<div className="col-12">
					<div className="cart-photo">
						<h3>this page is PhotoDetail</h3>
						{loading ? <Loader/> : details}
					</div>
				</div>	
			</div>
		</div>)
}

export default PhotoDetail; 