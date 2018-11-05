import React from 'react';
import './table.css';

const Table = ( props ) => {
  let  title1, title2;

  if(props.editMode){
      title1 = "Edite mode is enabled";
      title2 = "Click on item you want to delete";
  } else {
      title1 = props.draggable.subject ? `${props.draggable.subject}` : 'Schedule for this week';
      title2 = props.draggable.teacher ? `${props.draggable.teacher}` : 'Enjoy your studying';
  }

  Array.prototype.forEach.call( document.getElementsByTagName("td"), (td)=>{
      if (td.className !== "time") td.addEventListener('click', e => props.insertData(e), false)
  });

  return (
    <div className="table-main">
      <div className="table-title">
        <h3>{title1}</h3>
        <p>{title2}</p>
      </div>
      <table className="table-fill">
        <thead>
          <tr>
            <th className = "time"></th>
            <th>Monday</th>
            <th>Tuesday</th> 
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className = "time"> 08:30 </td>
            <td/>
            <td/>
            <td/>
            <td/>
            <td/>
          </tr>
          <tr>
            <td className = "time"> 10:25 </td>
            <td/>
            <td/>
            <td/>
            <td/>
            <td/>
          </tr>
          <tr>
            <td className = "time"> 12:20 </td>
            <td/>
            <td/>
            <td/>
            <td/>
            <td/>
          </tr>
          <tr>
            <td className = "time"> 14:15 </td>
            <td/>
            <td/>
            <td/>
            <td/>
            <td/>
          </tr>
          <tr>
            <td className = "time"> 16:10 </td>
            <td/>
            <td/>
            <td/>
            <td/>
            <td/>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;