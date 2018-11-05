import { ADD_LESSON, DELETE_LESSON } from '../constants';
import preloadedState from '../preloadedState.js';

export default function dataReducer(state = preloadedState, action){
	switch(action.type){
		case ADD_LESSON:
			return [...state, action.payload];
		case DELETE_LESSON:
			return state.filter( lesson => lesson.id !== action.payload.id );
		default:
			return state;
	}
}