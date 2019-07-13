import React from 'react';
import { Link } from "react-router-dom";

import './SearchPhotos.css'

const SearchPhotos = (props) => {

	const { 
		inputValueSearch, 
		searchQwery,
		loadSearchPhotos, 
		handlerClickSearch } = props;

	return (
		<div className="input-group mb-3">
	        <input
	            onChange={(ev) => {
	            	inputValueSearch(ev.target.value);
	            }} 
	            id="Search"  
	        	type="text" 
	        	className="form-control-sm" 
	        	placeholder="Search"
	        	aria-label="Search" aria-describedby="button-search"/>
	        	{searchQwery === '' ? "" :
	      		<Link to="/search-result/">
		        	<div
		        	onClick={()=>{
		        		let elem = document.getElementById("Search");
		        		if(elem.value !== ''){
		        			handlerClickSearch();
		        			loadSearchPhotos(searchQwery);
		        			elem.value = '';
		        		}
		        	}}
		        	className="input-group-append">
			        	<span className="input-group-text">
			        		<i className="fas fa-search"></i>
			        	</span>
		        	</div>
	        	</Link>
	        	}
      	</div>
	);
}

export default SearchPhotos;