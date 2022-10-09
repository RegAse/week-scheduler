import logo from './logo.svg';
import './App.css';
import React from 'react';
import {useState, useEffect} from 'react';

// ScheduleItem is like a todo item....

function getFirstDayOfCurrentWeek(d)
{
  d = new Date();
  let day = d.getDay();
  let firstDay = d.getDate() - day + (day == 0 ? -6 : 1);
  return new Date(d.setDate(firstDay));
}

// Returns the week of the day that is send
function getWeekByDay(d)
{
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
    { Id: 0, title: "Yoga", dateFrom: "2022-10-09T08:30:00.00Z", dateTo:"2022-10-09T09:30:00.00Z" },
    { Id: 1, title: "Wake Up", dateFrom: "2022-10-09T08:00:00.00Z", dateTo:"2022-10-09T08:30:00.00Z" },
  ]);
  
  const [week, setWeek] = useState(getWeekByDay())

  useEffect(() => {

  });

  return (
    <div>
      <div className='container-fluid'>
        <div className='row'>
        {
        week.map((day) => (
          <div className='col-sm-2' key={day}>
            <div className='schedule-day'>
              <h3>Day: {day.toLocaleString()}</h3>
            </div>
          </div>
        ))
        }
        </div>
      </div>
    </div>
  );
}

export default App;
