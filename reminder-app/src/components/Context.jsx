import React from 'react';

export const ReminderContext = React.createContext(null);

const ContextProvider = ({ children }) => {
  const dataFrame = {
    date: '',
    subject: '',
    description: '',
    email: '',
    contact: '',
    sms: '',
    recur: '',
    enable: true,
  };

  React.useEffect(() => {
    if (!localStorage.getItem('reminder'))
      localStorage.setItem('reminder', JSON.stringify([]));
    if (!localStorage.getItem('user')) localStorage.setItem('user', null);
  }, []);

  function logout() {
    localStorage.setItem('user', 'null');
    window.location.href = '/logout';
    return;
  }
  return (
    <ReminderContext.Provider value={{ logout, dataFrame }}>
      {children}
    </ReminderContext.Provider>
  );
};

export default ContextProvider;
