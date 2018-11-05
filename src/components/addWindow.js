import  React, { Component } from 'react';
import { connect } from 'react-redux';
import './addWindow.css';
import  { addLesson}  from '../actions';

class Window extends Component {

    state = {
        subject : '',
        teacher: '',
        room: ''
    }

    onSubjectChangeHandler = (e) => {
        this.setState({subject: e.target.value});
    }

    onTeacherChangeHandler = (e) => {
        this.setState({teacher: e.target.value});
    }

    onRoomChangeHandler = (e) => {
        this.setState({room: e.target.value});
    }

    submitClickHandler = () => {
        let s = this.state;
        if(s.subject.trim() && s.teacher.trim() && s.room.trim() && !isNaN(s.room)) {
            this.props.add(s);
            this.props.closeWindow();
        } else {
            alert("Invalid data!");
        }
    }

    render() {

        return(
            <div className ="window-overlay" >
                <div className="window-content">
                    <div className="close-button" onClick={()=>{ this.props.closeWindow()}}>
                        <i className="fa fa-times"></i>
                    </div>
                    <div className="window-header" >
                        <div className="window-header-icon">
                            <i className="fa fa-graduation-cap"></i>
                        </div>
                    </div>
                    <div className="window-header-input-box">
                        <input
                            className = "subject-input"
                            value={this.state.subject}
                            onChange={ (e)=>{this.onSubjectChangeHandler(e)} }
                            placeholder="Subject..."
                        />
                        <input
                            className = "teacher-input"
                            value={this.state.teacher}
                            onChange={ (e)=>{this.onTeacherChangeHandler(e)} }
                            placeholder="Teacher..."
                        />
                        <input
                            className = "room-input"
                            value={this.state.room}
                            onChange={ (e)=>{this.onRoomChangeHandler(e)} }
                            placeholder="Room..."
                        />
                    </div>
                    <div className="submit-button" onClick={ ()=>{this.submitClickHandler()} }>
                        <p>Submit</p>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        add: state  => {
            dispatch(addLesson(state));
        }
    };
};

export default connect(
    null,
    mapDispatchToProps
)(Window);