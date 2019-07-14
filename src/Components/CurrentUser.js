import React from 'react';
import Loader from './Loader';
import Profile from './Profile';

import './Profile.css';

const CurrentUser = ({profileFromApp, loading}) => {

	let profile = null;

	if(Object.keys(profileFromApp).length !== 0){

		profile = (
			<div>
				<h3>
					<i className="far fa-user" data-toggle="tooltip" data-placement="top" title="User"></i>
					<span>Hello, {profileFromApp.name}</span>
				</h3>
				<Profile profile={profileFromApp} />
			</div>
		);
	}

	return (
		<div className="container">
			<div className="row">
				<div className="col-12">
					{loading ? <Loader/> : profile}
				</div>
			</div>
		</div>)
}

export default CurrentUser;