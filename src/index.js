import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sweets from "./components/Sweets";
import Anime from "./components/Anime";
import Different from "./components/Different";
import Serials from "./components/Serials";
import Dorams from "./components/Dorams";
import Dis from "./components/Dis";
import Cartons from "./components/Cartons";
import { Routes, Route, Link, HashRouter } from 'react-router-dom';


ReactDOM.render(

  <HashRouter >
    <Routes>
      <Route path="*" element={<App />} />
      <Route path="/Anime" element={<Anime />} />
      <Route path="/Different" element={<Different />} />
      <Route path="/Dis" element={<Dis />} />
      <Route path="/Dorams" element={<Dorams />} />
      <Route path="/Serials" element={<Serials />} />
      <Route path="/Sweets" element={<Sweets />} />
      <Route path="/Cartons" element={<Cartons />} />

    </Routes>
  </HashRouter >
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))

