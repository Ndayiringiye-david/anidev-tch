import { useState } from 'react';

/**
 * Manage a simple form's field values and reset.
 * @param {Object} initialValues
 */
const useForm = (initialValues = {}) => {
  const [values, setValues] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setValues((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const reset = () => setValues(initialValues);

  return { values, handleChange, reset, setValues };
};

export default useForm;
