import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [howFound, setHowFound] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, message, howFound });
  };

  return (
    <div className="plate">
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input 
            type="text" 
            id="name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input 
            type="email" 
            id="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea 
            id="message" 
            value={message} 
            onChange={(e) => setMessage(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label htmlFor="howFound">How did you find this website?</label>
          <select 
            id="howFound" 
            value={howFound} 
            onChange={(e) => setHowFound(e.target.value)} 
            required 
          >
            <option value="">Select One</option>
            <option value="Internet">Internet</option>
            <option value="Friend">Friend</option>
            <option value="Advertisement">Advertisement</option>
          </select>
        </div>
        <button className="submitButton" type="submit">Submit</button>
      </form>
      <img className="phone" src="https://gifdb.com/images/high/pink-aesthetic-anime-phone-dialing-2d0t9bszpz8xbe5t.gif"/>
    </div>
  );
};

export default Contact;
