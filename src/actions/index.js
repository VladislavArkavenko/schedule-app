import {ADD_LESSON, DELETE_LESSON, CREATE_DRAGGABLE, CLEAR_DRAGGABLE} from '../constants';
import uuidv4 from 'uuid/v4';

export const addLesson = ({subject, teacher, room}) => ({
	type: ADD_LESSON,
	payload: {
		id: uuidv4(),		
		subject,
		teacher,
		room
	}
});

export const deleteLesson = id => ({
	type: DELETE_LESSON,
	payload: {
		id
	}
});

export const createDraggable = data => ({
	type: CREATE_DRAGGABLE,
	payload: {
        id: data.id,
        subject: data.subject,
        teacher: data.teacher,
        room: data.room
	}
});

export const clearDraggable = () => ({
	type: CLEAR_DRAGGABLE
});