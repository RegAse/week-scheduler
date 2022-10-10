import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';

// ScheduleItem is like a todo item....

function getFirstDayOfCurrentWeek(d) {
  d = new Date();
  let day = d.getDay();
  let firstDay = d.getDate() - day + (day == 0 ? -6 : 1);
  return new Date(d.setDate(firstDay));
}

// Returns the week of the day that is send
function getWeekByDay(d) {
  let firstDayOfWeek = getFirstDayOfCurrentWeek();

  let daysOfWeek = [new Date(firstDayOfWeek)]
  for (let i = 0; i < 6; i++) {
    // firstDayOfWeek.setDate(firstDayOfWeek.getDate() + 1);

    let newDay = new Date(firstDayOfWeek.setDate(firstDayOfWeek.getDate() + 1));
    daysOfWeek.push(newDay);
  }
  return daysOfWeek;
}

function App() {
  const [data, setData] = useState([
    { Id: 0, title: "Yoga", dateFrom: "2022-10-09T08:30:00.00Z", dateTo: "2022-10-09T09:30:00.00Z" },
    { Id: 1, title: "Wake Up", dateFrom: "2022-10-09T08:00:00.00Z", dateTo: "2022-10-09T08:30:00.00Z" },
  ]);

  const [week, setWeek] = useState(getWeekByDay())

  useEffect(() => {

  });

  return (
    <div>
      {/* <nav className='navbar-custom-1'>

      </nav> */}

      <div className='container-fluid'>
        <div className='col-sm-12'>
          <div className='schedule-main-container'>
            <div className='schedule-main-previous-week'>
              <h4>Previous Week</h4>
            </div>
            <div className='schedule-main-days-container'>
              {
                week.slice(0, -2).map((day) => (
                  <div key={day} className="schedule-day-box">
                    <div className='schedule-day'>
                      <p className='schedule-day-date'>{day.toLocaleDateString("en-US", { day: 'numeric' })} {day.toLocaleDateString("en-US", { month: 'long' })}</p>
                      <p className='schedule-day-date'>{day.toLocaleDateString("en-US", { weekday: 'long' })}</p>
                      <div className='schedule-title-divider'></div>
                      <div className='schedule-day-list-schedule-items'>
                        <div className='schedule-day-list-schedule-item'>
                          <p className='schedule-day-list-schedule-item-date'>08:30</p>
                          <p className='schedule-day-list-schedule-item-title'>Watch Rick & Morty</p>
                        </div>
                        <div className='schedule-day-list-schedule-item'>
                          <p className='schedule-day-list-schedule-item-date'>09:00</p>
                          <p className='schedule-day-list-schedule-item-title'>Yoga</p>
                        </div>
                        <div className='schedule-day-list-schedule-item'>
                          <p className='schedule-day-list-schedule-item-date'>12:30</p>
                          <p className='schedule-day-list-schedule-item-title'>Yoga</p>

                        </div>
                        <div className='schedule-day-list-schedule-item'>
                          <p className='schedule-day-list-schedule-item-date'>17:30</p>
                          <p className='schedule-day-list-schedule-item-title'>Yoga</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              }
              <div className='schedule-main-weekend'>
                {
                  week.slice(-2).map((day) => (
                    <div key={day} className='schedule-day-box-weekend'>
                      <div className='schedule-day'>
                        <p className='schedule-day-date'>{day.toLocaleDateString("en-US", { day: 'numeric' })} {day.toLocaleDateString("en-US", { month: 'long' })}</p>
                        <p className='schedule-day-date'>{day.toLocaleDateString("en-US", { weekday: 'long' })}</p>
                        <div className='schedule-title-divider'></div>
                        <div className='schedule-day-list-schedule-items'>
                          <div className='schedule-day-list-schedule-item'>
                            <p className='schedule-day-list-schedule-item-date'>08:30</p>
                            <p>Watch Rick & Morty</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
            <div className='schedule-main-next-week'>
              <h4>Next Week</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
