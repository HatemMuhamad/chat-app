import { useState } from 'react';
import axios from 'axios';
import '../css/loginForm.css';

const projectID = '4e58bc83-b24c-4260-876d-e5f2427f12f3';

const Modal = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = { 'Project-ID': projectID, 'User-Name': username, 'User-Secret': password };

    try {
      await axios.get('https://api.chatengine.io/chats', { headers: authObject });

      localStorage.setItem('username', username);
      localStorage.setItem('password', password);

      window.location.reload();
      setError('');
    } catch (err) {
      setError('Oops, incorrect credentials.');
    }
  };

  return (
    <div className="login_signup_body">
      <div className="box" id="centered-form">
        <form className="loginForm" onSubmit={handleSubmit}>
          <span className="first_login_header">Welcome back!</span>
          <span className="second_login_header">Login to your account</span>
          <div className="input-container">
            <input className="input" type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
            <label>Username</label>
          </div>
          <div className="input-container">
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" required />
            <label>Password</label>
          </div>
          <div className="form-field">
            <button className="center__me button-82-pushable" type="submit" value="Login">
              <span className="button-82-shadow" />
              <span className="button-82-edge" />
              <span className="button-82-front text">
                Login now
              </span>
            </button>
            <h3 style={{ color: 'red', marginTop: '5px' }}>{error}</h3>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
