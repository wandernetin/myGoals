import axios from 'axios';

const GOALS_URL = 'http://localhost:3333/goals';



export async function getGoals() {
    const request = await axios.get(GOALS_URL);
    return {
        type: 'GOALS_FETCHED',
        payload: request
    }
}

export async function removeGoal(goal) {
    await axios.delete(GOALS_URL, {
        data : {
            goal : goal
        }
    });
}