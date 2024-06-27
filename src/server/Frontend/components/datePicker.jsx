import React, { useState, useEffect } from 'react';
import '../Styles/DatePicker.css';

const SelectDatePicker = ({ setFormattedDate }) => {
  const today = new Date();
  const currentDay = today.getDate();
  const currentMonth = today.getMonth(); // January is 0
  const currentYear = today.getFullYear();
  const nextYear = currentYear + 1;

  const [selectedDay, setSelectedDay] = useState(currentDay);
  const [selectedMonth, setSelectedMonth] = useState(currentMonth);
  const [selectedYear, setSelectedYear] = useState(currentYear);

  useEffect(() => {
    const formatted = `${selectedYear}-${String(selectedMonth + 1).padStart(2, '0')}-${String(selectedDay).padStart(2, '0')}`;
    setFormattedDate(formatted);
  }, [selectedDay, selectedMonth, selectedYear]);

  const generateDays = (month, year) => {
    const date = new Date(year, month + 1, 0);
    const daysInMonth = date.getDate();
    const startDay = year === currentYear && month === currentMonth ? currentDay : 1;
    return Array.from({ length: daysInMonth - startDay + 1 }, (_, i) => startDay + i);
  };

  const handleDayChange = (e) => setSelectedDay(parseInt(e.target.value));
  const handleMonthChange = (e) => setSelectedMonth(parseInt(e.target.value));
  const handleYearChange = (e) => setSelectedYear(parseInt(e.target.value));

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const getAvailableMonths = (year) => {
    if (year === currentYear) {
      return months.slice(currentMonth);
    }
    return months;
  };

  const getAvailableYears = () => [currentYear, nextYear];

  return (
    <div className="date-picker-container">
      <div className="select-container">
        <select value={selectedDay} onChange={handleDayChange}>
          {generateDays(selectedMonth, selectedYear).map(day => (
            <option key={day} value={day}>{day}</option>
          ))}
        </select>

        <select value={selectedMonth} onChange={handleMonthChange}>
          {getAvailableMonths(selectedYear).map((month, index) => {
            const monthIndex = currentYear === selectedYear ? currentMonth + index : index;
            return (
              <option key={monthIndex} value={monthIndex}>{month}</option>
            );
          })}
        </select>

        <select value={selectedYear} onChange={handleYearChange}>
          {getAvailableYears().map(year => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SelectDatePicker;


