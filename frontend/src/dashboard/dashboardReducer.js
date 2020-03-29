const INITAL_STATE = {
    goals: []
}

export default function(state = INITAL_STATE, action) {
    switch(action.type) {
        case 'GOALS_FETCHED':
            return {...state, goals: action.payload.data};
        default:
            return state;
    }
}