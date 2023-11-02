import React from 'react';
import { users } from '../data.js';

function Login() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  function setData(input, type) {
    if (type === 'username') setUsername(input);
    if (type === 'password') setPassword(input);
  }

  function CheckName() {
    if (username.length <= 0 || password.length <= 0) {
      alert('Enter correct details');
      return;
    }
    let exist = users.filter((a) => {
      return a.user === username && a.pass === password;
    });
    if (exist.length >= 1) {
      localStorage.setItem('user', username);
      window.location.href = '/home';
      return;
    } else {
      window.location.href = '/login-failed';
      return;
    }
  }
  React.useEffect(() => {
    if (localStorage.getItem('user') !== 'null') {
      window.location.href = '/home';
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
            border: '1px solid black',
            borderRadius: '5px',
            width: '80%',
            height: '80%',
          }}
        >
          {/* username */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-evenly',
              marginTop: '50px',
            }}
          >
            <label htmlFor="username">Username : </label>
            <input
              type="text"
              onChange={(e) => setData(e.target.value, 'username')}
              name="username"
            />
          </div>

          {/* password */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-evenly',
              marginTop: '25px',
            }}
          >
            <label htmlFor="password">Password : </label>
            <input
              type="password"
              onChange={(e) => setData(e.target.value, 'password')}
              name="password"
            />
          </div>
          <div
            style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
          >
            <button
              type="submit"
              onClick={CheckName}
              style={{ padding: '5px', marginTop: '10px' }}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;
