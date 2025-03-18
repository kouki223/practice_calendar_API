import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./routes/SignUp";
import Calendar from "./routes/Calendar";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider value={defaultSystem}>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route index element={<App />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="signUp" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </ChakraProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
