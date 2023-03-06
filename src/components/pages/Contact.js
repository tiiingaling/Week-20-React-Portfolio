
import React, { useState } from 'react';

function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [emailBlurred, setEmailBlurred] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleBlur = (event) => {
    if (event.target.name === 'email') {
      setEmailBlurred(true);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formState);
    setFormState({ name: '', email: '', message: '' });
    setEmailBlurred(false);
  };

  return (

    <div>
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          value={formState.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          value={formState.email}
          onChange={handleChange}
          onBlur={handleBlur}
          {...(emailBlurred && { required: true })}
        />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message:</label>
        <textarea
          className="form-control"
          id="message"
          name="message"
          value={formState.message}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Send Message
      </button>
    </form>
    </div>
  );
}

export default ContactForm;
