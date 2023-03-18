import { useEffect, useState } from 'react';

import Layout from '@/components/dashboard/layout/Layout';
import { menu } from '@/components/dashboard/layout/menu';

const Dashboard = () => {
  const [userData, setUserData] = useState(null);

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
    <Layout title='Table Page' menu={menu}>
      <h1 className='mb-4 text-2xl font-bold text-gray-800'>Dashboard</h1>
      <p className='mb-4 text-gray-700'>Welcome to the dashboard!</p>
    </Layout>
  );
};

export default Dashboard;
