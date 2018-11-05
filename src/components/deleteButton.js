import React, { Component } from 'react';

export default class deleteButton extends Component {
    render() {
        return (
            <div className = "delete-button" onClick={this.props.toggleMode}>
                <i className="fa fa-trash"></i>
            </div>
        )
    };
}