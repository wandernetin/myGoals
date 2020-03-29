import axios from 'axios';

const GOALS_URL = 'http://localhost:3333/goals';

export function getGoals() {
    const request = axios.get(GOALS_URL);
    return {
        type: 'GOALS_FETCHED',
        payload: request
    }
}