import React, { useState } from "react";
import { useQuery } from 'react-query'

const App = () => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState()

  const handleSubmit = async e => {
      e.preventDefault();

      const response = await fetch('http://localhost:3000/api/auth/login', {
          methode: 'POST',
          body: {
              email: {mail},
              password : {password},
          }
      })
      const data = await response.json()

      setUser(data)

      localStorage.setItem('user', data)

      console.log(data)

      
  }

// if there's a user show the message below
  if (user) {
    return <div>{user.pseudo} is loggged in</div>;
  }

  // if there's no user, show the login form
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="mail">📧 : </label>
      <input
        type="text"
        value={mail}
        placeholder="enter a username"
        onChange={({ target }) => setMail(target.value)}
      />
      <div>
        <label htmlFor="password">password: </label>
        <input
          type="password"
          value={password}
          placeholder="enter a password"
          onChange={({ target }) => setPassword(target.value)}
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default App;