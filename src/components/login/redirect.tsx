import { useRouter } from 'next/router';
import { useEffect } from 'react';

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!token) {
      router.push('/login');
    }
  }, [router, token]);

  return token ? children : null;
};

export default PrivateRoute;
