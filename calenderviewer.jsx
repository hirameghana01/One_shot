import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';

const CalendarPage: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [availableDates, setAvailableDates] = useState<Date[]>([]);

  useEffect(() => {
    // Fetch available dates from the backend and update state
  }, []);

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
    // Navigate to the time slots page for the selected date
  };

  return (
    <div>
      <h2>Select a Date</h2>
      <Calendar onClickDay={handleDateClick} tileDates={availableDates} />
    </div>
  );
};

export default CalendarPage;
