import {addLesson, clearDraggable, deleteLesson} from "./actions";
import connect from "react-redux/es/connect/connect";
import Footer from './containers/footer.js';
import Table from './containers/table.js';
import React, { Component } from 'react';
import Menu from './components/menu.js';
import './normalize.css';
import './App.css';

class App extends Component {
    state = {
        editMode: false,
    }

    changeModeToFalse = () => {
        this.setState({
            editMode: false
        })
    }

    toggleMode = () => {
        this.props.clearDraggable();
        this.setState({
            editMode: !this.state.editMode
        })
        if (!this.state.editMode) {
            let clickHandler = (e) => {
                e.stopImmediatePropagation();
                e.target.innerHTML = '';
            }
            Array.prototype.forEach.call( document.getElementsByClassName("filled-item"), (item)=>{
                item.style.pointerEvents = "auto";
                item.addEventListener('click', clickHandler, false)
            });
        }
    }

    insertData = (e) => {
        e.stopImmediatePropagation();
        if(this.props.draggable.subject && e.target.hasChildNodes() && e.target.childNodes[0].hasChildNodes()) {
            let prevNodes = e.target.childNodes[0].childNodes;
            let subject = prevNodes[0].innerText;
            let teacher = prevNodes[1].innerText;
            let room = prevNodes[2].innerText;
            this.props.addLesson({subject, teacher, room});
        }
        if (this.props.draggable.subject) e.target.innerHTML =
            `<div class="filled-item">` +
                `<h1 class="lesson"> ${this.props.draggable.subject} </h1>` +
                `<h2 class="teacher"> ${this.props.draggable.teacher} </h2>` +
                `<p  class="room"> ${this.props.draggable.room} </p>` +
            '</div>'

        this.props.delete(this.props.draggable.id);
        this.props.clearDraggable();
    }

  render() {
    return (
      <div className="App">
        <Menu changeModeToFalse={this.changeModeToFalse}/>
        <Table
            draggable={this.props.draggable}
            insertData={this.insertData}
            editMode = {this.state.editMode}
        />
        <Footer toggleMode={this.toggleMode}/>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
    return {
        delete: id => {
            dispatch(deleteLesson(id));
        },
        clearDraggable: () => {
            dispatch(clearDraggable());
        },
        addLesson: (data) => {
            dispatch(addLesson(data));
        }
    };
};

const mapStateToProps = state => {
    return {
        draggable: state.schedule,
        data: state.data
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
