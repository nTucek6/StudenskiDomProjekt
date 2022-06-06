import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from "./routes/Admin/pocetna"
import Login from "./js/login/login";
import StudentiPoSobama from "./routes/Admin/studentiPoSobi";
import StudentBezSobe from './routes/Admin/StudentBezSobe';
import StudentInfo from './js/student/status';

import MainS from "./routes/Student/pocetnaS";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
   <BrowserRouter>
   <Routes>
  <Route path="/" element={<App />}> 
  <Route path="/Prijava/:type" element={<Login/>}/>
  <Route path="" element={<Navigate to="/Prijava/studentLogin" />} />
  </Route>
  </Routes>
  <Routes>
  <Route path="/" element={<Main/>} > 
  <Route path="/pocetna" />
  <Route path="/sobe" element={<StudentiPoSobama/>} />
  <Route path="/studenti" element={<StudentBezSobe/>}/>
  </Route>
  </Routes>
  <Routes>
  <Route path="/" element={<MainS/>} > 
  <Route path="/status/:id" element={<StudentInfo/>} />
  </Route>
  </Routes>
  </BrowserRouter>
  </React.StrictMode>
);

