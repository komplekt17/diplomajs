import React from 'react';
import Loader from './Loader';

import './TotalStats.css';

const TotalStats = ({ totalStats, loading }) => {

	const {
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
		            	<h3>Total Stats of Unsplash Service</h3>
		            	<ul>
		            		<li>
		            			<i className="fas fa-images" data-toggle="tooltip" data-placement="top" 
	                			title="photos"></i>
		            			<span>{photos}{" "}photos</span>
		            		</li>
		            		<li>
		            			<i className="fas fa-download" data-toggle="tooltip" data-placement="top" title="Download"></i>
		            			<span>{downloads}{" "}downloads</span>
		            		</li>
		            		<li>
		            			<i className="far fa-eye" data-toggle="tooltip" data-placement="top" title="views"></i>
		            			<span>{views}{" "}views</span>
	            			</li>
		            	</ul>
	            	</div>
	          	}
				</div>
			</div>
		</div>
	);
}

export default TotalStats;