import React from 'react';
import Loader from './Loader';

import './TotalStats.css';

const TotalStats = ({ totalStats, loading }) => {

	const {
		total_photos,
		photo_downloads,
		photos,
		downloads,
		views } = totalStats;

	return(
	    <div className="container-fluid">
	      	<div className="row">
	        	<div className="col-12">
	          	{
		            loading ? <Loader /> : 
		            <div className="total-stats">
		            	<h3>This is page TotalStats</h3>
		            	<ul>
		            		<li>total_photos:{" "}{total_photos}</li>
		            		<li>photo_downloads:{" "}{photo_downloads}</li>
		            		<li>photos:{" "}{photos}</li>
		            		<li>downloads:{" "}{downloads}</li>
		            		<li>views:{" "}{views}</li>
		            	</ul>
	            	</div>
	          	}
				</div>
			</div>
		</div>
	);
}

export default TotalStats;