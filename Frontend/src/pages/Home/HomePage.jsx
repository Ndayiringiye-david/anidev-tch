import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants';

const HomePage = () => (
  <main style={{ padding: '4rem 2rem', textAlign: 'center' }}>
    <h1>Welcome to AniDev TCH 🚀</h1>
    <p style={{ color: '#6b7280', marginTop: '0.5rem' }}>
      Your project is set up and ready to go.
    </p>
    <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
      <Link to={ROUTES.LOGIN}>Login</Link>
      <Link to={ROUTES.REGISTER}>Register</Link>
    </div>
  </main>
);

export default HomePage;
