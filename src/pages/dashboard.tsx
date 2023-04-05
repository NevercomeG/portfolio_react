import Layout from '@/components/dashboard/layout/Layout';
import { menu } from '@/components/dashboard/layout/menu';

const Dashboard = () => {
  return (
    <Layout title="Table Page" menu={menu}>
      <h1 className="mb-4 text-2xl font-bold text-gray-800">Dashboard</h1>
      <p className="mb-4 text-gray-700">Welcome to the dashboard!</p>
    </Layout>
  );
};

export default Dashboard;
