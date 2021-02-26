// import React, {useEffect, useState} from 'react';
// import axios from 'axios';

// const DeviceList = () => {
//     useEffect(() => {
//         const API_URL = process.env.REACT_APP_API_URL;
//         const API_PORT = process.env.REACT_APP_API_PORT;
//         const API_BASE_ADDRESS = `http://${API_URL}:${API_PORT}`;
//         const fetchData = async () => {
//           console.log(API_BASE_ADDRESS);
//           const result = await axios.get(`http://localhost:8001/Acme`); //'http://localhost:8000/api/v1/Acme')
//           //const result = await axios(`${API_BASE_ADDRESS}/Acme`);
//           console.log(result.data.length);
//           setResponse(result.data);
//         }
//         fetchData();
//       }, [])
// }