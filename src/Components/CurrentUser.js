import React from 'react';
import Loader from './Loader';
import Profile from './Profile';
import EditingProfile from './EditingProfile';

import './Profile.css';

const CurrentUser = (props) => {

	const {
		profileFromApp, 
		loading, 
		handlerInputsValue, 
		updatingCurrentUser,
		handlerVisibleFormEdit } = props

	let profile = null;

	if(Object.keys(profileFromApp).length !== 0){

		profile = (
			<div>
				<h3>
					<i className="far fa-user" data-toggle="tooltip" data-placement="top" title="User"></i>
					<span>{profileFromApp.name}</span>
					<button 
						id="editBtn"
						onClick={(ev)=>handlerVisibleFormEdit(ev.target.id)}
						className="btn btn-outline-success btn-sm">
						<i className="far fa-edit"></i>{" "}Edit Profile
					</button>
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
				<div id="editProfile" className="col-12 invisible">
					<EditingProfile
						updatingCurrentUser={updatingCurrentUser}
						profileFromApp={profileFromApp}
                		handlerInputsValue={handlerInputsValue}
                		handlerVisibleFormEdit={handlerVisibleFormEdit}/>
				</div> 
			</div>
		</div>)
}

export default CurrentUser;