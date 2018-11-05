import {createDraggable, deleteLesson} from '../actions';
import React, { Component } from 'react';
import { connect } from  'react-redux';
import MenuItem from '../containers/menuItem.js';
import AddButton from './addButton';
import './menu.css';

class Menu extends Component {
    state = {
        menu: false,
    }

    toggleMenu = () => {
        this.setState({
            menu: !this.state.menu
        })
        this.props.changeModeToFalse();
    }

  render ( ) {
    const menu = this.state.menu ? 'expanded' : 'hidden';
    return (
      <div className= {`menu ${menu}`}>
        <div className="menu-body">
            <div className="bar-wrapper">
                <div className="bar" onClick={this.toggleMenu}>
                    <div className="line" />
                    <div className="line" />
                    <div className="line" />
                </div>
            </div>
          <div className="header">
            <p>Click on lesson you want to add in your schedule.</p>
            < AddButton closeMenu={this.toggleMenu} />
          </div>
          <div className="list-of-items">
              {this.props.lessons.map((lesson)=>{
                 return(
                     < MenuItem
                         data={lesson}
                         key={lesson.id}
                         delete = {this.props.delete}
                         closeMenu = {this.toggleMenu}
                         createDraggable = {this.props.createDraggable}
                     />
                 )
              })}
          </div>
        </div>
      </div>
    )
  }
};

const mapStateToProps = state => {
    return {
        lessons: state.data
    };
};

const mapDispatchToProps = dispatch => {
    return {
        delete: id => {
            dispatch(deleteLesson(id));
        },
        createDraggable: data => {
            dispatch(createDraggable(data));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Menu);