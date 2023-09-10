import React, { useState } from 'react';

const App = () => {
  const [age, setAge] = useState('');
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Error messages code
  const [ageError, setAgeError] = useState('');
  const [nameError, setNameError] = useState('');
  const [lasterror, setLastEror] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordEror, setPasswordError] = useState('');

  // State for form submission status
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const newAge = e.target.value;
    setAge(newAge);

    
  };

  const handleName = (e) => {
    const newName = e.target.value;
    setName(newName);

   
  };

  const handleEmail = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);

    const emailPattern = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;

    if (!emailPattern.test(emailValue)) {
      setEmailError('Please provide a valid email');
    } else {
      setEmailError('');
    }
  };

  const handlePassword = (e) => {
    const passwordValue = e.target.value;
    setPassword(passwordValue);

    const passwordPattern = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])(?=\S+$).{8,20}$/;

    if (!passwordPattern.test(passwordValue)) {
      setPasswordError('Please provide a strong password');
    } else {
      setPasswordError('');
    }
  };

  const handleLast = (e) => {
    const lastValue = e.target.value;
    setLastname(lastValue);

    
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let hasError = false;

    // Check if the age field is empty
    if (age === '') {
      setAgeError('Please provide your age');
      hasError = true;
    } else {
      setAgeError('');
    }

    // Check if the name field is empty
    if (name === '') {
      setNameError('Please provide your name');
      hasError = true;
    } else {
      setNameError('');
    }

    // Check if the last name field is empty
    if (lastname === '') {
      setLastEror('Please provide your last name');
      hasError = true;
    } else {
      setLastEror('');
    }

    // Check if the email field is empty
    if (email === '') {
      setEmailError('Please provide your email');
      hasError = true;
    } else {
      setEmailError('');
    }

    // Check if the password field is empty
    if (password === '') {
      setPasswordError('Please provide your password');
      hasError = true;
    } else {
      setPasswordError('');
    }

    // If there are no errors, you can proceed with form submission
    if (!hasError) {
      // Perform form submission logic here
      setIsSubmitted(true);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={age}
          placeholder='Enter your age'
          onChange={handleChange}
        />
        <h1>{ageError}</h1>
        <br></br>
        <input
          type='text'
          value={name}
          placeholder='Enter your name'
          onChange={handleName}
        />
        <h1>{nameError}</h1>
        <br></br>
        <input
          type='text'
          value={lastname}
          placeholder='Enter your last name'
          onChange={handleLast}
        />
        <h1>{lasterror}</h1>
        <br></br>
        <input
          type='email'
          value={email}
          placeholder='Enter your email'
          onChange={handleEmail}
        />
        <h1>{emailError}</h1>
        <br></br>
        <input
          type='password'
          value={password}
          placeholder='Enter your password'
          onChange={handlePassword}
        />
        <h1>{passwordEror}</h1>
        <br></br>
        <button type='submit'>Submit</button>
      </form>
      {isSubmitted && <p>Form Submitted Successfully!</p>}
    </div>
  );
};

export default App;
