import React, { useState } from 'react';
import './Form.css';

const Form = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleCheckboxChange = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className='formsContainer'>
      {!submitted ? (
        <form onSubmit={handleSubmit}>

          <label>
            E-mail:
            <input type="text" value={email} onChange={handleEmailChange} />
          </label>

          <br />

          <label>
            Senha:
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={handlePasswordChange}
            />
          </label>

          <br />

          <label>
            Mostrar senha:
            <input
              type="checkbox"
              checked={showPassword}
              onChange={handleCheckboxChange}
            />
          </label>

          <br />

          <button type="submit">Enviar</button>
        </form>

      ) : (
        <div>
          <h4>E-mail: {email}</h4>
        </div>
      )}
    </div>
  );
};

export default Form;