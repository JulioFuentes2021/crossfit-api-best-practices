const { getRecordForWorkoutT } = require("../services/recordService")

const getRecordForWorkoutTest = (req, res) => {
    const { workoutId } = req.params;
    const record = getRecordForWorkoutT(workoutId);
    res.status(200).json({
        status: 200,
        record
    })
    // console.log(workoutId);
    // res.send('log')
};

module.exports = { getRecordForWorkoutTest };