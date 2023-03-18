import { useEffect, useState } from 'react';

const Dashboard = () => {
  const [userData, setUserData] = useState<{ email: string } | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const response = await fetch('/me', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      if (response.ok) {
        const data = await response.json();
        setUserData(data);
      }
    };
    fetchUserData();
  }, []);

  const handleLogout = async () => {
    await fetch('/logout', {
      method: 'POST',
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    localStorage.removeItem('token');
    window.location.reload();
  };

  return (
    <div>
      {userData && (
        <>
          <p>Welcome, {userData.email}!</p>
          <button onClick={handleLogout}>Log out</button>
        </>
      )}
    </div>
  );
};

export default Dashboard;
