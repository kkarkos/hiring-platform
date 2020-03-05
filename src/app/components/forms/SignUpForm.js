import React, { useRef } from 'react';
import useIdentity from '../../../hooks/useIdentity';

const SignUpForm = () => {
  const { loading, error, create } = useIdentity();
  const formRef = useRef(null);

  const signup = () => {
    if (!formRef.current) {
      return;
    }
    const email = formRef.current.email.value;
    const password = formRef.current.password.value;
    const role = formRef.current.role.value;

    create(email, password, role);
  };
  return (
    <form
      ref={formRef}
      onSubmit={e => {
        e.preventDefault();
        signup();
      }}
    >
      <input
        type="email"
        name="email"
        placeholder="Email"
        autoCapitalize="off"
        required={true}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        required={true}
      />
      <select id="role">
        <option value="admin">Admin</option>
        <option value="employee">Employee</option>
        <option value="employer">Employer</option>
      </select>

      <button type="submit">Sign Up</button>
      {loading && <pre>Loading</pre>}
      {error && (
        <pre style={{ background: 'salmon', padding: 10 }}>{error.message}</pre>
      )}
    </form>
  );
};

export default SignUpForm;
