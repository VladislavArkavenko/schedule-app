import React, { Component } from 'react';
import AddWindow from './addWindow';
import './addButton.css';

class AddButton extends Component {
    state = {
        showWindow: false
    }

    toggleWindow = () => {
        this.setState({
            showWindow: !this.state.showWindow
        })
    }

    render(){
        return (
            <div>
                <div className="add-button" >
                    <div className="add-button-wrapper" onClick={ () => {this.toggleWindow(); this.props.closeMenu();} } >
                        <div className="cross" />
                        <div className="cross" />
                        <p>Add new class </p>
                    </div>
                </div>

                { this.state.showWindow && < AddWindow closeWindow = { () => {this.toggleWindow()} } /> }
            </div>
        )
    }
}

export default AddButton;