import React, { useEffect, useState } from 'react';
import '../Styles/TimePicker.css';

const TimePicker = ({ formattedDate, selectedTime, setSelectedTime }) => {
  const [currentHour, setCurrentHour] = useState(new Date().getHours());
  const [currentMinute, setCurrentMinute] = useState(new Date().getMinutes());
  const [hour, setHour] = useState('');
  const [minute, setMinute] = useState('');
  const [period, setPeriod] = useState('');

  useEffect(() => {
    const [initialHour, initialMinute, initialPeriod = 'AM'] = selectedTime.split(/[: ]/);
    setHour(initialHour);
    setMinute(initialMinute);
    setPeriod(initialPeriod);
    console.log(selectedTime);
  }, [selectedTime]);

  useEffect(() => {
    const now = new Date();
    setCurrentHour(now.getHours());
    setCurrentMinute(now.getMinutes());

    // Initialize time to current time if formattedDate is today
    if (isToday(formattedDate)) {
      if (is24HourFormat()) {
        setHour(padZero(currentHour));
      } else {
        setHour(padZero(currentHour % 12 || 12));
        setPeriod(currentHour >= 12 ? 'PM' : 'AM');
      }
      setMinute(padZero(currentMinute));
      setSelectedTime(`${padZero(currentHour % 12 || 12)}:${padZero(currentMinute)} ${currentHour >= 12 ? 'PM' : 'AM'}`);
    }
  }, [formattedDate]);

  const isToday = (dateString) => {
    const today = new Date();
    const formattedDateObj = new Date(dateString);
    return formattedDateObj.getDate() === today.getDate() &&
           formattedDateObj.getMonth() === today.getMonth() &&
           formattedDateObj.getFullYear() === today.getFullYear();
  };

  const is24HourFormat = () => {
    const sampleDate = new Date(2024, 5, 15, 13, 0, 0); // Use a sample date to check
    const formattedTime = sampleDate.toLocaleTimeString([], { hour12: true });
    return formattedTime.indexOf('AM') === -1 && formattedTime.indexOf('PM') === -1;
  };

  const padZero = (num) => {
    return num < 10 ? `0${num}` : `${num}`;
  };

  const generateHours = () => {
    const hours = [];
    const isTodayDate = isToday(formattedDate);
    const startHour = isTodayDate && !is24HourFormat() ? (currentHour % 12 || 12) : 0;
    const endHour = is24HourFormat() ? 23 : (period === 'AM' ? 11 : 12);

    for (let i = startHour; i <= endHour; i++) {
      hours.push(padZero(i));
    }
    return hours;
  };

  const generateMinutes = () => {
    const minutes = [];
    const isTodayDate = isToday(formattedDate);
    const startMinute = isTodayDate && parseInt(hour) === currentHour ? currentMinute : 0;

    for (let i = startMinute; i < 60; i++) {
      minutes.push(padZero(i));
    }
    return minutes;
  };

  const generatePeriods = () => {
    const periods = ['AM', 'PM'];
    const isTodayDate = isToday(formattedDate);

    if (isTodayDate && !is24HourFormat()) {
      return [currentHour >= 12 ? 'PM' : 'AM'];
    }

    return periods;
  };

  const handleHourChange = (e) => {
    const newHour = e.target.value;
    setHour(newHour);
    setSelectedTime(`${newHour}:${minute} ${period}`);
  };

  const handleMinuteChange = (e) => {
    const newMinute = e.target.value;
    setMinute(newMinute);
    setSelectedTime(`${hour}:${newMinute} ${period}`);
  };

  const handlePeriodChange = (e) => {
    const newPeriod = e.target.value;
    setPeriod(newPeriod);
    setSelectedTime(`${hour}:${minute} ${newPeriod}`);
  };

  const hours = generateHours();
  const minutes = generateMinutes();
  const periods = generatePeriods();

  return (
    <div className="time-picker-container">
      <select className="time-select" value={hour} onChange={handleHourChange}>
        {hours.map(hour => (
          <option key={hour} value={hour}>{hour}</option>
        ))}
      </select>

      <span className="separator">:</span>

      <select className="time-select" value={minute} onChange={handleMinuteChange}>
        {minutes.map(minute => (
          <option key={minute} value={minute}>{minute}</option>
        ))}
      </select>

      {!is24HourFormat() && (
        <select className="time-select" value={period} onChange={handlePeriodChange}>
          {periods.map(period => (
            <option key={period} value={period}>{period}</option>
          ))}
        </select>
      )}
    </div>
  );
};

export default TimePicker;
