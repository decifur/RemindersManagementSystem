import React from 'react';
function LoginFailed() {
  return (
    <>
      <div
        style={{
          textAlign: 'center',
          marginTop: '20px',
        }}
      >
        <h3>Login Failed</h3>
        <a href="/">Retry</a>
      </div>
    </>
  );
}
export default LoginFailed;
