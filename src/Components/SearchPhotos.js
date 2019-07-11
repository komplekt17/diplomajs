import React from 'react';

const SearchPhotos = ({ inputValueSearch, searchQwery }) => {
	return (
		<div className="input-group mb-3">
	        <input
				value={searchQwery}
	            onChange={(ev) => {
	            	inputValueSearch(ev.target.value);
	            }}  
	        	type="text" 
	        	className="form-control-sm" 
	        	placeholder="Search"
	        	aria-label="Search" aria-describedby="button-search"/>
	        <div
	        	className="input-group-append">
	        	<span className="input-group-text" id="Search">
	        		<i className="fas fa-search"></i>
	        	</span>
	        </div>
      	</div>
	);
}

export default SearchPhotos;