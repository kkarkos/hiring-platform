import React, { useRef } from 'react';
import useIdentity from '../../../hooks/useIdentity';

const LoginForm = () => {
  const { loading, error, login } = useIdentity();
  const formRef = useRef(null);

  const loginUser = () => {
    if (!formRef.current) {
      return;
    }
    const email = formRef.current.email.value;
    const password = formRef.current.password.value;
    login(email, password);
  };
  return (
    <form
      ref={formRef}
      onSubmit={e => {
        e.preventDefault();
        loginUser();
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

      <button type="submit">Login</button>
      {loading && <pre>Loading</pre>}
      {error && (
        <pre style={{ background: 'salmon', padding: 10 }}>{error.message}</pre>
      )}
    </form>
  );
};

export default LoginForm;
