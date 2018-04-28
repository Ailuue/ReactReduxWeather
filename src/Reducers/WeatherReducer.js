import { FETCH_WEATHER } from '../Actions/index';

export default function(state = [], action) {
    
    return action.type === FETCH_WEATHER ? 
        [action.payload.data, ...state] : 
        state;
}