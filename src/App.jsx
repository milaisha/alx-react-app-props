import React from 'react';
import ProfilePage from './components/ProfilePage.jsx';
import UserContext from './UserContext.js';

function App() {
  const userData = { name: 'ane Doen', email: 'ane.doen@example.com' };

  return (
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App;
