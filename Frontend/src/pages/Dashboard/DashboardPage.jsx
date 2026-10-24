import { useAuth } from '../../hooks';

const DashboardPage = () => {
  const { user } = useAuth();

  return (
    <main style={{ padding: '3rem 2rem' }}>
      <h1>Dashboard</h1>
      <p style={{ color: '#6b7280' }}>Welcome back, <strong>{user?.name}</strong>!</p>
    </main>
  );
};
export default DashboardPage;
