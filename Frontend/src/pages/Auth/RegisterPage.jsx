import { useNavigate, Link } from 'react-router-dom';
import { useAuth, useForm } from '../../hooks';
import { Button, Input } from '../../components';
import { ROUTES } from '../../constants';

const RegisterPage = () => {
  const { register, isLoading, error, clearError } = useAuth();
  const navigate = useNavigate();
  const { values, handleChange } = useForm({ name: '', email: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    clearError();
    try {
      await register(values);
      navigate(ROUTES.DASHBOARD);
    } catch {
      // error already set in store
    }
  };

  return (
    <main style={{ display: 'flex', justifyContent: 'center', padding: '4rem 1rem' }}>
      <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: 400, display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
        <h1 style={{ margin: 0, fontSize: '1.6rem' }}>Register</h1>
        {error && <p style={{ color: '#ef4444', margin: 0 }}>{error}</p>}
        <Input id="name" name="name" label="Name" value={values.name} onChange={handleChange} required />
        <Input id="email" name="email" label="Email" type="email" value={values.email} onChange={handleChange} required />
        <Input id="password" name="password" label="Password" type="password" value={values.password} onChange={handleChange} required />
        <Button type="submit" isLoading={isLoading}>Create Account</Button>
        <p style={{ textAlign: 'center', margin: 0 }}>
          Already have an account? <Link to={ROUTES.LOGIN}>Login</Link>
        </p>
      </form>
    </main>
  );
};

export default RegisterPage;
