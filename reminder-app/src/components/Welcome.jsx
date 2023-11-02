import React from 'react';
import { ReminderContext } from './Context';
function Welcome() {
  const { logout } = React.useContext(ReminderContext);
  const d = new Date();
  function TodayDay(num) {
    if (num === 0) return 'Sunday';
    if (num === 1) return 'Monday';
    if (num === 2) return 'Tuesday';
    if (num === 3) return 'Wednesday';
    if (num === 4) return 'Thursday';
    if (num === 5) return 'Friday';
    if (num === 6) return 'Saturday';
    return;
  }

  function TodayMonth(num) {
    num++;
    if (num === 1) return 'January';
    if (num === 2) return 'February';
    if (num === 3) return 'March';
    if (num === 4) return 'April';
    if (num === 5) return 'May';
    if (num === 6) return 'June';
    if (num === 7) return 'July';
    if (num === 8) return 'August';
    if (num === 9) return 'September';
    if (num === 10) return 'October';
    if (num === 11) return 'November';
    if (num === 12) return 'December';
    return;
  }

  React.useEffect(() => {
    if (localStorage.getItem('user') === 'null') {
      window.location.href = '/';
    }
  }, []);
  return (
    <>
      <div
        style={{
          width: '100%',
          height: '80vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            width: '80%',
            height: '80%',
            textAlign: 'center',
          }}
        >
          <h3>
            Welcome to the Reminder Application, {localStorage.getItem('user')}
          </h3>
          <br />
          <h3>
            Today is {TodayDay(d.getDay())}, {d.getDate()} of{' '}
            {TodayMonth(d.getMonth())}
          </h3>
          <br />
          <a href="set-reminder">Set Reminder</a>
          <br /> <a href="modify-reminder">Modify Reminder</a>
          <br /> <a href="delete-reminder">Delete Reminder</a>
          <br /> <a href="view-reminder">View Reminder</a>
          <br />
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
              marginTop: '10px',
            }}
          >
            <a href="/">Back</a>
            <button type="submit" onClick={logout} style={{ padding: '3px' }}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Welcome;
