import DeleteButton from "../components/deleteButton";
import SaveButton from "../components/saveButton";
import React from "react";
import './footer.css'

const footer = ( props ) => {
    return (
        <div className="footer">
            < SaveButton />
            < DeleteButton toggleMode={props.toggleMode}/>
        </div>
    )
}

export default footer;
