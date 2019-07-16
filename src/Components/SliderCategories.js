import React from 'react';
import Flickity from 'react-flickity-component'

import 'flickity/dist/flickity.css';
import './SliderCategories.css';

// https://www.npmjs.com/package/react-flickity-component

const flickityOptions = {
    //groupCells: '80%',
    autoPlay: 2000,
    wrapAround: true
}

const SliderCategories = ({ tags, loadSearchPhotos, handlerClickSearch }) => {
	
	const slider = tags.map((item, index)=>{
		return(
			<div key={index} className="carousel-cell">
				<button
					onClick={(ev)=>{
						handlerClickSearch();// reset array SearchPhotos
						loadSearchPhotos(ev.target.innerHTML)
					}} 
					className="btn btn-secondary">
					{item.title}
				</button>
			</div>
		); 
	});
	
    return (
		<div className="col-12">
			<Flickity className="carousel" options={flickityOptions}>
		      {slider}
		    </Flickity>
		</div> 
    );    
}

export default SliderCategories;