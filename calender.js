const express = require('express');
const router = express.Router();
const AvailableDate = require('../models/AvailableDate'); // AvailableDate model

// Fetch available dates for the calendar
router.get('/available-dates', async (req, res) => {
  try {
    const availableDates = await AvailableDate.find();
    res.json(availableDates);
  } catch (error) {
    console.error('Error fetching available dates:', error);
    res.status(500).json({ message: 'Failed to fetch available dates' });
  }
});

// Fetch available time slots for a specific date
router.get('/time-slots/:date', async (req, res) => {
  const { date } = req.params;

  try {
    const availableDate = await AvailableDate.findOne({ date });
    if (!availableDate) {
      return res.status(404).json({ message: 'Date not found' });
    }

    const { timeSlots } = availableDate;
    res.json(timeSlots);
  } catch (error) {
    console.error('Error fetching time slots:', error);
    res.status(500).json({ message: 'Failed to fetch time slots' });
  }
});

module.exports = router;
