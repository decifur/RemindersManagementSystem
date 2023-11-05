import React from 'react';
import { logout } from './utilities';

function ViewReminder() {
  const reminderdata = JSON.parse(localStorage.getItem('reminder'));
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
          <h3>Viewing the Reminder</h3>
          <br />

          <table>
            <tr>
              <th>Last checked Date</th>
              <th>Subject</th>
              <th>Description</th>
              <th>email</th>
              <th>Contact</th>
              <th>SMS</th>
              <th>Recurring days</th>
              <th>Enabled</th>
            </tr>
            {reminderdata.length > 0
              ? reminderdata.map((data, idx) => {
                  return (
                    <tr key={idx}>
                      <td>{data.date}</td>
                      <td>{data.subject}</td>
                      <td>{data.description}</td>
                      <td>{data.email}</td>
                      <td>{data.contact}</td>
                      <td>{data.sms}</td>
                      <td>{data.recur}</td>
                      <td>{data.enable ? 'Yes' : 'No'}</td>
                    </tr>
                  );
                })
              : 'No reminder Found'}
          </table>

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
              marginTop: '10px',
            }}
          >
            <a href="/home">Back</a>
            <button type="submit" onClick={logout} style={{ padding: '3px' }}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default ViewReminder;
