import React from 'react';
import $ from "jquery";
import 'jquery/dist/jquery.min.js';
import './Arrow.css';

// http://webmastermix.ru/raznoe/300-knopka-vverkh-dlya-saita.html

const Arrow = () => {
 
	$(()=>{
	 
	  $(window).scroll(function() {
	    if($(this).scrollTop() > 200) $('#toTop').fadeIn(); 
	    else $('#toTop').fadeOut();
	  });
	   
	  $('#toTop').click(function() {
	    $('body,html').animate({'scrollTop':0},800);
	  });
	});

	return(
		<div id="toTop">
			<i className="far fa-arrow-alt-circle-up" title="Arrow Up"></i>
    	</div>
	);
}

export default Arrow