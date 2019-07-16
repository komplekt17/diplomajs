import React from 'react';

const EditingProfile = (props) => {

	const {
		profileFromApp, 
		handlerInputsValue, 
		updatingCurrentUser,
		handlerVisibleFormEdit } = props;

	// Валидатор форм
	const validateForm = (elemId, obj) => {

		// счётчик количества НЕкорректно заполненных полей
		let invalidCount = 0;

		for(var key in obj){

			if(obj[key] === null || obj[key] === ''){
				document.getElementById(key).classList.remove("is-invalid", "is-valid");
				document.getElementById(key).previousSibling.firstChild
					.classList.remove("text-danger", "text-success");
				
				document.getElementById(key).classList.add("is-invalid");
				document.getElementById(key).previousSibling.firstChild
					.classList.add("text-danger");

				invalidCount += 1;
			}
			else{
				document.getElementById(key).classList.remove("is-invalid", "is-valid");
				document.getElementById(key).previousSibling.firstChild
					.classList.remove("text-danger", "text-success");

				document.getElementById(key).classList.add("is-valid");
				document.getElementById(key).previousSibling.firstChild
					.classList.add("text-success");
			}
		}

		if(invalidCount === 0){
			updatingCurrentUser({
				username: obj.username,
			   	firstName: obj.first_name,
			   	lastName: obj.last_name,
			   	email: obj.email,
			   	url: obj.portfolio_url,
			   	location: obj.location,
			   	bio: obj.bio,
			   	instagramUsername: obj.instagram_username
			});

			handlerVisibleFormEdit(elemId);
		}
	}

	return(
		<form className="needs-validation" noValidate onSubmit={(ev)=>ev.preventDefault()}>
			<div className="form-row">
			    <div className="col-md-4 mb-3">
      				<label htmlFor="username">Edit Username</label>
			      	<div className="input-group">
				        <div className="input-group-prepend">
				          	<span className="input-group-text" 
				          		id="inputGroupUserName">
				          		<i className="far fa-user"></i>
				          	</span>
				        </div>
			        	<input
			        		onChange={(ev) => handlerInputsValue(ev.target.value, ev.target.id)}
			        		value={profileFromApp.username}
			        		type="text" className="form-control" 
			        		id="username" placeholder="Enter your UserName"
			        		aria-describedby="inputGroupUserName" />
				        <div className="invalid-feedback">
				          Enter your UserName.
				        </div>
			      	</div>
			    </div>
			    <div className="col-md-4 mb-3">
      				<label htmlFor="first_name">Edit FirstName</label>
			      	<div className="input-group">
				        <div className="input-group-prepend">
				          	<span className="input-group-text" id="inputGroupFirstName">
				          		<i className="fas fa-id-badge" title="FirstName"></i>
				          	</span>
				        </div>
			        	<input
			        		onChange={(ev) => handlerInputsValue(ev.target.value, ev.target.id)}
			        		value={profileFromApp.first_name}
			        		type="text" className="form-control" 
			        		id="first_name" placeholder="Enter your FirstName"
			        		aria-describedby="inputGroupFirstName" />
				        <div className="invalid-feedback">
				          Enter your FirstName.
				        </div>
			      	</div>
			    </div>
			    <div className="col-md-4 mb-3">
      				<label htmlFor="last_name">Edit LastName</label>
			      	<div className="input-group">
				        <div className="input-group-prepend">
				          	<span className="input-group-text" id="inputGroupLastName">
				          		<i className="fas fa-id-badge" title="LastName"></i>
				          	</span>
				        </div>
			        	<input
			        		onChange={(ev) => handlerInputsValue(ev.target.value, ev.target.id)}
			        		value={profileFromApp.last_name}
			        		type="text" className="form-control" 
			        		id="last_name" placeholder="Enter your LastName"
			        		aria-describedby="inputGroupLastName" />
				        <div className="invalid-feedback">
				          Enter your LastName.
				        </div>
			      	</div>
			    </div>
			</div>
			<div className="form-row">
			    <div className="col-md-4 mb-3">
      				<label htmlFor="email">Edit Email</label>
			      	<div className="input-group">
				        <div className="input-group-prepend">
				          	<span className="input-group-text" id="inputGroupEmail">
				          		<i className="far fa-envelope" title="Email"></i>
				          	</span>
				        </div>
			        	<input
			        		onChange={(ev) => handlerInputsValue(ev.target.value, ev.target.id)}
			        		value={profileFromApp.email}
			        		type="text" className="form-control"
			        		id="email" placeholder="Enter your Email"
			        		aria-describedby="inputGroupEmail" />
				        <div className="invalid-feedback">
				          Enter your Email.
				        </div>
			      	</div>
			    </div>
			    <div className="col-md-4 mb-3">
      				<label htmlFor="portfolio_url">Edit Your site-portfolio</label>
			      	<div className="input-group">
				        <div className="input-group-prepend">
				          	<span className="input-group-text" id="inputGroupPortfolio">
				          		<i className="fas fa-link" title="Portfolio"></i>
				          	</span>
				        </div>
			        	<input
			        		onChange={(ev) => handlerInputsValue(ev.target.value, ev.target.id)}
			        		value={profileFromApp.portfolio_url}
			        		type="text" className="form-control" 
			        		id="portfolio_url" placeholder="Enter your Site Portfolio"
			        		aria-describedby="inputGroupPortfolio"/>
				        <div className="invalid-feedback">
				          Enter your Site Portfolio. If you have not it enter "-"
				        </div>
			      	</div>
			    </div>
			    <div className="col-md-4 mb-3">
      				<label htmlFor="location">Edit Your location</label>
			      	<div className="input-group">
				        <div className="input-group-prepend">
				          	<span className="input-group-text" id="inputGroupLocation">
				          		<i className="fas fa-map-marker-alt" title="Location"></i>
				          	</span>
				        </div>
			        	<input
			        		onChange={(ev) => handlerInputsValue(ev.target.value, ev.target.id)}
			        		value={profileFromApp.location}
			        		type="text" className="form-control" 
			        		id="location" placeholder="Enter your Location"
			        		aria-describedby="inputGroupLocation" />
				        <div className="invalid-feedback">
				          Enter your Location.
				        </div>
			      	</div>
			    </div>
			</div>
			<div className="form-row">
			    <div className="col-md-4 mb-3">
      				<label htmlFor="bio">Edit Your bio</label>
			      	<div className="input-group">
				        <div className="input-group-prepend">
				          	<span className="input-group-text" id="inputGroupBio">
				          		<i className="fas fa-file-alt" data-toggle="tooltip"
							 data-placement="top" title="Bio"></i>
				          	</span>
				        </div>
			        	<input
			        		onChange={(ev) => handlerInputsValue(ev.target.value, ev.target.id)}
			        		value={profileFromApp.bio}
			        		type="text" className="form-control" 
			        		id="bio" placeholder="Enter your Bio"
			        		aria-describedby="inputGroupBio" />
				        <div className="invalid-feedback">
				          Enter your Bio.
				        </div>
			      	</div>
			    </div>
			    <div className="col-md-4 mb-3">
      				<label htmlFor="instagram_username">Edit instagramUsername</label>
			      	<div className="input-group">
				        <div className="input-group-prepend">
				          	<span className="input-group-text" id="inputGroupPrepend">
				          		<i className="fab fa-instagram" title="Instagram"></i>
				          	</span>
				        </div>
			        	<input
			        		onChange={(ev) => handlerInputsValue(ev.target.value, ev.target.id)}
			        		value={profileFromApp.instagram_username}
			        		type="text" className="form-control" 
			        		id="instagram_username" placeholder="Enter your Instagram"
			        		aria-describedby="inputGroupPrepend" />
				        <div className="invalid-feedback">
				          Enter your Instagram Username. If you have not it enter "-"
				        </div>
			      	</div>
			    </div>
			    <div className="col-md-4 mb-3">
      				<label htmlFor="btnSave">.</label>
			      	<div className="input-group">
				        <button 
				        	id="btnSave"
				        	className="btn btn-outline-warning"
				        	onClick={(ev)=>validateForm(ev.target.id,
				        		{
				        			username: profileFromApp.username,
				        			first_name: profileFromApp.first_name,
				        			last_name: profileFromApp.last_name,
				        			email: profileFromApp.email,
				        			portfolio_url: profileFromApp.portfolio_url,
				        			location: profileFromApp.location,
				        			bio: profileFromApp.bio,
				        			instagram_username: profileFromApp.instagram_username,
				        		})}>
				        	Save changes on server
				        </button>
			      	</div>
			    </div>
			</div>
		</form>
	);
}


export default EditingProfile;