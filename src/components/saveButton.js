import React, { Component } from 'react';

export default class saveButton extends Component {
    toggleButton = (e) => {
        let btn = e.target;
        btn.classList.remove("done");
        setTimeout(() => {
            btn.classList.add("done");
        })
    };

    render() {
        return (
            <button className='save-button' onClick={(e) => {this.toggleButton(e)}}>
                <p> Save </p>
            </button>
        )
    };
};
