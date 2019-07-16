import React from 'react';

import './Profile.css';

const Profile = ({ profile }) => {

	// извлечение тегов
	const getTags = (arr) => {
		let tags = "";

		for(let i=0; i<arr.length; i++){
			tags += arr[i].title+", ";
		}
		if(tags === null) return null;
		else return tags;
	}

	let profileItems = null;

	if(Object.keys(profile).length !== 0){

		profileItems = (
		<div>
			<div className="avatar">
				<img src={profile.profile_image.large} alt="avatar"/>
			</div>
			<div className="profile">
				<div className="profile-bio">
					<div>
						<i className="fas fa-file-alt" data-toggle="tooltip"
							 data-placement="top" title="Bio"></i>
						 <span>{profile.bio}</span>
				 	</div>
					<div>
	                  	<i className="fas fa-tags" data-toggle="tooltip" data-placement="top" title="Tags"></i>
	                      	{getTags(profile.tags.custom)}{" "}
	                      	{getTags(profile.tags.aggregated)}
	              	</div>
				</div>
				<div className="profile-details">
					<ul>
						<li>
							<i className="far fa-user" data-toggle="tooltip" data-placement="top" title="User"></i>
							<span>{profile.first_name}{" "}{profile.last_name}</span>
						</li>
						<li>
							<i className="far fa-smile" data-toggle="tooltip" data-placement="top" title="UserName"></i>
							<span>{profile.username}</span>
						</li>
						<li>
							<i className="far fa-envelope" data-toggle="tooltip" data-placement="top" title="email"></i>
							<span>{profile.email}</span>
						</li>
						<li>
	                		<i className="fab fa-instagram" data-toggle="tooltip" data-placement="top" title="instagram"></i>
							<span>{profile.instagram_username}</span>
						</li>
						<li>
	                		<i className="fab fa-twitter" data-toggle="tooltip" data-placement="top" title="twitter"></i>
							<span>{profile.twitter_username}</span>
						</li>
						<li>
							<i className="fas fa-link" data-toggle="tooltip" data-placement="top" title="Link profile"></i>
							<span className="img_stats-item">
		                        <a href={profile.links.html} target="_blank" rel="noopener noreferrer">
		                          Unsplash profile
		                        </a>
	                      	</span>
						</li>
						<li>
							<i className="fas fa-link" data-toggle="tooltip" data-placement="top" title="Portfolio"></i>
							<span>
		                        <a href={profile.portfolio_url} target="_blank" rel="noopener noreferrer">
		                          Site
		                        </a>
	                        </span>
						</li>
					</ul>
					<ul>
						<li>
	                		<i className="fas fa-id-badge" data-toggle="tooltip" data-placement="top" title="identificator"></i>
							<span>{profile.id}</span>
						</li>
						<li>
	                		<i className="far fa-thumbs-up" data-toggle="tooltip" data-placement="top" title="total_likes"></i>
							<span>
								{profile.total_likes}{" "}likes
							</span>
						</li>
						<li>
	                		<i className="fas fa-images" data-toggle="tooltip" data-placement="top" 
	                			title="photos"></i>
							<span>
								{profile.total_photos}{" "}photos
							</span>
						</li>
						<li>
	                		<i className="far fa-images" data-toggle="tooltip" data-placement="top" 
	                			title="collections"></i>
							<span>
								{profile.total_collections}
								{" "}collections
							</span>
						</li>
						<li>
	                		<i className="fas fa-users" data-toggle="tooltip" data-placement="top" 
	                			title="followers"></i>
							<span>
								{profile.followers_count}
								{" "}followers
							</span>
						</li>
						<li>
	                		<i className="fas fa-user-friends" data-toggle="tooltip" data-placement="top" 
	                			title="following"></i>
							<span>
								{profile.following_count}
								{" "}following
							</span>
						</li>
	                  	<li>
	                    	<i className="fas fa-download" data-toggle="tooltip" data-placement="top" title="Download"></i>
	                    	<span>
		                    	{profile.downloads}
		                    	{" "}downloads
	                    	</span>
	                  	</li>
						<li>
	                		<i className="fas fa-map-marker-alt" data-toggle="tooltip" data-placement="top" title="Location"></i>
							<span>{profile.location}</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
		);
	}

	return profileItems;
}

export default Profile;