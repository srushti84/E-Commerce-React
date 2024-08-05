// Register.js
import  { useState } from 'react';
import './Register.css'; // Assuming you have a CSS file for your register styles

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    // Handle registration logic here
    console.log('Register with:', name, email, password);
  };

  return (
    <div className='register-wrapper'>
        <div className="register-container">
        <h2>Register</h2>
        <form onSubmit={handleRegister} className="register-form">
            <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            </div>
            <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            </div>
            <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            </div>
            <button type="submit" className="register-button">Register</button>
        </form>
        <p>Already have an account? <a href="/login">Login</a></p>
        </div>
    </div>
  );
};

export default Register;
