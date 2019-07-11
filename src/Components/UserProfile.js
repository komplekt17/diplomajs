import React from 'react';
import Loader from './Loader';

import './UserProfile.css';

const UserProfile = ({profileFromApp, loading}) => {

	let profile = null;

	if(Object.keys(profileFromApp).length !== 0){
		console.log(profileFromApp)
		profile = (
		<div className="user">
			<div className="user-avatar">
				<img 
					src={profileFromApp.profile_image.large} 
					alt="avatar"/>
			</div>
			<div className="user-details">
				<ul>
					<li>
						<i className="far fa-user" data-toggle="tooltip" data-placement="top" title="User"></i>
						<span>{profileFromApp.name}</span>
					</li>
					<li>
                		<i className="far fa-envelope" data-toggle="tooltip" data-placement="top" title="mail"></i>
						<span>{profileFromApp.email}</span>
					</li>
					<li>
                		<i className="far fa-address-book" data-toggle="tooltip" data-placement="top" title="identive"></i>
						<span>{profileFromApp.id}</span>
					</li>
					<li>
                		<i className="fab fa-instagram" data-toggle="tooltip" data-placement="top" title="instagram"></i>
						<span>{profileFromApp.instagram_username}</span>
					</li>
					<li>
                		<i className="fab fa-twitter" data-toggle="tooltip" data-placement="top" title="twitter"></i>
						<span>{profileFromApp.twitter_username}</span>
					</li>
					<li>
                		<i className="fas fa-map-marker-alt" data-toggle="tooltip" data-placement="top" title="Location"></i>
						<span>{profileFromApp.location}</span>
					</li>
					<li>
                		<i className="far fa-thumbs-up" data-toggle="tooltip" data-placement="top" title="total_likes"></i>
						<span>{profileFromApp.total_likes}</span>{" "}likes
					</li>
					<li>
                		<i className="fas fa-images" data-toggle="tooltip" data-placement="top" 
                    			title="photos"></i>
						<span>{profileFromApp.total_photos}{" "}photos</span>
					</li>
					<li>
						<i className="far fa-images" data-toggle="tooltip" data-placement="top" title="collections"></i>
						<span>
							{profileFromApp.total_collections}{" "}collections
						</span>
					</li>
					<li>
                		<i className="fas fa-users" data-toggle="tooltip" data-placement="top" title="followers"></i>
						<span>
							{profileFromApp.followers_count}{" "}followers
						</span>
					</li>
					<li>
                		<i className="fas fa-user-friends" data-toggle="tooltip" data-placement="top" title="following"></i>
						<span>
							{profileFromApp.following_count}{" "}following
						</span>
					</li>
				</ul>
			</div>
		</div>
		);
	}

	return (
		<div className="container">
			<div className="row">
				<div className="col-12">
					<h3>Hello, {profileFromApp.name}</h3>
					{loading ? <Loader/> : profile}
				</div>
			</div>
		</div>)
}

export default UserProfile;