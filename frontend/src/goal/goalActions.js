import axios from 'axios';
import {toastr} from 'react-redux-toastr'


const GOALS_URL = 'http://localhost:3333/goals';


export function saveGoal(values) {
    return dispatch => {
        axios.post(GOALS_URL, {values}).then(res => {
            toastr.success('Sucess', 'Done!');
        });
    }
}