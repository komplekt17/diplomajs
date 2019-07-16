import React from 'react';
import { Link } from "react-router-dom";
import './Messages.css';

const AlertMessage = ({goLogIn}) => {
	return(
		<div className="modal fade" id="modal-alert" tabIndex="-1" role="dialog" 
	        aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
	      <div className="modal-dialog modal-dialog-centered" role="document">
	        <div className="modal-content">
	          <div className="modal-header alert-danger">
	            <h5 className="modal-title" id="exampleModalLongTitle">Warning</h5>
	            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
	              <span aria-hidden="true">&times;</span>
	            </button>
	          </div>
	          <div className="modal-body">
	            <div className="alert">
	              If You put like, Get
	              	<Link onClick={()=>goLogIn()} to="/" className="alert-link">
	               {" "}Authorization
	               </Link>, please. 
	            </div>
	          </div>
	          <div className="modal-footer alert-danger">
	            <button type="button" className="btn btn-secondary" data-dismiss="modal">
	              Close
	            </button>
	          </div>
	        </div>
	      </div>
	    </div>
	);
}

const SuccessMessage = () => {
	return(
		<div className="modal fade" id="modal-success" tabIndex="-1" role="dialog" 
	        aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
	      <div className="modal-dialog modal-dialog-centered" role="document">
	        <div className="modal-content">
	          <div className="modal-header alert-success">
	            <h5 className="modal-title" id="exampleModalLongTitle">Message</h5>
	            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
	              <span aria-hidden="true">&times;</span>
	            </button>
	          </div>
	          <div className="modal-body">
	            <div className="alert">
	              Your changes sent success on server
	            </div>
	          </div>
	          <div className="modal-footer alert-success">
	            <button type="button" className="btn btn-secondary" data-dismiss="modal">
	              Close
	            </button>
	          </div>
	        </div>
	      </div>
	    </div>
	);
}

export {AlertMessage, SuccessMessage};
