import { useNavigate, Link } from 'react-router-dom';
import { useAuth, useForm } from '../../hooks';
import { Button, Input } from '../../components';
import { ROUTES } from '../../constants';

const LoginPage = () => {
  const { login, isLoading, error, clearError } = useAuth();
  const navigate = useNavigate();
  const { values, handleChange } = useForm({ email: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    clearError();
    try {
      await login(values);
      navigate(ROUTES.DASHBOARD);
    } catch {
      // error already set in store
    }
  };

  return (
    <main style={{ display: 'flex', justifyContent: 'center', padding: '4rem 1rem' }}>
      <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: 400, display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
        <h1 style={{ margin: 0, fontSize: '1.6rem' }}>Login</h1>
        {error && <p style={{ color: '#ef4444', margin: 0 }}>{error}</p>}
        <Input id="email" name="email" label="Email" type="email" value={values.email} onChange={handleChange} required />
        <Input id="password" name="password" label="Password" type="password" value={values.password} onChange={handleChange} required />
        <Button type="submit" isLoading={isLoading}>Login</Button>
        <p style={{ textAlign: 'center', margin: 0 }}>
          Don&apos;t have an account? <Link to={ROUTES.REGISTER}>Register</Link>
        </p>
      </form>
    </main>
  );
};

export default LoginPage;
