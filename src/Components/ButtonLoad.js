import React from 'react';

import './ButtonLoad.css';

const ButtonLoad = ({searchQwery, username, funcLoadPhotos}) => {

	// ButtonLoad for SearchResalt
	if(searchQwery){ 
		return(
			<button 
	      		className="btn btn-outline-warning btn-load"  
	      		onClick={()=>funcLoadPhotos(searchQwery)}>
	      		Load<br/> Photo
	    	</button>
		);
	}

	 // ButtonLoad for PhotographerProfile
	else if(username){
		return(
			<button 
	      		className="btn btn-outline-warning btn-load"  
	      		onClick={()=>{
	      			funcLoadPhotos(username);
	      			console.log(username)
	      		}}>
	      		Load<br/> Photo
	    	</button>
		);
	}

	// ButtonLoad for ListPhotos
	else{ 
		return(
			<button 
	      		className="btn btn-outline-warning btn-load"  
	      		onClick={()=>funcLoadPhotos()}>
	      		Load<br/> Photo
	    	</button>
		);
	}
}

export default ButtonLoad;