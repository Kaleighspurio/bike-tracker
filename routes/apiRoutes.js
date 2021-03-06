// This creates a router so we can add our routes
const router = require('express').Router();
const moment = require('moment');

const activities = [];

// TODO: route for saving activity data
router.post('/activities', (req, res) => {
    const { mileage, duration, date } = req.body;
    if (!mileage) {
        return res.status(400).json({
            success: false,
            message: 'Mileage is required.',
        })
    }
    if (!duration) {
        return res.status(400).json({
            success: false,
            message: 'duration is required.',
        })
    }
    if (!date) {
        return res.status(400).json({
            success: false,
            message: 'Date is required.',
        })
    }
    activities.push(req.body)
    res.json({
        activities: activities,
        success: true 
    });
});

// TODO: route for getting activity data by duration
router.get('/graphs/duration', (req, res) => {
    // format like this:
    /*
    [
        [
            timestamp,
            data
        ]
    ]
    */
   let formattedData = activities.map((activity) => {
       const timestamp = moment(activity.date).format('x');
       return [parseInt(timestamp), parseInt(activity.duration)];
   })
   formattedData = formattedData.sort((a, b) => {
    return a[0] - b[0];
   })
    res.json(formattedData);
});

// TODO: route for getting activity data by mileage
router.get('/graphs/mileage', (req, res) => {
    // format like this:
    /*
    [
        [
            timestamp,
            data
        ]
    ]
    */
   let formattedData = activities.map((activity) => {
       const timestamp = moment(activity.date).format('x');
       return [parseInt(timestamp), parseInt(activity.mileage)];
   })
   formattedData = formattedData.sort((a, b) => {
    return a[0] - b[0];
   })
    res.json(formattedData);
});

module.exports = router;