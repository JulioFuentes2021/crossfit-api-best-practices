const { getRecordForWorkout } = require("../database/Record");

const getRecordForWorkoutT = (workoutId) => {
    try {
        const record = getRecordForWorkout(workoutId);
        return record;
    } catch (error) {
        throw error;
    }
};
module.exports = { getRecordForWorkoutT };