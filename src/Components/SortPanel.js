import React from 'react';

const SortPhotos = (props) => {

	const {
		sorting, 
		selectValueSort,
	    loadPhotoFromApp } = props;

	return (
		<select
			value={sorting}
            onChange={(ev) => {
            	loadPhotoFromApp();
            	selectValueSort(ev.target.value);
            }} 
			className="form-control form-control-sm">
	  			<option value='popular'>Popular</option>
	  			<option value='latest'>Latest</option>
	  			<option value='oldest'>Oldest</option>
		</select>
	);
}

export default SortPhotos;