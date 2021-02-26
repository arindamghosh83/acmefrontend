import React, {useEffect, useState} from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

function App() {
  const [response, setResponse] = useState('');

  useEffect(() => {
    const API_URL = process.env.REACT_APP_API_URL;
    const API_PORT = process.env.REACT_APP_API_PORT;
    // const API_BASE_ADDRESS = `http://${API_URL}:${API_PORT}/api/v1`;
    const API_BASE_ADDRESS = `http://${API_URL}:${API_PORT}`;
    const fetchData = async () => {
      console.log(API_BASE_ADDRESS);
      const result = await axios.get(`${API_BASE_ADDRESS}/Acme`); //'http://localhost:8000/api/v1/Acme')
      //const result = await axios(`${API_BASE_ADDRESS}/Acme`);
      console.log(result.data.length);
      setResponse(result.data);
    }
    fetchData();
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
