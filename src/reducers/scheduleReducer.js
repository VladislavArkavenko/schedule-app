import {CLEAR_DRAGGABLE, CREATE_DRAGGABLE} from '../constants';

export default function scheduleReducer(state = {}, action){
    switch(action.type){
        case CREATE_DRAGGABLE:
            return action.payload;
        case CLEAR_DRAGGABLE:
            return {};
        default:
            return state;
    }
}