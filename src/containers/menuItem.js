import React from 'react';
import './menuItem.css';

const MenuItem = ( props ) => {
  return (
  	<div className="menu-item" onClick={ () => { props.closeMenu(); props.createDraggable(props.data) } }>
  		<div className = "delete-button" onClick={ (e) => { e.stopPropagation(); props.delete(props.data.id) } }>
			<i className="fa fa-trash"> </i>
		</div>
  		<h1 className="lesson"> {props.data.subject} </h1>
       	<h2 className="teacher"> {props.data.teacher} </h2>
    	<p  className="room"> {props.data.room} </p>
    </div>
  );
};

export default MenuItem;