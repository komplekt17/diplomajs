import React from 'react';
import { Link } from "react-router-dom";

import './SearchPanel.css'

const SearchPanel = (props) => {

	const { 
		handlerInputsValue, 
		searchQwery,
		loadSearchPhotos, 
		handlerClickSearch } = props;

	return (
		<div className="input-group mb-3">
	        <input
	            onChange={(ev) => handlerInputsValue(ev.target.value, ev.target.id)} 
	            id="search"  
	        	type="text" 
	        	className="form-control-sm" 
	        	placeholder="Search"
	        	aria-label="Search" aria-describedby="button-search"/>
	        	{searchQwery === '' ? "" :
	      		<Link to="/search-result/">
		        	<div
		        	onClick={()=>{
		        		let elem = document.getElementById("search");
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

export default SearchPanel;